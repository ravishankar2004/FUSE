// CryptoPage.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CryptoPage.css';
import Coin from './Coin';

const CryptoPage = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
          params: {
            vs_currency: 'usd',
            order: 'market_cap_desc',
            per_page: 100,
            page: 1,
            sparkline: false
          }
        });
        setCoins(response.data);
      } catch (error) {
        console.error('Error fetching crypto data:', error);
      }
    };

    fetchCryptoData();
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='crypto-page'>
      <div className='crypto-search'>
        <h1 className='crypto-heading text-center'>Search a Currency</h1>
        <input
          className='crypto-input mx-auto d-block text-center'
          type='text'
          onChange={handleChange}
          placeholder='Search'
        />
      </div>
      <div className='crypto-container'>
        <table className='crypto-table'>
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Name</th>
              <th>Price (USD)</th>
              <th>Market Cap (USD)</th>
              <th>Price Change (24h)</th>
            </tr>
          </thead>
          <tbody>
            {filteredCoins.map(coin => (
              <Coin
                key={coin.id}
                name={coin.name}
                price={coin.current_price}
                symbol={coin.symbol}
                marketcap={coin.market_cap}
                image={coin.image}
                priceChange={coin.price_change_percentage_24h}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CryptoPage;
