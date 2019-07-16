import React from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import moment from 'moment';
import {
  CoinDetailsGrid,
  CoinDetailsDiv,
  GraphContainer
} from './styles/CoinDetailsStyles';
import { Button } from './styles/Button';
import Loader from './styles/Loader';

function CoinDetails(props) {
  const [data, setData] = React.useState({ data: [] });
  const [loading, setLoading] = React.useState(false);
  const numberWithCommas = x =>
    x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  React.useEffect(() => {
    document.title = `Coininfo - ${props.match.params.id} data`;
    setLoading(true);
    const fetchCoinInfo = () => {
      axios
        .get(
          `https://api.coingecko.com/api/v3/coins/${
            props.match.params.id
          }?tickers=false&community_data=false&developer_data=false&sparkline=true`
        )
        .then(coin => {
          setData(coin.data);
        })
        .then(() => {
          setLoading(false);
        })
        .catch(e => console.log(e));
    };
    fetchCoinInfo();
  }, [props.match.params.id]);
  const chartData = {
    labels:
      data.market_data && data.market_data.sparkline_7d.price.map((_, i) => i),
    datasets: [
      {
        label: `${props.match.params.id} price over 7 days (USD)`,
        data:
          data.market_data &&
          data.market_data.sparkline_7d.price.map(p => p.toFixed(2)),
        fill: false,
        pointBackgroundColor: 'gold',
        borderColor: 'gold',
        borderJoinStyle: 'miter',
        borderWidth: 4
      }
    ]
  };
  return (
    <React.Fragment>
      <h1 style={{ color: 'white', textAlign: 'center', fontSize: '6vw' }}>
        {props.match.params.id}
      </h1>
      {loading ? (
        <Loader>
          <i className='fas fa-spinner' />
        </Loader>
      ) : (
        <React.Fragment>
          <img
            style={{ objectFit: 'scale-down' }}
            src={data.image && data.image.large}
            alt='coin'
          />
          <Button
            style={{ alignSelf: 'start' }}
            onClick={() => props.history.push('/')}
          >
            <i style={{ marginRight: '5px' }} className='fas fa-arrow-left' />
            Back
          </Button>
          {data.market_data && (
            <CoinDetailsGrid>
              <p
                style={{
                  color: 'white',
                  height: '100%',
                  padding: '1em',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2em',
                  backgroundColor: '#161b33',
                  width: '100%'
                }}
              >
                Rank<span>{data.market_cap_rank}</span>
              </p>
              <CoinDetailsDiv>
                <p style={{ fontSize: '1.2em' }}>Change 24h (%)</p>
                <span
                  style={
                    data.market_data.price_change_percentage_24h < 0
                      ? { color: 'red', fontSize: '1.5em' }
                      : { color: 'green', fontSize: '1.5em' }
                  }
                >
                  {data.market_data.price_change_percentage_24h}
                </span>
              </CoinDetailsDiv>
              <CoinDetailsDiv>
                <p style={{ fontSize: '1.2em' }}>Change 7d (%)</p>
                <span
                  style={
                    data.market_data.price_change_percentage_7d < 0
                      ? { color: 'red', fontSize: '1.5em' }
                      : { color: 'green', fontSize: '1.5em' }
                  }
                >
                  {data.market_data.price_change_percentage_7d}
                </span>
              </CoinDetailsDiv>
              <CoinDetailsDiv>
                <p style={{ fontSize: '1.2em' }}>Change 30d (%)</p>
                <span
                  style={
                    data.market_data.price_change_percentage_30d < 0
                      ? { color: 'red', fontSize: '1.5em' }
                      : { color: 'green', fontSize: '1.5em' }
                  }
                >
                  {data.market_data.price_change_percentage_30d}
                </span>
              </CoinDetailsDiv>
              <CoinDetailsDiv>
                <p style={{ fontSize: '1.2em' }}>Current Price</p>
                <span style={{ fontSize: '1.2em' }}>
                  $ {data.market_data.current_price.usd} (USD)
                </span>
              </CoinDetailsDiv>
              <CoinDetailsDiv>
                <p style={{ fontSize: '1.2em' }}>Short Name</p>
                <span style={{ fontSize: '1.2em' }}>{data.symbol}</span>
              </CoinDetailsDiv>
              <CoinDetailsDiv>
                <p style={{ fontSize: '1.2em' }}>Market Cap</p>
                <span style={{ fontSize: '1.2em' }}>
                  $ {numberWithCommas(data.market_data.market_cap.usd)}
                </span>
              </CoinDetailsDiv>
              <CoinDetailsDiv>
                <p style={{ fontSize: '1.2em' }}>Total Supply</p>
                <span style={{ fontSize: '1.2em' }}>
                  {data.market_data.total_supply === null
                    ? 'Unknown'
                    : numberWithCommas(data.market_data.total_supply)}
                </span>
              </CoinDetailsDiv>
              <CoinDetailsDiv>
                <p style={{ fontSize: '1.2em' }}>Github</p>
                <span style={{ fontSize: '1.2em' }}>
                  <a
                    href={data.links.repos_url.github[0]}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i className='fab fa-github fa-3x' />
                  </a>
                </span>
              </CoinDetailsDiv>
              <CoinDetailsDiv>
                <p style={{ fontSize: '1.2em' }}>Website</p>
                <span style={{ fontSize: '1.2em' }}>
                  <a href={data.links.homepage[0]}>
                    <i className='fas fa-home fa-3x' />
                  </a>
                </span>
              </CoinDetailsDiv>
              <CoinDetailsDiv>
                <p style={{ fontSize: '1.2em' }}>Reddit</p>
                <span style={{ fontSize: '1.2em' }}>
                  <a href={data.links.subreddit_url}>
                    <i className='fab fa-reddit fa-3x' />
                  </a>
                </span>
              </CoinDetailsDiv>
              <CoinDetailsDiv>
                <p style={{ fontSize: '1.2em' }}>Last Updated</p>
                <span style={{ fontSize: '1.2em' }}>
                  {moment(data.market_data.last_updated).fromNow()}
                </span>
              </CoinDetailsDiv>
            </CoinDetailsGrid>
          )}
        </React.Fragment>
      )}
      <GraphContainer>
        <Line
          data={chartData}
          options={{
            maintainAspectRatio: false,
            showLines: false,
            animation: { duration: 0 },
            hover: { animationDuration: 0 },
            responsiveAnimationDuration: 0,
            scales: {
              yAxes: [
                {
                  scaleLabel: { display: true, labelString: 'Price in $ (USD)' }
                }
              ]
            }
          }}
        />
      </GraphContainer>
    </React.Fragment>
  );
}

export default CoinDetails;
