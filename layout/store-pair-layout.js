import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import Input from "../components/Input";
import { MainWrapper, ImageContainer, ContentContainer, InputWrapper, ButtonWrapper } from "../styles/store-pair.styles";
import LoadingIconFlat from "../icons/LoadingIconFlat";
import { random } from "../util/utillities";
import DimensionHelper from "../util/dimensionHelper";

const StorePairLayout = ({ codeConfirmed }) => {
    const [code, setCode] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [shake, setShake] = useState(0);

    useEffect(() => setError(''), [code]);

    const errorOccurred = (err) => {
        setError(err);
        setShake(random());
    };

    const verifyCode = () => {
        if (!code) return;
        
        const hasValidPattern = /^[0-9A-Z]{8}[-](?:[0-9A-Z]{4}[-]){3}[0-9A-Z]{12}$/ig.test(code);
        const isGuid = /^[0-9A-F]{8}[-](?:[0-9A-F]{4}[-]){3}[0-9A-F]{12}$/ig.test(code);

        if (!hasValidPattern)
            return errorOccurred("Pairing code must match 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'");
        else if (!isGuid)
            return errorOccurred("Invalid pairing code");

        setLoading(true);
        
        fetch("../../api/store_pair", {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({ key: code })
        })
        .then((res) => {
            res.json().then(result => {
                let apiKey = result?.publicApiKey;
                
                setLoading(false);
                codeConfirmed(apiKey, !!apiKey);
                
                if (!apiKey) { 
                    console.log(result, "store pair error");
                    errorOccurred("Invalid pairing code");
                }
            });
        })
        .catch(error => {
            console.log('error:', error); 
            errorOccurred("Something went wrong. Please try again later!");
        });
    };

    const { isMobile, isTablet } = DimensionHelper() || {};
    const contentOnly = isTablet;
    
    return (
        <MainWrapper>
            <ContentContainer contentOnly={ contentOnly }>
                <Input 
                    label="Please enter your pairing code" 
                    shake={ shake }
                    $error={ error }
                    getValue={ (value) => setCode(value) }
                ></Input>
                <ButtonWrapper>
                    <Button 
                        variant="contained" 
                        style={{ 
                            width: "16rem", 
                            padding: "0.5rem 1rem",
                            height: "2.5rem"
                        }}
                        disabled={ !code }
                        onClick={ () => !loading && verifyCode() }
                    >
                        { loading ? <LoadingIconFlat /> : "Verify my pairing code!" }
                    </Button>
                </ButtonWrapper>
            </ContentContainer>
            {!contentOnly &&
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
            }
        </MainWrapper>
    );
};

export default StorePairLayout;