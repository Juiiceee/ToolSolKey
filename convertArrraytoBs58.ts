import web3 from "@solana/web3.js";
import bs58 from 'bs58';
import id from "./array.json";
let secretKey = new Uint8Array(id);
console.log(bs58.encode(secretKey));