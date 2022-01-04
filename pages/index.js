import { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import MainLayout from "../layout/main-layout";
import ProductsLayout from "../layout/products-layout";
import StorePairLayout from "../layout/store-pair-layout";
import { Box, Wrapper, GoBack } from "../styles/index.styles";
import ArrowCircleLeftIcon from "../icons/ArrowCircleLeft";

export default function Index() {
  const [pairingCode, setPairingCode] = useState("12");
  
  return (
    <MainLayout>
      <Wrapper>
        <TransitionGroup className="transition-group" style={{ flex: "1 1 auto;" }}>
          <CSSTransition key={ pairingCode ? "this" : "that" } classNames="fade" timeout={ 1000 }>
            { pairingCode ? 
              <Box>
                <GoBack onClick={ () => setPairingCode(null) }>
                  <ArrowCircleLeftIcon style={{ marginInlineEnd: "0.5rem" }} />
                  Go Back
                </GoBack>
                <ProductsLayout pairingCode={ pairingCode } />
              </Box> : 
              <Box>
                <StorePairLayout codeConfirmed={ (code) => setPairingCode(code) } />
              </Box>
            }
          </CSSTransition>
        </TransitionGroup>
      </Wrapper>
    </MainLayout>
  );
};
