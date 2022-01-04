import { Button } from "@mui/material";
import { useState } from "react";
import { MainWrapper, ProductsContainer, Product, NoProduct } from "../styles/products.styles";
import PlusIcon from "../icons/Plus";
import Modal from "../components/modal/modal";

const testItem = {
  "_id": "123",
  "name": "Cloth1",
  "url": "https://moclothing.com/product1",
  "images": [
    "https://cdn.shopify.com/s/files/1/0489/4549/6226/products/Bildschirmfoto2021-10-21um16.34.55.png?v=1634826578",
    "https://cdn.shopify.com/s/files/1/0489/4549/6226/products/Bildschirmfoto2021-10-21um16.35.06.png?v=1634826578",
    "https://cdn.shopify.com/s/files/1/0489/4549/6226/products/Bildschirmfoto2021-10-21um16.34.42.png?v=1634826578"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0489/4549/6226/products/Bildschirmfoto2021-10-21um16.34.55.png?v=1634826578",
  "status": "active"
};

const ProductsLayout = ({ }) => {
  const [products, setProducts] = useState([testItem]);
  const [showAddModal, setShowAddModal] = useState(false);

  const addProduct = (product) => setProducts(products.concat(product));
  
  return (
    <MainWrapper>
      <ProductsContainer>
        {!products.length &&
          <NoProduct>Your product list if empty!</NoProduct>
        }
        {
          products.map(p => (
            <Product key={ p._id }>
              { p.name }
            </Product>
          ))
        }
      </ProductsContainer>
      <Button 
        variant="contained" 
        style={{ 
            width: "16rem", 
            padding: "0.5rem 1rem",
            height: "2.5rem"
        }}
        onClick={ () => setShowAddModal(true) }
      >
        <PlusIcon style={{ marginInlineEnd: "0.5rem" }} />
        Add Product
      </Button>
      <Modal
        open={ showAddModal }
        onClose={ () => setShowAddModal(false) }
        title="Product Information"
      >
        <div>
          ramin yavari
        </div>
      </Modal>
    </MainWrapper>
  );
};

export default ProductsLayout;