import { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import MainLayout from "../layout/main-layout";
import ProductsLayout from "../layout/products-layout";
import StorePairLayout from "../layout/store-pair-layout";
import { Wrapper } from "../styles/index.styles";

export default function Index() {
  const [pairCode, setPairCode] = useState(null);
  
  return (
    <MainLayout>
      <Wrapper>
        <TransitionGroup className="transition-group">
          <CSSTransition classNames="fade" timeout={ 1000 }>
            { pairCode ? 
              <ProductsLayout /> : 
              <StorePairLayout 
                codeConfirmed={ (code) => setPairCode(code) }
              />
            }
          </CSSTransition>
        </TransitionGroup>
      </Wrapper>
    </MainLayout>
  );
};
