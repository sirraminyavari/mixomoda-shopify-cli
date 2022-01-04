import styled from 'styled-components';

export const MainWrapper = styled.div`
    flex: 1 1 auto;
    display: flex;
    flex-flow: column;
    height: 100%;
`;

export const ProductsContainer = styled.div.attrs({ className: "border-radius-half" })`
    padding: 1rem;
    margin-bottom:1rem;
    border: 1px rgb(150,150,150) solid;
    background-color: rgb(240,240,240);
`;

export const Product = styled.div.attrs({ className: "border-radius-quarter shadow" })`
    background-color: white;
    padding: 0.5rem;

    :hover {
        background-color: rgb(250, 250, 250);
    }
`;

export const NoProduct = styled.div`
    text-align: center;
    color: rgb(100, 100, 100);
`;