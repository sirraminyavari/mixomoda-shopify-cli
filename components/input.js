import { useState } from "react";
import { TextField } from "@mui/material";
import { InputUnstyled } from "@mui/material";
import styled from 'styled-components';
import usePeriod from "../hooks/usePeriod";

const Input = ({ label, onChange, shake, $error, onBlur, mini, unstyled }) => {
    const [value, setValue] = useState('');
    const shaking = usePeriod(shake, {}) && !!$error;
    
    const handleChange = (e) => {
        setValue(e.target.value);
        onChange(e.target.value);
    };
    
    const SelectedInput = unstyled ? InputUnstyled : TextField;

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