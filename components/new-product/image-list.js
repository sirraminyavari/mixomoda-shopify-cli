import { useState } from "react";
import styled from 'styled-components';
import Input from "../Input";

const ImageList = ({ images }) => {
    const [imageUrls, setImageUrls] = useState(images || []);

    if (!imageUrls.some(u => !(u || " ").trim()))
        setImageUrls(imageUrls.concat(['']));

    const handleChange = (value, index) => setImageUrls(imageUrls.map((i, ind) => ind === index ? value : i));
    
    return (
        <Wrapper>
            {
                imageUrls.map((url, index) => (
                    <Input 
                        key={ index }
                        onChange={ (value) => handleChange(value, index) }
                        initialValue={ url }
                        mini={ true }
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
    margin-bottom: 3rem;
    background-color: rgb(246,246,247);
`;