const Price = ({ price }) => {
    return (
        <>
            <span style={{ fontSize: "0.8rem", marginTop: "0.3rem" }}>$</span>
            <span 
                style={{ 
                    fontSize: "1.5rem",
                     fontWeight: 500, 
                     textShadow: "1px 1px rgb(150, 150, 150)" 
                }}>
                { price }
            </span>
        </>
    );
};

export default Price;