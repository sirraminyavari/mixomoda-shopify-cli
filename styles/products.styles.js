import { Button } from "@mui/material";
import styled from 'styled-components';

export const MainWrapper = styled.div`
    flex: 1 1 auto;
    display: flex;
    flex-flow: column;
    height: 100%;
`;

export const ProductsContainer = styled.div.attrs({ className: "border-radius-quarter" })`
    position: relative;
    padding: 1rem;
    margin-bottom: 3rem;
    background-color: rgb(246,246,247);
`;

export const NoProduct = styled.div`
    text-align: center;
    color: rgb(100, 100, 100);
`;

export const AddButton = styled(Button).attrs({ variant: "contained" })`
    position: absolute;
    bottom: -2.3rem;
    right: 0.3rem;
    min-width: 2rem !important;
    width: 2rem;
    height: 2rem;
    padding: 0.1rem;
    border-radius: 10rem;
`;