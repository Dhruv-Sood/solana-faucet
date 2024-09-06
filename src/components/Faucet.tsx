import { WalletCard } from "./wallet-card"

const Faucet = ({publicKey}:any) => {
  return (
    <div className="min-h-[100vh] flex justify-center items-center w-full">
        <WalletCard publicKey={publicKey}/>
    </div>
  )
}
export default Faucet