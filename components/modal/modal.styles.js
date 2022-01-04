import styled from 'styled-components';

export const ContentContainer = styled.div`
  flex: 0 0 auto;
  width: 100%;
`;

export const ContentSection = styled.div.attrs({ className: "border-radius-half" })`
  margin: 5vw auto;
  cursor: default;
  background-color: white;
  width: 70vw;
`;

export const MainContent = styled.div`
  padding: 1rem;
`;

export const TitleContainer = styled.div.attrs({ className: "border-radius-half ignore-bottom-radius" })`
  display: flex;
  flex-flow: row;
  align-items: center;
  padding: 0.5rem 0.3rem;
  background-color: rgb(245, 245, 245);
`;

export const TitleArea = styled.div`
  flex: 1 1 auto;
  padding: 0 0.5rem;
  font-weight: 600;
  font-size: 0.9rem;
  text-align: center;
  padding-inline-end: 1.5rem;
`;

export const ExitButton = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: bolder;
  color: red;
  width: 1.5rem;
  height: 1.5rem;
  font-size: 0.8rem;
  border-radius: 10rem;

  &:hover {
    color: white;
    background-color: red;
  }
`;
