import { Button } from "@mui/material";
import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-flow: column;
`;

export const RandomContainer = styled.div`
    margin: 1rem 0;
`;

export const RandomTitle = styled.div`
    text-align: right;
    font-size: 0.8rem;
    cursor: pointer;
    color: rgb(21, 101, 192);

    :hover {
        color: rgb(21, 101, 255);
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;
`;

export const StyledButton = styled(Button)`
    width: 8rem; 
    padding: 0.5rem 1rem;
    height: 2.5rem;
    margin: 0 1rem;
`;