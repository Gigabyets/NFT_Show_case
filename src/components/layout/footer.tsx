import { useState } from 'react';
import sendNFT from '@utils/sendNFT';


export function Footer() {
  return (
    <footer className="footer footer-center p-4 text-base-content">
      <div>
        <p>
          Created by   {" "}
          <a
            href="https://as1.ftcdn.net/v2/jpg/05/61/58/40/1000_F_561584052_LQoH3rEzxLOSxgowbLOtmL24eEbZGS7B.jpg"
            target="_blank"
            rel="noreferrer"
            className="link link-primary"
          >Team NFT gallery Dev</a>
          
          . best assistant {" "}
          <a
            href="https://chat.openai.com/chat"
            target="_blank"
            rel="noreferrer"
            className="link link-primary"
          >
            ChatGPT
          </a>
          .
        </p>
      </div>

    </footer>
  );
}
