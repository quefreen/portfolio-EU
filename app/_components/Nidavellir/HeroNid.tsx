

import Spline from "@splinetool/react-spline"
import Link from "next/link"

export function HeroNid() {
  return (
    <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-4 md:px-8 lg:px-12">
      {/* Header */}
      <div className="mx-0 md:mx-16">
        <div className="h-40"></div>
        <h4
          className="text-[1rem] leading-[100%] text-[#999] font-semibold"
          style={{ fontFamily: 'var(--font-schibstedGrotesk), sans-serif' }}
        >
          E-commerce
        </h4>

        
        
        <div className="h-2 mx-0 md:mx-16"></div>
        <h1>Nidavellir</h1>
        <div className="h-4"></div>
        <div className="inline-flex justify-start items-start gap-6">
          
  <div className="flex justify-start items-center gap-3">
    <div className="px-4 py-2 bg-[#FF6B00] rounded-[32px] flex justify-center items-center">
      <div className="justify-start text-white text-sm font-medium font-['Schibsted_Grotesk'] leading-5">Projeto Pessoal</div>
    </div>
  </div>
  <div className="flex justify-start items-center gap-3">
    <div className="px-4 py-2 bg-white rounded-[32px] flex justify-center items-center">
      <div className="justify-start text-neutral-900 text-sm font-medium font-['Schibsted_Grotesk'] leading-5">Impressão 3D</div>
    </div>
  </div>
  <div className="flex justify-start items-center gap-3">
    <div className="px-4 py-2 bg-white rounded-[32px] flex justify-center items-center">
      <div className="justify-start text-neutral-900 text-sm font-medium font-['Schibsted_Grotesk'] leading-5">Negócios</div>
    </div>
  </div>
</div>
        
       

      


     
        <div className="h-12"></div>
      </div>
      

      {/* Spline */}
      <div className="relative max-w-8xl mx-auto w-full">
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-[5] h-[620px] flex items-center justify-center">
           
        </div>

        {/* Moldura branca (mantida original) */}
        <div 
  className="relative max-w-8xl h-[520px] overflow-hidden" 
  style={{
    backgroundImage: "url('/goblins.jpg')", // Coloque o caminho correto da sua imagem
    backgroundSize: 'cover', // Faz a imagem cobrir todo o espaço sem distorcer
    backgroundPosition: 'center', // Centraliza a imagem
    backgroundRepeat: 'no-repeat' // Evita que a imagem se repita
  }}
>
  {/* Conteúdo que vai ficar sobre a imagem de fundo */}
          <div
            className="absolute top-0 left-0 w-[150px] h-[150px] pointer-events-none z-[1]"
            style={{
              backgroundImage: 'url(/esqtopo.svg)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <div
            className="absolute top-0 right-0 w-[150px] h-[150px] pointer-events-none z-[1]"
            style={{
              backgroundImage: 'url(/dirtopo.svg)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-[150px] h-[150px] pointer-events-none z-[1]"
            style={{
              backgroundImage: 'url(/esqbaixo.svg)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <div
            className="absolute bottom-0 right-0 w-[150px] h-[150px] pointer-events-none z-[1]"
            style={{
              backgroundImage: 'url(/dirbaixo.svg)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          />

          <h1 className="relative z-10 p-8 text-white"></h1>
        </div>
      </div>

    

     
    </div>      

  )
}