
import { Navbar } from "./navbar"
import { useWallet } from "@solana/wallet-adapter-react";

import ConnectWallet from "./ConnectWallet";
import Faucet from "./Faucet";

const FaucetApp = () => {
    const { publicKey } = useWallet()



  return (
    <div className="min-h-screen">
          <Navbar />
          {publicKey ? <Faucet publicKey={publicKey.toString()}/> : <ConnectWallet />}

    </div>
  )
}
export default FaucetApp