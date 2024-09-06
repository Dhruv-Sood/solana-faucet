import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import { Navbar } from "./navbar"
import { useWallet } from "@solana/wallet-adapter-react";
import { useEffect } from "react";
import ConnectWallet from "./ConnectWallet";
import Faucet from "./Faucet";

const FaucetApp = () => {
    const { publicKey } = useWallet()
    console.log(publicKey?.toString());

    useEffect(()=>{
        console.log(publicKey);
        
    },[publicKey])
  return (
    <div className="min-h-screen">
          <Navbar />
          {publicKey ? <Faucet publicKey={publicKey.toString()}/> : <ConnectWallet />}
          {/* <WalletMultiButton /> */}
    </div>
  )
}
export default FaucetApp