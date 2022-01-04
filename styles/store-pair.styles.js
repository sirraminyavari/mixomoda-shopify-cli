import styled from 'styled-components';

export const MainWrapper = styled.div`
    flex: 1 1 auto;
    display: flex;
    flex-flow: row;
    padding: 2rem 0;
`;

export const ImageContainer = styled.div`
    flex: 0 0 auto;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 35vw;
    padding-inline-start: calc(10vw + 2rem);
`;

export const ContentContainer = styled.div`
    flex: 1 1 auto;
    display: flex;
    flex-flow: column;
    justify-content: center;
    text-align: center;
    padding-inline-end: 2rem;
`;

export const InputWrapper = styled.div.attrs(props => ({ className: props.className }))`
    flex: 0 0 auto;
    margin-bottom: 2rem;
`;

export const ButtonWrapper = styled.div`
    flex: 0 0 auto;
    text-align: center;
`;