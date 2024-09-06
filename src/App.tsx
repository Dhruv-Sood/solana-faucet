import React, { FC, useMemo } from 'react';
import { ConnectionProvider, useWallet, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import { Navbar } from './components/navbar';
import FaucetApp from './components/FaucetApp';

function App() {

    
    

  return (
    <ConnectionProvider endpoint={import.meta.env.VITE_RPC_URL!}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <FaucetApp />
          
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default App

/*
<WalletMultiButton />
                    <WalletDisconnectButton />
*/