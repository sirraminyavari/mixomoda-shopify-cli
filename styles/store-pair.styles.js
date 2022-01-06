import styled from 'styled-components';

export const MainWrapper = styled.div`
    flex: 1 1 auto;
    display: flex;
    flex-flow: row;
`;

export const ImageContainer = styled.div`
    flex: 0 0 auto;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 30vw;
    padding-inline-start: calc(6vw);
`;

export const ContentContainer = styled.div`
    flex: 1 1 auto;
    display: flex;
    flex-flow: column;
    justify-content: center;
    text-align: center;
    padding-inline-end: ${ props => props.contentOnly ? "0" : "2rem" };
`;

export const ButtonWrapper = styled.div`
    flex: 0 0 auto;
    text-align: center;
    margin-top: 1rem;
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