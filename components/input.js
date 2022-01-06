import React from "react";
import { useState } from "react";
import { TextField } from "@mui/material";
import { InputUnstyled } from "@mui/base";
import { styled as muiStyled } from "@mui/system";
import styled from 'styled-components';
import usePeriod from "../hooks/usePeriod";

const blue = {
    200: '#80BFFF',
    400: '#3399FF',
};
  
const grey = {
    50: '#F3F6F9',
    100: '#E7EBF0',
    200: '#E0E3E7',
    300: '#CDD2D7',
    400: '#B2BAC2',
    500: '#A0AAB4',
    600: '#6F7E8C',
    700: '#3E5060',
    800: '#2D3843',
    900: '#1A2027',
};

const StyledInputElement = muiStyled('input')(({ theme }) => `
    width: 320px;
    font-size: 0.875rem;
    font-family: IBM Plex Sans, sans-serif;
    font-weight: 400;
    line-height: 1.5;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
    border-radius: 8px;
    padding: 12px 12px;
    transition: all 150ms ease;
  
    &:hover {
      background: ${theme.palette.mode === 'dark' ? null : grey[100]};
      border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[400]};
    }
  
    &:focus {
      outline: 2px solid ${theme.palette.mode === 'dark' ? blue[400] : blue[200]};
    }
`);
  
const CustomInput = React.forwardRef(function CustomInput(props, ref) {
    return (
      <InputUnstyled components={{ Input: StyledInputElement }} {...props} ref={ref} />
    );
});

const Input = ({ label, onChange, shake, $error, onBlur, mini, unstyled }) => {
    const [value, setValue] = useState('');
    const shaking = usePeriod(shake, {}) && !!$error;
    
    const handleChange = (e) => {
        setValue(e.target.value);
        onChange(e.target.value);
    };
    
    const SelectedInput = unstyled ? CustomInput : TextField;
console.log("ra", "ramin");
    return (
        <InputWrapper className={ shaking ? ' shake ' : '' } mini={ mini }>
            <SelectedInput 
                variant="outlined" 
                error={ !!$error }
                value={ value }
                label={ label }
                style={{ width: "100%" }}
                onChange={ handleChange  }
                onBlur={ onBlur }
                helperText={ mini ? "" : $error }
                size={ mini ? "small" : "normal" }
            />
        </InputWrapper>
    );
};

export default Input;

export const InputWrapper = styled.div.attrs(props => ({ className: props.className }))`
    flex: 0 0 auto;
    height: ${ ({ mini }) => mini ? 3.5 : 5 }rem;
`;