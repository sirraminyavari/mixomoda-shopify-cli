import styled from 'styled-components';

export const ProductContainer = styled.div.attrs({ className: "border-radius-1 shadow" })`
    background-color: white;
    outline: 0.1rem solid transparent;
    padding: 1rem;
    padding-bottom: calc(1rem - 4px);
    color: rgb(32, 34, 35);
`;

export const TitleArea = styled.div`
    display: flex;
    flex-flow: row;
`;

export const Title = styled.div`
    padding: 0.5rem 0.5rem 0.5rem 1rem; 
    font-size: 1.2rem;
    font-weight: bold;
`;

export const StyledA = styled.a.attrs(({ url }) => ({ href: url, target: "_blank" }))`
    text-decoration: none;
    color: rgb(60, 60, 60);

    :hover {
        color: blue;
    }
`;

export const SubmittedStatus = styled.div`
    flex: 0 0 auto; 
    font-style: italic; 
    font-size: 0.7rem; 
    color: ${ ({ submitted }) => submitted ? "green" : "rgb(100, 100, 100)" };

    display: flex;
    align-items: top;
`;