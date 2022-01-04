import { TextField } from "@mui/material";
import styled from 'styled-components';
import usePeriod from "../hooks/usePeriod";

const Input = ({ label, animated, getValue, shake, $error }) => {
    const shaking = usePeriod(shake, {}) && !!$error;

    return (
        <InputWrapper className={ shaking ? ' shake ' : '' }>
            <TextField 
                variant="outlined" 
                error={ !!$error }
                label={ label }
                style={{ width: "100%" }}
                onKeyUp={ (e) => getValue(e.target.value) }
                helperText={ $error }
            />
        </InputWrapper>
    );
};

export default Input;

export const InputWrapper = styled.div.attrs(props => ({ className: props.className }))`
    flex: 0 0 auto;
    height: 5rem;
`;