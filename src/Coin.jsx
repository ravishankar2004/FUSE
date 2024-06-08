// Coin.jsx

import React from 'react';
import './Coin.css';

const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  image,
  priceChange
}) => {
  return (
    <tr className='coin-container'>
      <td>{symbol}</td>
      <td>
        <img src={image} alt='crypto' className='coin-image' />
        <span>{name}</span>
      </td>
      <td>${price}</td>
      <td>${marketcap.toLocaleString()}</td>
      <td className={priceChange < 0 ? 'red' : 'green'}>
        {priceChange.toFixed(2)}%
      </td>
    </tr>
  );
};

export default Coin;
