import Image from "next/image";
import { TypingEffect } from "./Typingeffect";

export function HeroAbout () {
  return (
    <div className="w-full">
      
      
      <div className="h-40"></div>
      
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row gap-6 px-4 sm:px-8 md:px-12 lg:px-20">
        
        <div className="relative w-full md:w-1/2 bg-white h-[400px] md:h-auto p-12 sm:p-16 md:p-16 mx-auto">
        <Image 
                        src="/quefreen.jpg" 
                        alt="Foto Quefreen" 
                        fill 
                        className="object-cover z-0"
                      />
         
          
         
          <div className="absolute top-0 right-0 w-[64px] h-[64px] pointer-events-none z-[1]"
               style={{backgroundImage: 'url(/dirtopo.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}} />
          <div className="absolute bottom-0 left-0 w-[64px] h-[64px] pointer-events-none z-[1]"
               style={{backgroundImage: 'url(/esqbaixo.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}} />
          <div className="absolute bottom-0 right-0 w-[64px] h-[64px] pointer-events-none z-[1]"
               style={{backgroundImage: 'url(/dirbaixo.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}} />
        </div>
        
        <div className="w-full md:w-1/2 relative h-[300px] md:h-auto">
        
      <p className="whitespace-pre-line text-[3rem] leading-[110%] text-[#131415] font-medium tracking-tight;
    font-family: var(--font-schibstedGrotesk), sans-serif">
        Designer{"\n"}de produtos{"\n"}com formação criativa{"\n"}e paixão por{"\n"} <TypingEffect />
        
        
      </p>
    <div className="h-12"></div>
        </div>
<div className="h-24"></div>
      </div>
      
      
      
      

      <div className="max-w-6xl mx-auto w-full px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="h-24"></div>

        <div className="w-full inline-flex flex-col justify-start items-start gap-3.5">
  <div className="inline-flex justify-start items-center gap-1">
    <div className="rounded flex justify-start items-center gap-[5px]">
      <h4
          className="text-[1rem] leading-[100%] text-[#919191] font-semibold"
          style={{ fontFamily: 'var(--font-schibstedGrotesk), sans-serif' }}
        >
          QUÉFREEN ALMEIDA
        </h4>
    </div>
  </div>
  <div className="self-stretch justify-start text-black text-xl font-normal  leading-7 text-base text-black">Sou um profissional com um repertório diverso, que se estende de 3D a front-end. <br/>Utilizei <span className="font-semibold">Next.js e Tailwind CSS</span> para desenvolver este próprio portfólio que você está navegando.</div>
  <div className="inline-flex justify-start items-center">
    <div className="h-32"></div>
  <div className="flex flex-wrap md:flex-nowrap justify-left md:justify-start gap-4">
  {["Negócios", "Med-tech", "Desenvolvimento", "UI", "UX", "Gaming"].map((item) => (
    <div
      key={item}
      className="px-6 py-3 bg-white rounded-[32px] flex justify-center items-center text-neutral-900 text-xl font-medium leading-7"
    >
      {item}
    </div>
  ))}
</div>
  </div>
</div>

<div className="h-6"></div>


<div className="max-w-6xl mx-auto w-full">
<h4
          className="text-[1rem] leading-[100%] text-[#919191] font-semibold"
          style={{ fontFamily: 'var(--font-schibstedGrotesk), sans-serif' }}
        >
          EXPERIÊNCIAS
        </h4>
        <div className="h-4"></div>
        <div className="max-w-7xl"></div>
    <div className="w-full inline-flex flex-col justify-start items-start gap-3.5">
  <div className="self-stretch flex flex-col justify-start items-start gap-px">
    <div className="self-stretch justify-start text-black text-xl font-medium  leading-7">Competitive Edge <div className="h-1"></div></div>
    <div className="self-stretch inline-flex justify-between items-end">
        
      <div className="justify-start text-neutral-400 text-[1rem] font-semibold  leading-none">DESIGNER DE PRODUTO SÊNIOR</div>
      <div className="justify-start text-neutral-400 text-[1rem] font-semibold leading-none">2022 / ATUALMENTE</div>
    </div>
  </div>
  <div className="self-stretch justify-start text-black text-xl font-normal leading-7">Liderança na apresentação de design a clientes, colaboração interdepartamental (Publicidade, Atendimento) e padronização interna via treinamento e documentação de desenvolvimento. Experiência completa no processo de UX/UI: auditorias, journey maps, análise competitiva e design de interfaces.</div>
  <div className="w-full h-[1px] bg-[#919191]"></div>

  
</div>
<div className="h-12"></div>
<div className="w-full inline-flex flex-col justify-start items-start gap-3.5">
  <div className="self-stretch flex flex-col justify-start items-start gap-px">
    <div className="self-stretch justify-start text-black text-xl font-medium leading-7">IPG Health <div className="h-1"></div></div>
    <div className="self-stretch inline-flex justify-between items-end">
        
      <div className="justify-start text-neutral-400 text-[1rem] font-semibold  leading-none">DESIGNER DE PRODUTO SÊNIOR</div>
      <div className="justify-start text-neutral-400 text-[1rem] font-semibold  leading-none">2020 / 2022</div>
    </div>
  </div>
  <div className="self-stretch justify-start text-black text-xl font-normal leading-7">Liderei apresentações para clientes, desenvolvi uma biblioteca inovadora (3D/micro-interações) para a plataforma Veeva e conduzi o treinamento de novos membros da equipe.</div>
  <div className="w-full h-[1px] bg-[#919191]"></div>

  
</div>
<div className="h-12"></div>

<div className="w-full inline-flex flex-col justify-start items-start gap-3.5">
  <div className="self-stretch flex flex-col justify-start items-start gap-px">
    <div className="self-stretch justify-start text-black text-xl font-medium leading-7">Tugarê <div className="h-1"></div></div>
    <div className="self-stretch inline-flex justify-between items-end">
        
      <div className="justify-start text-neutral-400 text-[1rem] font-semibold leading-none">DESIGNER DE INTERFACE</div>
      <div className="justify-start text-neutral-400 text-[1rem] font-semibold  leading-none">2019 / 2020</div>
    </div>
  </div>
  <div className="self-stretch justify-start text-black text-xl font-normal leading-7">Responsável pelo desenho de sites e portais, incluindo a criação de protótipos, wireframes e sitemaps para definir a estrutura e a experiência do usuário.</div>
  <div className="w-full h-[1px] bg-[#919191]"></div>

  
</div>
<div className="h-12"></div>
<div className="w-full flex justify-between items-center">
  <div className="text-black text-xl font-medium  leading-7">
    Direção de Arte
  </div>
  <div className="text-neutral-400 text-[1rem] font-semibold  leading-none">
    2014 / 2019
  </div>
</div>

<div className="h-24"></div>







</div>
        
      </div>
      
      
    </div>
  )
}