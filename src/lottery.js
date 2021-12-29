import Web3 from "./web3";

const abi =[{"constant":true,"inputs":[],"name":"manager","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],
"name":"pickWinner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getPlayers","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"enter","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"players","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":
"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}];

const address="0xDf82683de06D58Fc460c4DD763113f1C8475dE18";


// const Lottery=new Web3.eth.Contract(abi, address);
export default new Web3.eth.Contract(abi, address);