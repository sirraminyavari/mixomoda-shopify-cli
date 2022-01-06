import { useState, useEffect } from "react";
import {
    Wrapper,
    RandomContainer,
    RandomTitle,
    ButtonsContainer,
    StyledButton,
    PriceContainer,
    LeftColumn,
    RightColumn
} from "./new-product.styles";
import Input from "../Input";
import ImageInput from "../ImageInput";
import ImageList from "./image-list";
import { random, isUrl, getType } from "../../util/utillities";
import { Switch } from "@mui/material";

const getImageUrl = data => (data.image || {}).inStoreUrl || data.image;
const getImageList = data => (data.images || []).map(i => i.inStoreUrl || i);

const NewProduct = ({ data, onOk, onCancel, randomDataRequest, ...props }) => {
    const [name, setName] = useState(data.name);
    const [nameError, setNameError] = useState('');
    useEffect(() => setNameError(''), [name]);

    const [url, setUrl] = useState(data.url);
    const [urlError, setUrlError] = useState('');
    useEffect(() => setUrlError(''), [url]);

    const [price, setPrice] = useState(data.price);
    const [status, setStatus] = useState(data.status);

    const [image, setImage] = useState(getImageUrl(data));
    const [imageList, setImageList] = useState(getImageList(data));
    
    useEffect(() => {
        setName(data.name);
        setUrl(data.url);
        setPrice(data.price);
        setStatus(data.status);
        setImage(getImageUrl(data));
        setImageList(getImageList(data));
    }, [data]);
    
    const [shake, setShake] = useState(false);

    const okButtonDisabled = !(name || " ").trim() || !(url || " ").trim() || !(image || " ").trim();

    const handleOk = () => {
        const isUrlValid = isUrl((url || " ").trim());
        const isImageValid = isUrl((image || " ").trim());
        const isImageListValid = !imageList.some(i => !isUrl((i || " ").trim()));

        if (!isUrlValid || !isImageValid || !isImageListValid) {
            if (!isUrlValid) setUrlError("URL is not valid");
            setShake(random());
            return;
        }

        onOk({
            _id: data._id,
            rnd: random(),
            name: (name || " ").trim(),
            url: (url || " ").trim(),
            price: (getType(+price) === "number") && (+price > 0) ? +price : 0,
            status: status,
            image: (image || " ").trim(),
            images: imageList.map(i => (i || " ").trim()).filter(i => !!i)
        });
    };
    
    return (
        <Wrapper>
            <Input 
                label="Product Name" 
                shake={ shake }
                $error={ nameError }
                initialValue={ name }
                onChange={ (value) => setName(value) }
                mini={ true }
                required
            ></Input>
            <Input 
                label="Product URL" 
                shake={ shake }
                $error={ urlError }
                initialValue={ url }
                onChange={ (value) => setUrl(value) }
                onBlur={ () => { if (!isUrl(url)) setUrlError("URL is not valid"); } }
                mini={ true }
                required
            ></Input>
            <PriceContainer>
                <LeftColumn>
                    <Input 
                        label="Price ($)" 
                        initialValue={ price }
                        onChange={ (value) => setPrice(value) }
                        mini={ true }
                        isNumber={ true }
                    ></Input>
                </LeftColumn>
                <div style={{ flex: "1 1 auto" }} />
                <RightColumn>
                    <Switch 
                        label="active" 
                        checked={ status === "active" } 
                        onChange={ (e) => setStatus(e.target.checked ? "active" : "inactive") }
                    />
                    <label style={{ color: "rgb(80, 80, 80)" }}>active</label>
                </RightColumn>
            </PriceContainer>
            <ImageInput 
                label="Image URL" 
                shake={ shake }
                url={ getImageUrl(data) }
                onChange={ (value) => setImage(value) }
                required
            ></ImageInput>
            <ImageList 
                images={ imageList } 
                shake={ shake }
                onChange={ (value) => setImageList(value) }
            />
            <RandomContainer>
                <RandomTitle onClick={ randomDataRequest }>
                    fill with random data
                </RandomTitle>
            </RandomContainer>
            <ButtonsContainer>
                <StyledButton disabled={ okButtonDisabled } onClick={ handleOk } variant="contained">OK</StyledButton>
                <StyledButton onClick={ onCancel } variant="outlined">Cancel</StyledButton>
            </ButtonsContainer>
        </Wrapper>
    );
};

export default NewProduct;