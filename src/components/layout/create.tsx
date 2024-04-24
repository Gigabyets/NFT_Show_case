import { Button, ButtonState } from "@components/home/button";
import { DEFAULT_WALLET } from "@utils/globals";
//import React from "react";
import React, { useState } from "react";
import axios from "axios";
// import './resources/css/custom2.css';
import { signAndConfirmTransactionFe } from "./utilityfunc";
import { Connection, clusterApiUrl, PublicKey, Transaction, SystemProgram } from '@solana/web3.js';



type Props = {
  onClick: Function;
  butttonState: ButtonState;
  headerContent: string;
  buttonContent: string;
  isToken?: boolean;
  id: string;
};

export function Create({
  onClick,
  butttonState,
  headerContent,
  buttonContent,
  isToken = false,
  id,
}: Props) {
  const [address, setAddress] = React.useState<string | undefined>();
  const [amount, setAmount] = React.useState<string | undefined>();
  const wallet = (window as any).solana;
  
  return (
    <>
    
     
    </>
  );
}
