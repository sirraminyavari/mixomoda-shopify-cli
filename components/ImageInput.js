import { useState } from 'react';
import styled from 'styled-components';
import Input from "./Input";
import { getType, isUrl } from '../util/utillities';
import Image from './image';

const ImageInput = ({ url, onChange, onBlur, label, shake, error, unstyled }) => {
    url = (url || " ").trim();

    const [imageUrl, setImageUrl] = useState(!!url && isUrl(url) ? url : "");
    const [finalUrl, setFinalUrl] = useState(!!url && isUrl(url) ? url : "");

    const handleOnchange = (value) => {
        setImageUrl((value || " ").trim());
        if (getType(onChange) === "function") onChange(value);
    };

    const handleBlur = () => {
        setFinalUrl(!!imageUrl && isUrl(imageUrl) ? imageUrl : "");
        if (getType(onBlur) === "function") onBlur();
    };
    
    return (
        <Wrapper>
            <InputContainer>
                <Input 
                    label={ label }
                    shake={ shake }
                    $error={ error }
                    initialValue={ url }
                    onChange={ handleOnchange }
                    onBlur={ handleBlur }
                    mini={ true }
                    unstyled={ unstyled }
                />
            </InputContainer>
            { finalUrl &&
                <IconContainer>
                    <Image url={ finalUrl } size={ 2.5 } />
                </IconContainer>
            }
        </Wrapper>
    );
};

export default ImageInput;

const Wrapper = styled.div`
    display: flex;
    flex-flow: row;
`;

const InputContainer = styled.div`
    flex: 1 1 auto;
`;

const IconContainer = styled.div`
    flex: 0 0 auto;
    width: 2.5rem;
    padding-inline-start: 1rem;
    text-align: right;
`;