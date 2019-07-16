import styled from 'styled-components';

export const Coin = styled.div`
  :hover {
    transform: translateY(-5px);
    box-shadow: 5px 5px 50px 5px lightblue;
  }

  width: 100%;
  height: 100%;
  transition: all 0.5s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #161b33;
  opacity: 0.8;
  border-radius: 15px;
`;

export const CoinImage = styled.img`
  height: 100px;
  width: 100px;
  margin-bottom: 10px;
`;
