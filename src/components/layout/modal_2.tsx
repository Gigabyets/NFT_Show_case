import { Button, ButtonState } from "@components/home/button";
import { DEFAULT_WALLET } from "@utils/globals";
import React from "react";
import { useState } from 'react';
import sendNFT from "@utils/sendNFT";




type Props = {
  onClick: Function;
  butttonState: ButtonState;
  headerContent: string;
  buttonContent: string;
  isToken?: boolean;
  id: string;
};

export function Modal({
  onClick,
  butttonState,
  headerContent,
  buttonContent,
  isToken = false,
  id,
}: Props) {
  const [address, setAddress] = React.useState<string | undefined>();
  const [amount, setAmount] = React.useState<string | undefined>();


  return (
    <>
      <input type="checkbox" id={id} className="modal-toggle" />
      <label htmlFor={id} className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="font-bold text-xl mb-2">{headerContent}</h3>
          <div className="form-control w-full mb-2">
           
          </div>
          
          <div className="modal-action">
            <Button
              state={butttonState}
              onClick={onClick({
                isToken,
                address,
                amount,
              })}
              className="btn-primary"
            >
              {buttonContent}
            </Button>
          </div>
        </label>
      </label>
    </>
  );
}
