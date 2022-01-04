import { TextField } from "@mui/material";
import styled from 'styled-components';

const Input = ({ label, animated, getValue, $error }) => {
    return (
        <TextField 
            variant="outlined" 
            error
            label={ "ramin" }
            style={{ width: "100%" }}
            onKeyUp={ (e) => getValue(e.target.value) }
            helperText="Incorrect entry."
        />
    );
};

export default Input;