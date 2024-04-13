// ethereumService.js
import ethereumConnection from './ethereumConnection';

export async function fetchBalance(publicKey) {
  // Convert the Ethereum address to checksum format
  const checksumAddress = ethereumConnection.utils.toChecksumAddress(publicKey);
  
  // Fetch the balance from the Ethereum blockchain
  const balance = await ethereumConnection.eth.getBalance(checksumAddress);
  
  // Convert the balance from Wei to Ether
  const balanceInEther = ethereumConnection.utils.fromWei(balance, 'ether');
  
  return balanceInEther;
}
