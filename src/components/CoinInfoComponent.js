import React from 'react';
import CoinItem from './CoinItem';

function CoinInfoComponent({ coins, ...props }) {
  return (
    <React.Fragment>
      {coins &&
        coins.map(coin => <CoinItem key={coin.id} coin={coin} {...props} />)}
    </React.Fragment>
  );
}

export default CoinInfoComponent;
