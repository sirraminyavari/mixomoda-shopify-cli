import { useState, useEffect } from "react";
import {
    Wrapper,
    RandomContainer,
    RandomTitle,
    ButtonsContainer,
    StyledButton
} from "./new-product.styles";
import Input from "../Input";
import ImageInput from "../ImageInput";
import ImageList from "./image-list";
import { random, isUrl, randomImageUrl } from "../../util/utillities";

const getImageUrl = data => (data.image || {}).inStoreUrl || data.image;
const getImageList = data => (data.images || []).map(i => i.inStoreUrl || i);

const NewProduct = ({ data, onOk, onCancel, randomDataRequest, ...props }) => {
    const [name, setName] = useState(data.name);
    const [nameError, setNameError] = useState('');
    useEffect(() => setNameError(''), [name]);

    const [url, setUrl] = useState(data.url);
    const [urlError, setUrlError] = useState('');
    useEffect(() => setUrlError(''), [url]);

    const [image, setImage] = useState(getImageUrl(data));
    const [imageList, setImageList] = useState(getImageList(data));

    useEffect(() => {
        setName(data.name);
        setUrl(data.url);
        setImage(getImageUrl(data));
        setImageList(getImageList(data));
    }, [data]);
    console.log({dt: data, i: image, lst: imageList}, "ramin");
    const [shake, setShake] = useState(false);

    const okButtonDisabled = !name || !url || !image;

    const handleOk = () => {
        const isUrlValid = isUrl(url);
        const isImageValid = isUrl(image);
        const isImageListValid = !imageList.some(i => !isUrl(i));

        if (!isUrlValid || !isImageValid || !isImageListValid) {
            if (!isUrlValid) setUrlError("URL is not valid");
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
                mini={ true }
            ></Input>
            <Input 
                label="Product URL" 
                shake={ shake }
                $error={ urlError }
                initialValue={ props.url }
                onChange={ (value) => setUrl((value || " ").trim()) }
                onBlur={ () => { if (!isUrl(url)) setUrlError("URL is not valid"); } }
                mini={ true }
            ></Input>
            <ImageInput 
                label="Image URL" 
                shake={ shake }
                initialValue={ getImageUrl(data) }
                onChange={ (value) => setImage(value) }
            ></ImageInput>
            <ImageList 
                images={ getImageList(data) } 
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