import { useState } from "react";
import Input from "../Input";

const ImageList = ({ images }) => {
    const [imageUrls, setImageUrls] = useState(images || []);

    if (!imageUrls.some(u => !(u || " ").trim()))
        setImageUrls(imageUrls.concat(['']));

    const handleChange = (value, index) => setImageUrls(imageUrls.map((i, ind) => ind === index ? value : i));
    
    return (
        <div>
            {
                imageUrls.map((url, index) => (
                    <Input 
                        key={ index }
                        onChange={ (value) => handleChange(value, index) }
                        initialValue={ url }
                    />
                ))
            }
        </div>
    );
};

export default ImageList;