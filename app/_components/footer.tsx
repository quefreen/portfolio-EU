import Image from "next/image"

import Link from "next/link"
import { CopyEmailButton } from "./copymail"

export function Footer() {
  return (
    <div className="w-full bg-[#131415]">
        <div className="h-8"></div>
      <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-4 md:px-8 lg:px-12">
        <h2 className="text-white mx-0 md:mx-16">
          Para novos projetos, jogar RPG <br/>ou conversar sobre design entre em contato.
        </h2>
        <div className="h-8"></div>
        <div className="flex flex-col md:flex-row items-start mx-0 md:mx-16 gap-4 md:gap-0">
          <p className="text-[#838383] font-semibold text-[1.5rem] mr-12" style={{ fontFamily: 'var(--font-schibstedGrotesk), sans-serif' }}>
            Chega mais, uai.
          </p>
          <a 
            href="https://www.linkedin.com/in/quefreen/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[18px] font-normal text-white font-['Schibsted_Grotesk'] text-[1rem] hover:text-orange-500 transition-colors mr-6"
            style={{ fontFamily: 'var(--font-schibstedGrotesk), sans-serif' }}
          >
            LinkedIn
          </a>
        <div className="h-32"></div>
          <CopyEmailButton />
        </div>
      </div>

      <div className="w-full">
        <div className="max-w-[1400px] mx-auto w-full px-8 sm:px-4 md:px-12 lg:px-28 h-20 flex justify-between items-center">
          <div className="flex items-center gap-4 ">
    <Link
      href="/home"
      className="text-[18px] font-normal text-white font-['Schibsted_Grotesk']  hover:text-[#FF6B00] transition-colors"
    >
      quefreen
    </Link>
    <p className="text-[18px] font-normal text-[#999] font-['Schibsted_Grotesk']">
      designer de produto
    </p>
  </div>
          
<div className="flex items-center gap-2">
  <p
    className="text-[1rem] text-white"
    style={{ fontFamily: "var(--font-schibstedGrotesk), sans-serif" }}
  >
    Feito com
  </p>

  <Image
    src="/dayse.svg"
    alt="Dayse"
    width={24}
    height={24}
    className="inline-block"
  />
</div>
        </div>
      </div>
    </div>
  )
}