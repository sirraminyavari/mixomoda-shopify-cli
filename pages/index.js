import { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import MainLayout from "../layout/main-layout";
import ProductsLayout from "../layout/products-layout";
import StorePairLayout from "../layout/store-pair-layout";
import { Box, Wrapper, GoBack } from "../styles/index.styles";
import ArrowCircleLeftIcon from "../icons/ArrowCircleLeft";

const Index = () => {
  const [storeId, setStoreId] = useState();

  /*
  import { ResourcePicker } from "@shopify/app-bridge-react";
  const [rsPickerOpen, setRSPickerOpen] = useState(false);
  <ResourcePicker 
    resourceType="Product"
    open={ rsPickerOpen }
    onCancel={ () => setRSPickerOpen(false) }
  />
  */

  return (
    <>
      <ToastContainer style={{ zIndex: 100 }} />
      <MainLayout storeId={ storeId }>
        <Wrapper>
          <TransitionGroup className="transition-group" style={{ flex: "1 1 auto" }}>
            <CSSTransition key={ storeId ? "this" : "that" } classNames="fade" timeout={ 1000 }>
              { storeId ? 
                <Box>
                  <GoBack onClick={ () => setStoreId(null) }>
                    <ArrowCircleLeftIcon style={{ marginInlineEnd: "0.5rem" }} />
                    Go Back
                  </GoBack>
                  <ProductsLayout storeId={ storeId } />
                </Box> : 
                <Box>
                  <StorePairLayout codeConfirmed={ (code) => setStoreId(code) } />
                </Box>
              }
            </CSSTransition>
          </TransitionGroup>
        </Wrapper>
      </MainLayout>
    </>
  );
};

export default Index;
