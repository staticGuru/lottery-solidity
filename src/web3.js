import Web3 from 'web3';

window.ethereum.request({ method: "eth_requestAccounts" }); //this line helps for connect the metamask and react localhost
 
const web3 =new Web3(window.web3.currentProvider); 
export default web3;
// const web3 =new Web3(window.web3.currentProvider);

// export default web3;