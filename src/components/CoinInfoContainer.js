import React from 'react';
import axios from 'axios';
import CoinInfoComponent from './CoinInfoComponent';
import GridContainer from './styles/GridContainer';
import SearchBar from './styles/SearchBar';
import Loader from './styles/Loader';
import { ButtonContainer, Button } from './styles/Button';

function CoinInfoContainer(props) {
  const [data, setData] = React.useState([]);
  const [term, setTerm] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    document.title = 'Coininfo';
    const fetchCoins = () => {
      setLoading(true);
      axios
        .get(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1'
        )
        .then(coin => setData(coin.data))
        .then(() => setLoading(false));
    };
    fetchCoins();
  }, []);
  const handleChange = e => {
    setTerm(e.target.value);
  };
  let filtered = data.filter(
    c => c.name.toLowerCase().indexOf(term.toLowerCase()) !== -1
  );
  const sortAsc = () => {
    setData(filtered.sort((a, b) => a.current_price - b.current_price));
  };
  const sortDesc = () => {
    setData(filtered.sort((a, b) => b.current_price - a.current_price));
  };
  return (
    <React.Fragment>
      <SearchBar
        type='text'
        onChange={handleChange}
        placeholder='Search for coin'
      />
      <ButtonContainer>
        <Button onClick={sortAsc}>
          <i className='fas fa-angle-double-up' /> Sort Ascending
        </Button>
        <Button onClick={sortDesc}>
          <i className='fas fa-angle-double-down' /> Sort Descending
        </Button>
      </ButtonContainer>
      {loading ? (
        <Loader>
          <i className='fas fa-spinner' />
        </Loader>
      ) : (
        <GridContainer>
          <CoinInfoComponent coins={filtered} {...props} />
        </GridContainer>
      )}
    </React.Fragment>
  );
}

export default CoinInfoContainer;
