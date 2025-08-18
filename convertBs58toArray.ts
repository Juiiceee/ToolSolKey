import web3 from "@solana/web3.js";
import bs58 from 'bs58';
import promptSync from 'prompt-sync';

const prompt = promptSync({ sigint: true });

try {
  const input = prompt('Entrez votre clé privée en format BS58: ', { echo: '*' });
  
  if (!input) {
    console.error('Erreur: Aucune saisie détectée.');
    process.exit(1);
  }
  
  const secretKey = bs58.decode(input.trim());
  console.log('Array de la clé secrète:', `[${web3.Keypair.fromSecretKey(secretKey).secretKey}]`);
} catch (error) {
  console.error('Erreur: Format BS58 invalide. Vérifiez votre clé privée.');
}