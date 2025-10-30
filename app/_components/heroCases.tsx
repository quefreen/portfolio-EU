

import Spline from "@splinetool/react-spline"
import Link from "next/link"

export function HeroCaseCormedix() {
  return (
    <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-4 md:px-8 lg:px-12">
      {/* Header */}
      <div className="mx-0 md:mx-16">
        <div className="h-40"></div>
        <h4
          className="text-[1rem] leading-[100%] text-[#999] font-semibold"
          style={{ fontFamily: 'var(--font-schibstedGrotesk), sans-serif' }}
        >
          CORMEDIX
        </h4>

        
        
        <div className="h-2 mx-0 md:mx-16"></div>
        <h1>Capacitando investidores e médicos com dados estratégicos.</h1>
        <div className="h-4"></div>
        <div className="inline-flex justify-start items-start gap-6">
          
  <div className="flex justify-start items-center gap-3">
    <div className="px-4 py-2 bg-white rounded-[32px] flex justify-center items-center">
      <div className="justify-start text-neutral-900 text-sm font-medium font-['Schibsted_Grotesk'] leading-5">Relações com Investidores</div>
    </div>
  </div>
  <div className="flex justify-start items-center gap-3">
    <div className="px-4 py-2 bg-white rounded-[32px] flex justify-center items-center">
      <div className="justify-start text-neutral-900 text-sm font-medium font-['Schibsted_Grotesk'] leading-5">Redesign Estratégico</div>
    </div>
  </div>
  <div className="flex justify-start items-center gap-3">
    <div className="px-4 py-2 bg-white rounded-[32px] flex justify-center items-center">
      <div className="justify-start text-neutral-900 text-sm font-medium font-['Schibsted_Grotesk'] leading-5">Conteúdo legado</div>
    </div>
  </div>
</div>
        <div className="h-4"></div>
       

      


     
        <div className="h-24"></div>
      </div>
      

      {/* Spline */}
      <div className="relative max-w-8xl mx-auto w-full">
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-[5] h-[620px] flex items-center justify-center">
          <Spline scene="https://prod.spline.design/bKyh0yyGvXQK7vcB/scene.splinecode" />
        </div>

        {/* Moldura branca (mantida original) */}
        <div className="relative max-w-8xl h-[520px] bg-white overflow-hidden">
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

      <div className="h-24"></div>

      {/* Bloco final */}
      <div className="max-w-6xl mx-0 md:mx-16">
        <div className="flex flex-col md:flex-row justify-between items-start flex-wrap gap-8">
          <div className="flex justify-start items-start gap-8">
            <div className="inline-flex flex-col justify-start items-start gap-4">
              <div className="flex flex-col justify-start items-start gap-10">
                <div className="justify-start text-black text-base font-semibold font-['Schibsted_Grotesk'] leading-none text-[1.1rem]">
                  ROLE
                </div>
              </div>
              <div className="justify-start text-black text-base font-normal font-['Schibsted_Grotesk'] leading-tight text-[1.1rem]">
                Product Designer
              </div>
            </div>

            <div className="inline-flex flex-col justify-start items-start gap-4">
              <div className="flex flex-col justify-start items-start gap-8">
                <div className="justify-start text-black text-base font-semibold font-['Schibsted_Grotesk'] leading-none text-[1.1rem]">
                  TIMELINE
                </div>
              </div>
              <div className="justify-start text-black text-base font-normal font-['Schibsted_Grotesk'] leading-tight text-[1.1rem]">
                2023
              </div>
            </div>
          </div>
            <div className="h-1"></div>
          <div className="inline-flex flex-col justify-start items-start gap-4">
            <div className="flex flex-col justify-start items-start gap-8">
              <div className="justify-start text-black text-base font-semibold font-['Schibsted_Grotesk'] leading-none text-[1.1rem]">
                RESPONSABILIDADES
              </div>
            </div>
            <div className="justify-start text-black text-base font-normal font-['Schibsted_Grotesk'] leading-tight">
              Liderar a Estratégia de UX & Design.
            </div>
            <div className="justify-start text-black text-base font-normal font-['Schibsted_Grotesk'] leading-tight">
              Garantir o Handoff e a Sustentabilidade.
            </div>
            <div className="justify-start text-black text-base font-normal font-['Schibsted_Grotesk'] leading-tight">
              Inovação e Prototipagem da Molécula 3D.
            </div>
            <div className="h-12"></div>
          </div>
        </div>
      </div>
    </div>
  )
}