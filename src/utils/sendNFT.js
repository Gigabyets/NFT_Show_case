// utils/sendNFT.js
import { Wallet, Transaction, PublicKey, Connection } from '@solana/web3.js';
import { Token, TOKEN_PROGRAM_ID } from '@project-serum/spl-token';
import { connection } from './solana'; 

const sendNFT = async (recipientAddress, tokenId, wallet) => {
  try {
   
    const mint = new PublicKey('<TOKEN_MINT_ADDRESS>'); 

    
    const senderTokenAccount = new PublicKey('<SENDER_TOKEN_ACCOUNT_ADDRESS>'); 

    
    const recipientTokenAccount = new PublicKey(recipientAddress);

    
    const ownerTokenAccount = wallet.publicKey;

  
    const tokenProgram = new Token(connection, mint, TOKEN_PROGRAM_ID, wallet);

    
    const transferInstruction = Token.createTransferInstruction(
      TOKEN_PROGRAM_ID,
      senderTokenAccount,
      recipientTokenAccount,
      ownerTokenAccount,
      [],
      1 
    );

    
    const transaction = new Transaction().add(transferInstruction);

    
    const signedTransaction = await wallet.signTransaction(transaction);

   
    const txId = await connection.sendRawTransaction(signedTransaction.serialize());

    return txId;
  } catch (error) {
    throw error;
  }
};

export default sendNFT;
