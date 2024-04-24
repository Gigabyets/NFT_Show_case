import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { clusterApiUrl } from "@solana/web3.js";

export const SOLANA_MAIN = clusterApiUrl(WalletAdapterNetwork.Mainnet);
export const SOLANA_TEST = clusterApiUrl(WalletAdapterNetwork.Testnet);
export const SOLANA_DEV = clusterApiUrl(WalletAdapterNetwork.Devnet);

export const HELIUS = `https://rpc.helius.xyz/?api-key=${process.env.HELIUS_API_KEY='6ac3bf11-5a05-4b86-803e-c59278df5333'}`;

export const NETWORK = HELIUS;
