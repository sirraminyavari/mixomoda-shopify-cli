import { useState } from "react";
import MainLayout from "../layout/main-layout";
import ProductsLayout from "../layout/products-layout";
import StorePairLayout from "../layout/store-pair-layout";

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
