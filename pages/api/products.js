const axios = require('axios');

export default function handler(req, res) {
  let data = JSON.stringify({
    "products": [
      {
        "name": "Cloth1",
        "url": "https://moclothing.com/product1",
        "images": [
          "https://cdn.shopify.com/s/files/1/0489/4549/6226/products/Bildschirmfoto2021-10-21um16.34.55.png?v=1634826578",
          "https://cdn.shopify.com/s/files/1/0489/4549/6226/products/Bildschirmfoto2021-10-21um16.35.06.png?v=1634826578",
          "https://cdn.shopify.com/s/files/1/0489/4549/6226/products/Bildschirmfoto2021-10-21um16.34.42.png?v=1634826578"
        ],
        "image": "https://cdn.shopify.com/s/files/1/0489/4549/6226/products/Bildschirmfoto2021-10-21um16.34.55.png?v=1634826578",
        "status": "active"
      }
    ]
  });

  axios({
    method: 'post',
    url: 'https://sdk.dev.mixomoda.ai/v1/products',
    headers: { 
      'api-key': 'b6e52a50-46f0-11ec-8d0f-6f7d8db65af7', 
      'Content-Type': 'application/json'
    },
    data: data
  })
  .then(function (response) {
    res.status(200).json(response.data);
  })
  .catch(function (error) {
    res.status(200).json({ error: error });
  });
}
