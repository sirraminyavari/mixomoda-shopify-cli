import { Button } from "@mui/material";
import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-flow: column;
`;

export const RandomContainer = styled.div`
    margin: 1rem 0;
    text-align: right;
`;

export const RandomTitle = styled.div`
    display: inline-block;
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

export const PriceContainer = styled.div`
    display: flex;
    flex-flow: row;
`;

export const LeftColumn = styled.div`
    flex: 0 0 auto;
    width: calc(50% - 1rem);
    padding-inline-end: 1rem;
`;

export const RightColumn = styled.div`
    flex: 0 0 auto;
`;