// Stock.jsx

import React, { useState, useEffect } from 'react';
import './stockPrices.css'; // Import the CSS file

const Stock = () => {
  const [stocks, setStocks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const apiKey = 'cp1g21hr01qu1k1i5qk0cp1g21hr01qu1k1i5qkg';
  const limit = 20; // Limit to 20 stocks

  useEffect(() => {
    const fetchStockSymbols = async () => {
      try {
        const response = await fetch(`https://finnhub.io/api/v1/stock/symbol?exchange=US&token=${apiKey}`);
        const data = await response.json();
        return data.slice(0, limit); // Limit to the first 50 symbols
      } catch (error) {
        console.error('Error fetching stock symbols:', error);
        return [];
      }
    };

    const fetchStockQuotes = async (symbols) => {
      try {
        const quotes = await Promise.all(symbols.map(async (stock) => {
          const response = await fetch(`https://finnhub.io/api/v1/quote?symbol=${stock.symbol}&token=${apiKey}`);
          const data = await response.json();
          return {
            symbol: stock.symbol,
            current_price: data.c,
            high_price: data.h,
            low_price: data.l,
            open_price: data.o,
            previous_close: data.pc,
            image: `https://finnhub.io/api/logo?symbol=${stock.symbol}`,
            price_change_percent: ((data.c - data.pc) / data.pc) * 100,
          };
        }));
        setStocks(quotes);
      } catch (error) {
        console.error('Error fetching stock quotes:', error);
      } finally {
        setIsLoading(false);
      }
    };

    const fetchData = async () => {
      const symbols = await fetchStockSymbols();
      await fetchStockQuotes(symbols);
    };

    fetchData();
  }, [apiKey]);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="stock-prices">
      <h1>Stock Prices</h1>
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            
            <th>Current Price</th>
            <th>High</th>
            <th>Low</th>
            <th>Open</th>
            <th>Previous Close</th>
            <th>Price Change (%)</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock, index) => (
            <tr key={index}>
              <td>{stock.symbol}</td>
              {/* <td><img src={stock.image} alt={stock.symbol} className="stock-image" /></td> */}
              <td>{stock.current_price}</td>
              <td>{stock.high_price}</td>
              <td>{stock.low_price}</td>
              <td>{stock.open_price}</td>
              <td>{stock.previous_close}</td>
              <td className={stock.price_change_percent >= 0 ? 'green' : 'red'}>{stock.price_change_percent.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Stock;
