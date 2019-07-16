import styled from 'styled-components';

const Loader = styled.p`
  font-size: 5vw;
  color: white;
  margin-top: 300px;

  animation: spin 2s infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(90deg);
    }
    50% {
      transform: rotate(180deg);
    }
    75% {
      transform: rotate(270deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loader;
