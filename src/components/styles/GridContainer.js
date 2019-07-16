import styled from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  margin-top: 20px;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: 180px;
  justify-items: center;
  grid-gap: 10px;
  transition: 0.5s;
  width: 100%;
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

export default GridContainer;
