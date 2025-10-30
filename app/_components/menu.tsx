'use client'

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header
      id="nav"
      className="
        fixed top-0 left-0 w-full z-50
        border-b border-neutral-200
        bg-[#F7F7F7] !bg-[#F7F7F7] opacity-100
        backdrop-blur-none supports-[backdrop-filter]:backdrop-blur-0
        mix-blend-normal isolate
        before:content-none after:content-none
      "
      style={{
        backgroundColor: '#F6F6F6',
        backdropFilter: 'none',
        WebkitBackdropFilter: 'none',
        opacity: 1,
      }}
    ><div className="max-w-[1400px] mx-auto w-full px-8 sm:px-4 md:px-12 lg:px-28 h-20 flex justify-between items-center">
  {/* Logo + título à esquerda */}
  <div className="flex items-center gap-4 ">
    <Link
      href="/home"
      className="text-[18px] font-normal text-[#131415] font-['Schibsted_Grotesk']  hover:text-[#FF6B00] transition-colors"
    >
      quefreen
    </Link>
    <p className="text-[18px] font-normal text-[#999] font-['Schibsted_Grotesk']">
      designer de produto
    </p>
  </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex space-x-8 items-center text-[18px] font-normal text-[#131415] font-['Schibsted_Grotesk'">
          <Link href="/sobre" className="hover:text-[#FF6B00] transition-colors">
            sobre
          </Link>

          

          <Link href="/cormedix" className="hover:text-[#FF6B00] font-normal transition-colors">
            playground
          </Link>

          


         <Link
      href="/cv.pdf"                 // coloque seu arquivo no /public
      download
      className="
        inline-flex items-center gap-2 text-[18px]
        text-[#131415] hover:text-[#FF6B00]
        transition-colors duration-200
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00] focus-visible:ring-offset-2
      "
      aria-label="Baixar currículo (PDF)"
    >
      <span className="font-normal text-[18px]">download cv</span>

      <svg
        viewBox="0 0 25 25"
        className="h-[16px] w-[16px] flex-none"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M1.41776 17.9992V19.6454C1.41776 20.5186 1.76463 21.3561 2.38208 21.9736C2.99953 22.591 3.83696 22.9379 4.71016 22.9379H19.5261C20.3993 22.9379 21.2366 22.591 21.8541 21.9736C22.4715 21.3561 22.8184 20.5186 22.8184 19.6454V17.9992"
          stroke="currentColor" strokeWidth="1.73116" strokeLinecap="round" strokeLinejoin="round"
        />
        <path
          d="M6.39874 10.5858C7.52043 12.6502 9.19107 14.5315 11.3433 15.8327C11.8199 16.1209 12.4161 16.1208 12.8927 15.8326C15.0448 14.5314 16.7154 12.6502 17.8372 10.5858"
          stroke="currentColor" strokeWidth="1.73116" strokeLinecap="round" strokeLinejoin="round"
        />
        <path
          d="M12.1181 16.0487V1.73116"
          stroke="currentColor" strokeWidth="1.73116" strokeLinecap="round" strokeLinejoin="round"
        />
      </svg>
    </Link>

          
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-neutral-900"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          className="
            md:hidden border-t border-neutral-200
            bg-[#F7F7F7] !bg-[#F7F7F7] opacity-100
            backdrop-blur-none supports-[backdrop-filter]:backdrop-blur-0
            before:content-none after:content-none
          "
          style={{
            backgroundColor: '#F6F6F6',
            backdropFilter: 'none',
            WebkitBackdropFilter: 'none',
            opacity: 1,
          }}
        >
          <nav className="flex flex-col space-y-4 px-6 py-4 text-lg text-neutral-900 font-medium">
            <Link href="/about" className="hover:text-[#FF6B00] transition-colors">
              About
            </Link>
            <Link href="#" className="hover:text-[#FF6B00] transition-colors">
              PT
            </Link>
            <Link href="#" className="hover:text-[#FF6B00] transition-colors">
              EN
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
