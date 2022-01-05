import { Button } from "@mui/material";
import { useState } from "react";
import { 
  MainWrapper, 
  ProductsContainer, 
  NoProduct, 
  AddButton
} from "../styles/products.styles";
import Product from "../components/product/product";
import PlusIcon from "../icons/Plus";
import LoadingIconFlat from "../icons/LoadingIconFlat";
import Modal from "../components/modal/modal";
import Toast from "../components/toast";
import NewProduct from "../components/new-product/new-product";

const testItem = {
  "rnd": "dfdf",
  "name": "Cloth1",  //OK
  "url": "https://moclothing.com/product1", //OK
  "price": 105, //OK
  "images": [
    "https://cdn.shopify.com/s/files/1/0489/4549/6226/products/Bildschirmfoto2021-10-21um16.34.55.png?v=1634826578",
    "https://cdn.shopify.com/s/files/1/0489/4549/6226/products/Bildschirmfoto2021-10-21um16.35.06.png?v=1634826578",
    "https://cdn.shopify.com/s/files/1/0489/4549/6226/products/Bildschirmfoto2021-10-21um16.34.42.png?v=1634826578"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0489/4549/6226/products/Bildschirmfoto2021-10-21um16.34.55.png?v=1634826578", //OK
  "status": "active" //OK
};

const ProductsLayout = ({ }) => {
  const [products, setProducts] = useState([testItem]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const addProduct = (product) => { 
    setShowAddModal(false);

    if (products.some(p => !p._id && (p.name.toLowerCase() === product.name.toLowerCase())))
      setProducts(products.map(p => !p._id && (p.name.toLowerCase() === product.name.toLowerCase()) ? product : p));
    else setProducts(products.concat(product)); 
  }

  const errorOccurred = (err) => Toast({ type: 'error', message: err }); 

  const submitProducts = () => {
    setLoading(true);

    const newProducts = products.filter(p => !p._id);
    
    fetch("../../api/products", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({ products: newProducts })
    })
    .then((res) => {
      res.json().then(result => {
        setLoading(false);

        let resultProducts = (result || {}).products || [];
        
        if (!resultProducts.length) {
          return errorOccurred("Something went wrong!");
        }

        let arr = products.map(p => {
          let newP = resultProducts.filter(x => x.name.toLowerCase() === p.name.toLowerCase());
          return !p._id && newP.length ? newP[0] : null;
        });

        let newArr = resultProducts.filter(p => !arr.some(x => { 
          return (x._id === p._id) || (!x._id && (x.name.toLowerCase() === p.name.toLowerCase()));
        }));

        setProducts(arr.concat(newArr));

        Toast({ type: 'success', message: "Product(s) submitted successfully!" });
      });
    })
    .catch(error => { 
      console.log('error:', error); 
      errorOccurred("Something went wrong!");
    });
  };
  
  return (
    <MainWrapper>
      <ProductsContainer>
        <AddButton
          onClick={ () => setShowAddModal(true) }
        >
          <PlusIcon />
        </AddButton>
        {!products.length &&
          <NoProduct>Your product list is empty!</NoProduct>
        }
        { products.map(p => <Product key={ p._id || p.rnd } { ...p } />) }
      </ProductsContainer>
      <div style={{ textAlign: "center" }}>
        <Button 
          variant="contained" 
          style={{ 
              width: "16rem", 
              padding: "0.5rem 1rem",
              height: "2.5rem"
          }}
          disabled={ !products.filter(p => !p._id).length }
          onClick={ () => submitProducts() }
        >
          { loading ? <LoadingIconFlat /> : "Submit All" }
        </Button>
      </div>
      <Modal
        open={ showAddModal }
        onClose={ () => setShowAddModal(false) }
        title="Product Information"
      >
        <NewProduct 
          onOk={ (newProduct) => addProduct(newProduct) }
          onCancel={ () => setShowAddModal(false) }
        />
      </Modal>
    </MainWrapper>
  );
};

export default ProductsLayout;