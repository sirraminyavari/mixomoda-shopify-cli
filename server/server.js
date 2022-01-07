import "@babel/polyfill";
import dotenv from "dotenv";
import "isomorphic-fetch";
import createShopifyAuth, { verifyRequest } from "@shopify/koa-shopify-auth";
import Shopify, { ApiVersion } from "@shopify/shopify-api";
import Koa from "koa";
import bodyParser from "koa-bodyparser";
import next from "next";
import Router from "koa-router";

dotenv.config();
const port = parseInt(process.env.PORT, 10) || 8081;
const dev = process.env.NODE_ENV !== "production";
const app = next({
  dev,
});
const handle = app.getRequestHandler();

Shopify.Context.initialize({
  API_KEY: process.env.SHOPIFY_API_KEY,
  API_SECRET_KEY: process.env.SHOPIFY_API_SECRET,
  SCOPES: process.env.SCOPES.split(","),
  HOST_NAME: process.env.HOST.replace(/https:\/\/|\/$/g, ""),
  API_VERSION: ApiVersion.October20,
  IS_EMBEDDED_APP: true,
  // This should be replaced with your preferred storage strategy
  SESSION_STORAGE: new Shopify.Session.MemorySessionStorage(),
});

// Storing the currently active shops in memory will force them to re-login when your server restarts. You should
// persist this object in your app.
const ACTIVE_SHOPIFY_SHOPS = {};
const SHOP_PRODUCTS = {};

const API_KEY = process.env.SHOPIFY_API_KEY;
let ACCESS_TOKEN = "";

const getShop = () => {
  let allShops = Object.keys(ACTIVE_SHOPIFY_SHOPS).filter(k => !!ACTIVE_SHOPIFY_SHOPS[k]);
  return allShops.length ? allShops[0] : null;
};

const toShopifyProduct = (data) => {
  data = data || {};
  
  return {
    title: data.name,
    product_type: "Clothe",
    published: data.status === "active",
    body_html: encodeURI(JSON.stringify({ 
      url: data.url,
      price: data.price, 
      image: data.image, 
      images: data.images || [] 
    }))
  };
};

const fromShopifyProduct = (product) => {
  product = typeof(product) === "object" ? product : 
    JSON.parse((product || "{}").replaceAll("\"{", "{").replaceAll("}\"", "}")) || {};
  const body = JSON.parse(decodeURI(product.body_html || "{}")) || {};

  return {
    _id: product.id,
    name: product.title,
    url: body.url,
    price: body.price,
    status: product.status === "active" ? "active" : "inactive",
    image: body.image,
    images: body.images || []
  };
};

app.prepare().then(async () => {
  const server = new Koa();
  const router = new Router();
  server.keys = [Shopify.Context.API_SECRET_KEY];
  server.use(
    createShopifyAuth({
      async afterAuth(ctx) {
        // Access token and shop available in ctx.state.shopify
        const { shop, accessToken, scope } = ctx.state.shopify;
        const host = ctx.query.host;
        ACTIVE_SHOPIFY_SHOPS[shop] = scope;

        ACCESS_TOKEN = accessToken;
        
        //This webhook listener listens to production creation event and stores them in memory
        //the get_products API get these products and show them to the user
        const response = await Shopify.Webhooks.Registry.register({
          shop,
          accessToken,
          path: "/webhooks",
          topic: "PRODUCTS_CREATE",
          webhookHandler: async (topic, shop, body) => {
            SHOP_PRODUCTS[shop] = SHOP_PRODUCTS[shop] || [];
            SHOP_PRODUCTS[shop].push(fromShopifyProduct(body));
          }
        });

        if (!response.success) {
          console.log(
            `Failed to register PRODUCTS_CREATE webhook: ${response.result}`
          );
        }

        // Redirect to app with shop parameter upon auth
        ctx.redirect(`/?shop=${shop}&host=${host}`);
      },
    })
  );

  server.use(async (ctx, next) => {
    if (ctx.path === '/webhooks') ctx.disableBodyParser = true;
    await next();
  });

  server.use(bodyParser());

  const handleRequest = async (ctx) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
    ctx.res.statusCode = 200;
  };

  router.post("/api/store_pair", async (ctx) => {
    const ak = ctx.request.body?.key || " ";
    const isValidKey = ak.replaceAll("-", "").toLowerCase() === API_KEY.toLowerCase();
    
    ctx.body = isValidKey ? {
      "shop": getShop(),
      "message": "Store paired successfully"
    } : { "error": "Invalid pairing key" };
  });


  //this API uses 'Shopify Client API' and creates new products
  router.post("/api/products", async (ctx) => {
    const client = new Shopify.Clients.Rest(getShop(), ACCESS_TOKEN);
    const products = (ctx.request?.body?.products || []).map(p => toShopifyProduct(p));
    let createdProducts = [];

    for (let i = 0; i < products.length; i++) {
      const response = await client.post({
        path: 'products',
        type: "application/json",
        data: JSON.stringify({ product: products[i] }),
      });
      
      createdProducts.push(fromShopifyProduct(response?.body?.product || {}));
    }
    
    ctx.body = { products: createdProducts };
  });

  //lists of all the products that have received from the 'products/create' webhook
  router.post("/api/get_products", async (ctx) => {
    const shop = getShop();

    ctx.body = {
      "products": !shop ? [] : SHOP_PRODUCTS[shop] || []
    };
  });

  router.post("/webhooks", async (ctx) => {
    try {
      await Shopify.Webhooks.Registry.process(ctx.req, ctx.res);
      console.log(`Webhook processed, returned status code 200`);
    } catch (error) {
      console.log(`Failed to process webhook: ${error}`);
    }
  });

  router.post(
    "/graphql",
    verifyRequest({ returnHeader: true }),
    async (ctx, next) => {
      await Shopify.Utils.graphqlProxy(ctx.req, ctx.res);
    }
  );

  router.get("(/_next/static/.*)", handleRequest); // Static content is clear
  router.get("/_next/webpack-hmr", handleRequest); // Webpack content is clear
  router.get("(.*)", async (ctx) => {
    const shop = ctx.query.shop;

    // This shop hasn't been seen yet, go through OAuth to create a session
    if (ACTIVE_SHOPIFY_SHOPS[shop] === undefined) {
      ctx.redirect(`/auth?shop=${shop}`);
    } else {
      await handleRequest(ctx);
    }
  });

  server.use(router.allowedMethods());
  server.use(router.routes());
  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
