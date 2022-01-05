import { useState, useEffect } from "react";
import {
    Wrapper,
    ButtonsContainer,
    StyledButton
} from "./new-product.styles";
import Input from "../Input";
import { random, isUrl } from "../../util/utillities";

const NewProduct = ({ onOk, onCancel }) => {
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');
    useEffect(() => setNameError(''), [name]);

    const [url, setUrl] = useState('');
    const [urlError, setUrlError] = useState('');
    useEffect(() => setUrlError(''), [url]);

    const [image, setImage] = useState('');
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
                getValue={ (value) => setName(value) }
            ></Input>
            <Input 
                label="Product URL" 
                shake={ shake }
                $error={ urlError }
                getValue={ (value) => setUrl(value) }
            ></Input>
            <Input 
                label="Image URL" 
                shake={ shake }
                $error={ imageError }
                getValue={ (value) => setImage(value) }
            ></Input>
            <ButtonsContainer>
                <StyledButton isMain disabled={ okButtonDisabled } onClick={ handleOk }>OK</StyledButton>
                <StyledButton onClick={ onCancel }>Cancel</StyledButton>
            </ButtonsContainer>
        </Wrapper>
    );
};

export default NewProduct;