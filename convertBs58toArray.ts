import web3 from "@solana/web3.js";
import bs58 from 'bs58';
import id from "./secret.json";
let secretKey = bs58.decode(id);
console.log(`[${web3.Keypair.fromSecretKey(secretKey).secretKey}]`);