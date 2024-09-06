

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { RefreshCw, Send } from "lucide-react"

import { Connection, PublicKey } from "@solana/web3.js"
import { useWallet } from "@solana/wallet-adapter-react"

export default function SenButton({ amount, publicKey }: any) {

    const [sending, setSending] = useState(false)

    const requestAirdrop = async () => {
        try {
            setSending(true)

            const connection = new Connection(import.meta.env.VITE_RPC_URL!)
            const id = new PublicKey(publicKey)
            await connection.requestAirdrop(id, amount * 1000000000)
            setSending(false)
        } catch (error) {
            console.log(error);

        }
    }

    return (
        <Button
            className="w-full bg-purple-600 hover:bg-purple-700 text-white"
            onClick={requestAirdrop}
        >
            {sending ? (
                <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                </>
            ) : (
                <>
                    <Send className="mr-2 h-4 w-4" />
                    Send SOL
                </>
            )}
        </Button>
    )
}