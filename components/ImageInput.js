import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Input from "./Input";
import { getType, isUrl } from '../util/utillities';
import Image from './image';

const trimmedUrl = (url) => (url || " ").trim();
const isValidUrl = (url) => !!(trimmedUrl(url)) && isUrl(trimmedUrl(url));
const getFinalUrl = (url) => isValidUrl(url) ? trimmedUrl(url) : '';

const ImageInput = ({ url, onChange, onBlur, label, shake, unstyled }) => {
    const [imageUrl, setImageUrl] = useState(url);
    const [finalUrl, setFinalUrl] = useState(getFinalUrl(url));
    const [imageError, setImageError] = useState('');

    useEffect(() => setImageError(''), [imageUrl]);

    const handleOnchange = (value) => {
        setImageUrl(value);
        if (getType(onChange) === "function") onChange(trimmedUrl(value));
    };

    const handleBlur = () => {
        setFinalUrl(getFinalUrl(imageUrl));
        if (!isUrl(trimmedUrl(imageUrl))) setImageError("Image URL is not valid");
        if (getType(onBlur) === "function") onBlur();
    };
    
    return (
        <Wrapper>
            <InputContainer>
                <Input 
                    label={ label }
                    shake={ shake }
                    $error={ imageError }
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