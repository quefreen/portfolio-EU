'use client'

import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useState } from "react"


export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [emailCopied, setEmailCopied] = useState(false)

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText('quefreen.almeida@gmail.com')
      setEmailCopied(true)
      setTimeout(() => setEmailCopied(false), 2000)
    } catch (err) {
      console.error('Erro ao copiar e-mail', err)
    }
  }

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
      <div className="max-w-[1400px] mx-auto w-full px-8 sm:px-4 md:px-12 lg:px-28 h-20 flex justify-between items-center">
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

          <Link href="/playground" className="hover:text-[#FF6B00] font-normal transition-colors">
            playground
          </Link>

          {/* Botão: copiar e-mail (mantendo o ícone) */}
          <button
  type="button"
  onClick={handleCopyEmail}
  className="
    group
    inline-flex items-center gap-2 text-[18px]
    text-[#131415] hover:text-[#FF6B00]
    transition-colors duration-200
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00] focus-visible:ring-offset-2
  "
  style={{ fontFamily: 'var(--font-schibstedGrotesk), sans-serif' }}
  aria-label="Copiar e-mail para a área de transferência"
>
  <span className="font-normal text-[18px]">
    {emailCopied ? 'e-mail copiado' : 'copiar e-mail'}
  </span>

  {/* Ícone normal */}
  <Image
    src="/copy.svg"
    alt=""
    width={16}
    height={16}
    className="h-[20px] w-[20px] flex-none group-hover:hidden"
    aria-hidden="true"
  />

  {/* Ícone laranja no hover */}
  <Image
    src="/copy_orange.svg"
    alt=""
    width={16}
    height={16}
    className="h-[20px] w-[20px] flex-none hidden group-hover:inline-block"
    aria-hidden="true"
  />
</button>

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
