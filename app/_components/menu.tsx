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
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20 h-16 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/cormedix"
          className="text-xl font-semibold text-neutral-900 font-['Schibsted_Grotesk']"
        >
          quefreen
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex space-x-8 items-center text-neutral-900 font-medium">
          <Link href="/sobre" className="hover:text-neutral-500 transition-colors">
            Sobre
          </Link>
          <Link href="#" className="hover:text-neutral-500 transition-colors">
            PT
          </Link>
          <Link href="#" className="hover:text-neutral-500 transition-colors">
            EN
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
            <Link href="/about" className="hover:text-neutral-500 transition-colors">
              About
            </Link>
            <Link href="#" className="hover:text-neutral-500 transition-colors">
              PT
            </Link>
            <Link href="#" className="hover:text-neutral-500 transition-colors">
              EN
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
