import styled from 'styled-components';

export const TopBar = styled.div`
    flex: 0 0 auto;
    padding: 2rem 10vw 0 10vw;
`;

export const Content = styled.div`
    flex: 1 1 auto;
    display: flex;
    flex-flow: column;
    padding: 0 10vw;
`;

export const Footer = styled.footer`
    flex: 0 0 auto;
    color: white;
    background-color: black;
    padding: 3rem 10vw 1.5rem 10vw;
    font-size: calc(0.875 * 0.9rem);
    font-weight: 300;
    letter-spacing: 0.1rem;
    white-space: pre-wrap;
    word-wrap: break-word;
    font-style: normal;
    text-transform: none;
    line-height: 1.6;

    display: flex;
    flex-flow: row;
`;

export const FooterSide = styled.div`
    flex: 0 0 auto;
    width: 19rem;

    display: flex;
    flex-flow: column;
`;

export const FooterCenter = styled.div`
    flex: 1 1 auto;
    display: flex;
    flex-flow: column;
    align-items: center;
`;

export const IconWrapper = styled.div`
    margin: 0 0.5rem;
    display: inline-block;
    padding: 0 0.5rem;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.5);

    :hover {
        color: white;
    }
`;