import styled from 'styled-components';

const SearchBar = styled.input`
  width: 100%;
  font-size: calc(0.8em + 1vw);
  padding: 10px;
  border: 0;
  outline: 0;
  background-color: #0d0c1d;
  border-bottom: 1px solid white;
  margin-bottom: 20px;
  color: white;

  ::placeholder {
    font-size: calc(0.8em + 1vw);
    color: white;
  }
`;

export default SearchBar;
