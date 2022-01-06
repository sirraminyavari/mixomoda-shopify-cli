import { useState } from "react";
import { TextField } from "@mui/material";
import styled from 'styled-components';
import usePeriod from "../hooks/usePeriod";

const Input = ({ label, onChange, shake, $error, onBlur }) => {
    const [value, setValue] = useState('');
    const shaking = usePeriod(shake, {}) && !!$error;
    
    const handleChange = (e) => {
        setValue(e.target.value);
        onChange(e.target.value);
    };

    return (
        <InputWrapper className={ shaking ? ' shake ' : '' }>
            <TextField 
                variant="outlined" 
                error={ !!$error }
                value={ value }
                label={ label }
                style={{ width: "100%" }}
                onChange={ handleChange  }
                onBlur={ onBlur }
                helperText={ $error }
                size="small"
            />
        </InputWrapper>
    );
};

export default Input;

export const InputWrapper = styled.div.attrs(props => ({ className: props.className }))`
    flex: 0 0 auto;
    height: 5rem;
`;