import { useState, useEffect } from "react";

const Image = ({ url, size = 3 }) => {
    const [imgUrl, setImgUrl] = useState(url);

    useEffect(() => setImgUrl(url), [url]);

    return (
        <img 
            className="border-radius-quarter" 
            src={ imgUrl }
            style={{ width: size + "rem", height: size + "rem" }} 
            onError={ () => setImgUrl("https://s3.ir-thr-at1.arvanstorage.com/rvbox/shopify/image/oops.jpg") }
        />
    );
};

export default Image;