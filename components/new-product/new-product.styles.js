import { Button } from "@mui/material";
import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-flow: column;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
`;

export const StyledButton = styled(Button)`
    width: 8rem; 
    padding: 0.5rem 1rem;
    height: 2.5rem;
    margin: 0 1rem;
`;