import { useState } from "react";

const Image = ({ url, size = 3 }) => {
    const [imgUrl, setImgUrl] = useState(url);

    return (
        <img 
            className="border-radius-quarter" 
            src={ imgUrl }
            style={{ width: size + "rem", height: size + "rem" }} 
            onError={ () => setImgUrl("../../image/oops.jpg") }
        />
    );
};

export default Image;