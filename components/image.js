const Image = ({ url, size = 3 }) => {
    return (
        <img 
            className="border-radius-quarter" 
            src={ url }
            style={{ cursor: "pointer", width: size + "rem", height: size + "rem" }} 
        />
    );
};

export default Image;