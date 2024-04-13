import React, { useEffect, useState } from 'react';
import { fetchBalance } from './ethereumService';

function EthereumComponent() {
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    async function fetchEthereumBalance() {
      const publicKey = 'YOUR_ETHEREUM_PUBLIC_KEY';
      const balance = await fetchBalance(publicKey);
      setBalance(balance);
    }
    fetchEthereumBalance();
  }, []);

  return (
    <div>
      <h2>Ethereum Account Balance:</h2>
      <p>{balance}</p>
    </div>
  );
}

export default EthereumComponent;
