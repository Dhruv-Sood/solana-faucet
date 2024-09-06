import { useEffect, useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clipboard, RefreshCw } from "lucide-react"

import SenButton from "./SendButton"

import { Connection, PublicKey } from "@solana/web3.js"
import { WalletDisconnectButton } from "@solana/wallet-adapter-react-ui"


export function WalletCard({publicKey}:any) {
  const [copied, setCopied] = useState(false)
  const [refreshing, setRefreshing] = useState(false)
  const [balance, setBalance] = useState(0)

  const [amount, setAmount] = useState(0)

  const onAmountChange = (e:any) => {
    setAmount(e.target.value)
  }

  const connection = new Connection(import.meta.env.VITE_RPC_URL!)

  const getBalance = async () => {
    const bal = await connection.getBalance(new PublicKey(publicKey))
    setBalance(bal / 1000000000)
  }

  useEffect(()=>{
    getBalance()
  },[publicKey])

  const walletAddress = publicKey?.toString()


  const shortenAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

  const copyAddress = () => {
    navigator.clipboard.writeText(walletAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const refreshBalance = async() => {
    setRefreshing(true)
    await getBalance()
    setRefreshing(false)
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Crypto Wallet</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Wallet Address</span>
          <div className="flex items-center space-x-2">
            <span className="font-mono text-sm">{shortenAddress(walletAddress)}</span>
            <Button variant="outline" size="icon" onClick={copyAddress}>
              <Clipboard className="h-4 w-4" />
              <span className="sr-only">Copy address</span>
            </Button>
          </div>
        </div>
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Balance</span>
            <Button variant="ghost" size="icon" onClick={refreshBalance} disabled={refreshing}>
              <RefreshCw className={`h-4 w-4 ${refreshing ? 'animate-spin' : ''}`} />
              <span className="sr-only">Refresh balance</span>
            </Button>
          </div>
          <div className="text-2xl font-bold">{balance.toFixed(4)} SOL</div>
          
        </div>
      </CardContent>
      <CardFooter className="w-full flex justify-center flex flex-col gap-2">

        <input type="number" placeholder="Enter Amount" className="w-full p-2 shadow-lg border-black border-2 border-[#00000038] rounded-xl outline-none " onChange={onAmountChange}/>

        <SenButton amount={amount} publicKey={publicKey}/>
        <WalletDisconnectButton/>
      </CardFooter>
    </Card>
  )
}