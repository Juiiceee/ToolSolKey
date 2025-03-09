# UtilitySol Conversion Tools

This repository contains two utility tools for converting between different formats of Solana keypairs:

1. `convertArrayToBs58.ts` - Converts a secret key from an array format to Base58 string format
2. `convertBs58ToArray.ts` - Converts a Base58-encoded secret key to array format

## Installation

```bash
npm install
```

## Usage

### Converting an Array to Base58

The tool reads secret key data from an array in `array.json` and outputs the Base58 representation:

```bash
npx ts-node convertArrraytoBs58.ts
```

**Input format:** An array of numbers in `array.json`

**Output:** Base58-encoded string in the console

### Converting Base58 to Array

The tool reads a Base58-encoded secret key from `secret.json` and outputs the array representation:

```bash
npx ts-node convertBs58toArray.ts
```

**Input format:** A Base58-encoded string in `secret.json`

**Output:** Array representation of the secret key in the console

## Note

The `.gitignore` file is set up to exclude `array.json`, `secret.json` from version control to protect sensitive key material.

## Dependencies

- `@solana/web3.js`
- `bs58`