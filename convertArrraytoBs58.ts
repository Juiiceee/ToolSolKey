import bs58 from 'bs58';
import promptSync from 'prompt-sync';

const prompt = promptSync({ sigint: true });

try {
  // Récupère l'argument ou demande une saisie interactive
  let input = process.argv[2];
  
  if (!input) {
    input = prompt('Entrez votre array de nombres (format: [1,2,3,4...]): ', { echo: '*' });
  }
  
  if (!input) {
    console.error('Erreur: Aucune saisie détectée.');
    process.exit(1);
  }
  
  const array = JSON.parse(input);
  const secretKey = new Uint8Array(array);
  console.log('Clé BS58:', bs58.encode(secretKey));
} catch (error) {
  console.error('Erreur: Format d\'array invalide. Utilisez le format [1,2,3,4...]');
}
