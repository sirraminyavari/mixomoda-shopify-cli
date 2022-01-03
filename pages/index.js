import { useState } from "react";
import MainLayout from "../components/main-layout";
import ProductsLayout from "../components/products-layout";
import StorePairLayout from "../components/store-pair-layout";

export default function Index() {
  const [pairCode, setPairCode] = useState(null);
  
  return (
    <MainLayout>
      { pairCode ? 
        <ProductsLayout /> : 
        <StorePairLayout 
          codeConfirmed={ (code) => setPairCode(code) }
        />
      }
    </MainLayout>
  );
};
