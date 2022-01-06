import { useState, useEffect } from "react";
import {
    Wrapper,
    ButtonsContainer,
    StyledButton
} from "./new-product.styles";
import Input from "../Input";
import ImageList from "./image-list";
import { random, isUrl } from "../../util/utillities";

const NewProduct = ({ onOk, onCancel, ...props }) => {
    const [name, setName] = useState(props.name);
    const [nameError, setNameError] = useState('');
    useEffect(() => setNameError(''), [name]);

    const [url, setUrl] = useState(props.url);
    const [urlError, setUrlError] = useState('');
    useEffect(() => setUrlError(''), [url]);

    const initialImageUrl = (props.image || {}).inStoreUrl || props.image;

    const [image, setImage] = useState(initialImageUrl);
    const [imageError, setImageError] = useState('');
    useEffect(() => setImageError(''), [image]);

    const [shake, setShake] = useState(false);

    const okButtonDisabled = !name || !url || !image;

    const handleOk = () => {
        const isUrlValid = isUrl(url);
        const isImageValid = isUrl(image);

        if (!isUrlValid || !isImageValid) {
            if (!isUrlValid) setUrlError("URL is not valid");
            if (!isImageValid) setImageError("Image URL is not valid");
            setShake(random());
            return;
        }

        onOk({
            rnd: random(),
            name: name,
            url: url,
            prile: "",
            status: "",
            image: "",
            images: ""
        });
    };

    return (
        <Wrapper>
            <Input 
                label="Product Name" 
                shake={ shake }
                $error={ nameError }
                initialValue={ props.name }
                onChange={ (value) => setName((value || " ").trim()) }
            ></Input>
            <Input 
                label="Product URL" 
                shake={ shake }
                $error={ urlError }
                initialValue={ props.url }
                onChange={ (value) => setUrl((value || " ").trim()) }
                onBlur={ () => { if (!isUrl(url)) setUrlError("URL is not valid"); } }
            ></Input>
            <Input 
                label="Image URL" 
                shake={ shake }
                $error={ imageError }
                initialValue={ initialImageUrl }
                onChange={ (value) => setImage((value || " ").trim()) }
                onBlur={ () => { if (!isUrl(image)) setImageError("Image URL is not valid"); } }
            ></Input>
            <ImageList />
            <ButtonsContainer>
                <StyledButton disabled={ okButtonDisabled } onClick={ handleOk } variant="contained">OK</StyledButton>
                <StyledButton onClick={ onCancel } variant="outlined">Cancel</StyledButton>
            </ButtonsContainer>
        </Wrapper>
    );
};

export default NewProduct;