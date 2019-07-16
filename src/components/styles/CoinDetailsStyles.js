import styled from 'styled-components';

export const CoinDetailsGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: 100px 100px 100px;
  grid-auto-rows: 100px;
  margin-top: 20px;
  grid-gap: 10px;
  transition: 0.5s;
  margin-bottom: 20px;

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (min-width: 1800px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const CoinDetailsDiv = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #161b33;
  a {
    color: white;
  }
`;

export const GraphContainer = styled.div`
  height: 400px;
  width: 300px;
  @media only screen and (min-width: 768px) {
    width: 700px;
  }
  @media only screen and (min-width: 1200px) {
    width: 1000px;
  }
`;
