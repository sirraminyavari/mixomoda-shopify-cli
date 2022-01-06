import { useState } from "react";
import styled from 'styled-components';
import ImageInput from "../ImageInput";

const ImageList = ({ images, onChange, shake }) => {
    const [imageUrls, setImageUrls] = useState(images || []);

    if (!imageUrls.some(u => !(u || " ").trim()))
        setImageUrls(imageUrls.concat(['']));

    const handleChange = (value, index) => { 
        const newUrls = imageUrls.map((i, ind) => ind === index ? value : i);
        setImageUrls(newUrls);
        onChange(newUrls.filter(u => !!u));
    };
    
    return (
        <Wrapper>
            <WrapperTitle>{ "Other images" }</WrapperTitle>
            {
                imageUrls.map((url, index) => (
                    <ImageInput 
                        key={ index }
                        label={ `Image URL ${ index + 1 }`  }
                        shake={ shake }
                        initialValue={ url }
                        onChange={ (value) => handleChange(value, index) }
                        unstyled={ true }
                    />
                ))
            }
        </Wrapper>
    );
};

export default ImageList;


const Wrapper = styled.div.attrs({ className: "border-radius-quarter" })`
    position: relative;
    padding: 1rem;
    padding-bottom: 0;
    margin-top: 0.5rem;
    background-color: rgb(246,246,247);
    position: relative;
`;

const WrapperTitle = styled.div.attrs({ className: "border-radius-quarter" })`
    position: absolute;
    left: 0.5rem;
    top: -0.7rem;
    font-size: 0.7rem;
    color: rgb(80, 80, 80);
    background-color: white;
    padding: 0.2rem 0.4rem;
`;