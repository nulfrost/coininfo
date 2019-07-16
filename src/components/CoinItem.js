import React from 'react';
import { Coin, CoinImage } from './styles/Coin';

function CoinItem({ coin, history }) {
  return (
    <Coin onClick={() => history.push(`/coin/${coin.id}`)}>
      <CoinImage src={coin.image} alt='coin' />
      <p style={{ marginBottom: '5px' }}>{coin.name}</p>
      <p>${coin.current_price}</p>
    </Coin>
  );
}

export default CoinItem;
