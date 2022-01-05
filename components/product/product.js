import { 
    ProductContainer,
    TitleArea,
    Title,
    SubmittedStatus,
    StyledA
} from "./product.styles";
import Image from "../image";
import Chip from '@mui/material/Chip';
import CheckCircleIcon from "../../icons/CheckCircle";
import DimensionHelper from "../../util/dimensionHelper";
import Price from "./price";

const Product = (props) => {
    const { _id, name, url, image, status, images, price, weight, updatedAt } = props;
    const { isMobile, isTablet } = DimensionHelper() || {};

    //2022-01-05T19:43:54.234Z

    return (
        <ProductContainer>
            <TitleArea>
                <div style={{ flex: "0 0 auto" }}>
                    <Image url={ (image || {}).inStoreUrl || image } size={ 6 } />
                </div>
                <div style={{ flex: "1 1 auto", display: "flex", flexFlow: "column" }}>
                    <div style={{ flex: "0 0 auto", display: "flex", flexFlow: "row" }}>
                        <div style={{ flex: "1 1 auto", display: "flex", flexFlow: "row", alignItems: "center"}}>
                            <Title>
                                <StyledA url={ url }>{ name }</StyledA>
                            </Title>
                            <Chip label={ status } color={ status === "active" ? "success" : "error" }
                                style={{ padding: 0, fontSize: "0.7rem", height: "1.5rem" }} />
                        </div>
                        <SubmittedStatus submitted={ !!_id }>
                            { !_id ? "not submitted" : "submitted" }
                            { _id && <CheckCircleIcon style={{ marginInlineStart: "0.3rem" }} /> }
                        </SubmittedStatus>
                    </div>
                    <div style={{ flex: "1 1 auto" }} />
                    <div style={{ flex: "0 0 auto", display: "flex", flexFlow: "row" }}>
                        <div style={{ flex: "1 1 auto", display: "flex", flexFlow: "column", paddingInlineStart: "1rem" }}>
                            <div style={{ flex: "1 1 auto;" }} />
                            <div style={{ flex: "0 0 auto;", display: "flex", alignItems: "top", paddingBottom: "0.2rem" }}>
                                <Price price={ price } />
                            </div>
                        </div>
                        { !isMobile &&
                            (images || []).map((img, ind) => (
                                <div key={ ind } style={{ flex: "0 0 auto", paddingInlineStart: "0.5rem" }}>
                                    <Image url={ (img || {}).inStoreUrl || img } size={ 3 } />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </TitleArea>
        </ProductContainer>
    );
};

export default Product;