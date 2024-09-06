
import { ConnectionProvider, useWallet, WalletProvider } from '@solana/wallet-adapter-react';

import {
  WalletModalProvider,
} from '@solana/wallet-adapter-react-ui';


// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';

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

