import React from "react";
import { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { InputUnstyled } from "@mui/base";
import { styled as muiStyled } from "@mui/system";
import styled from 'styled-components';
import usePeriod from "../hooks/usePeriod";

const grey = { 300: '#CDD2D7', 900: '#1A2027' };

const StyledInputElement = muiStyled('input')(() => `
    width: calc(100% - 1rem);
    height: 1.9rem;
    padding: 0.3rem 0.5rem;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    color: ${grey[900]};
    border: 1px solid ${grey[300]};
    border-radius: 0.22rem;
    transition: all 150ms ease;
  
    &:focus {
      outline: 1px solid #3399FF;
    }
`);
  
const CustomInput = React.forwardRef(function CustomInput({ label, ...props }, ref) {
    return (
      <InputUnstyled components={{ Input: StyledInputElement }} placeholder={ label } { ...props } ref={ref} />
    );
});

const Input = ({ label, initialValue, onChange, shake, $error, onBlur, mini, unstyled }) => {
    const [value, setValue] = useState(initialValue);
    const shaking = usePeriod(shake, {}) && !!$error;

    useEffect(() => setValue(initialValue), [initialValue]);
    
    const handleChange = (e) => {
        setValue(e.target.value);
        onChange(e.target.value);
    };
    
    const SelectedInput = unstyled ? CustomInput : TextField;
    console.log(initialValue, "ramin 22");
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