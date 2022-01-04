import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import Input from "../components/Input";
import { MainWrapper, ImageContainer, ContentContainer, InputWrapper, ButtonWrapper } from "../styles/store-pair.styles";
import LoadingIconFlat from "../icons/LoadingIconFlat";
import { random } from "../util/utillities";

const StorePairLayout = ({ codeConfirmed }) => {
    const [code, setCode] = useState(null);
    const [loading, setLoading] = useState(false);
    const [shake, setShake] = useState(0);
    const [error, setError] = useState('');
    const shaking = usePeriod(shake, {}) && !!error;

    const verifyCode = () => {
        if (!code) return;
        
        setLoading(true);

        fetch("../../api/store_pair")
            .then(res => {
                setLoading(false);
                let result = res?.json();
                let apiKey = result?.value?.publicApiKey;
                codeConfirmed(apiKey, !!apiKey);
                if (!apiKey) setShake(random());
            })
            .then(res => console.log(res, "ramin"));
    };
    
    return (
        <MainWrapper>
            <ContentContainer>
                ramin
                <div
                    className={ shaking ? ' shake ' : ' ' } 
                    style={{
                        flex: "0 0 auto",
                        marginBottom: "2rem"
                    }}>
                    <Input 
                        label="Please enter your pairing code" 
                        getValue={ (value) => setCode(value) }
                    ></Input>
                </div>
                <ButtonWrapper>
                    <Button 
                        variant="contained" 
                        style={{ 
                            width: "16rem", 
                            padding: "0.5rem 1rem",
                            height: "2.5rem"
                        }}
                        onClick={ () => !loading && verifyCode() }
                    >
                        { loading ? <LoadingIconFlat /> : "Verify my pairing code!" }
                    </Button>
                </ButtonWrapper>
            </ContentContainer>
            <ImageContainer>
                <div>
                    <img src="../image/top-banner.jpg"
                        style={{ width: "100%" }}
                    ></img>
                </div>
                <div style={{ color: "rgb(100,100,100)", fontFamily: "comic sans ms", fontSize: "0.8rem", paddingTop: "1rem" }}>
                    Fashion is all about the individual characteristics and preferences
                </div>
            </ImageContainer>
        </MainWrapper>
    );
};

export default StorePairLayout;