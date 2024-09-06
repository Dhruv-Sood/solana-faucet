'use client'

import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

export function Navbar() {
  return (
    <nav className="fixed p-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-3xl font-mono">
          Sol-Faucet
        </div>
        <div className="hover:text-3xl hover:cursor-pointer">
          <a href="#" target="_blank"><Github className="h-5 w-5 hover:h-6 hover:w-6 transition-all" /></a>
          

        </div>
      </div>
    </nav>
  )
}