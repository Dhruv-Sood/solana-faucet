import { WalletDisconnectButton, WalletMultiButton } from "@solana/wallet-adapter-react-ui"

const ConnectWallet = () => {
  return (
    <div className="h-[100vh] w-full flex justify-center items-center">
        <div className="bg-slate-700">
              <WalletMultiButton>
                    Connect Wallet
              </WalletMultiButton>
              
        </div>
    </div>
  )
}
export default ConnectWallet