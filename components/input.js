import { TextField } from "@mui/material";
import usePeriod from "../hooks/usePeriod";

const Input = ({ label, animated, getValue, error }) => {
    return (
        <TextField 
            variant="outlined" 
            label={ label }
            style={{ width: "100%" }}
            onKeyUp={ (e) => getValue(e.target.value) }
        ></TextField>
    );
};

export default Input;