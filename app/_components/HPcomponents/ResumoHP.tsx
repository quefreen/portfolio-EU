import { TeamAvatars } from "@/app/TeamAvatars";

export function ResumoHP () {
  return (
    <div>
    
      <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-4 md:px-8 lg:px-12 flex flex-col md:flex-row gap-6 ">
        
      
        <div className="relative overflow-hidden w-full md:w-2/3 mx-0 md:mx-16">
          
          <div className="w-full flex flex-col justify-start items-start gap-10">
            <div className="self-stretch justify-start text-[#131415] text-xl font-medium" style={{ fontFamily: 'var(--font-schibstedGrotesk), sans-serif' }}>
              Resumo Rápido
            </div>
            
            <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
              <div className="text-[1rem] leading-[100%] text-[#a3a3a3] font-semibold uppercase">PROJETO</div>
              <p className="text-[1.2rem]">Criação da primeira identidade digital da Highpoint Experience, agência<br /> de marketing de experiência focada em saúde, para romper com a estética conservadora do setor e atrair clientes e talentos de ponta.</p>
            </div>

        
            
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
              <div className="text-[1rem] leading-[100%] text-[#a3a3a3] font-semibold uppercase">RESULTADOS</div>
              <p className="text-[1.2rem]">O resultado foi uma plataforma que estabeleceu uma identidade visual única. <br />Essa ousadia, rara no setor de saúde, foi fruto de uma parceria estratégica <br />com um Diretor de Criação experiente, diferenciando a Highpoint <br />e reforçando sua expertise.</p>
             
            </div>
          </div>
          
       </div>
        
        <div className="w-full md:w-1/3 relative">
        <div className="w-72 inline-flex flex-col justify-start items-start gap-6">
  <div className="self-stretch flex flex-col justify-start items-start gap-6">
    <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
      <h4
          className="text-[1rem] leading-[100%] text-[#999] font-semibold"
          style={{ fontFamily: 'var(--font-schibstedGrotesk), sans-serif' }}
        >
          TIME
        </h4>
      <div className="inline-flex justify-start items-start ">
             <TeamAvatars members={["bea", "diego", "alvarez", "leticia"]} />
       
      </div>
    </div>
    <div className="self-stretch flex flex-col justify-start items-start gap-6">
      <div className="self-stretch flex flex-col justify-start items-start gap-3">
        <h4
          className="text-[1rem] leading-[100%] text-[#999] font-semibold"
          style={{ fontFamily: 'var(--font-schibstedGrotesk), sans-serif' }}
        >
          MINHA FUNÇÃO
        </h4>
        <div className="self-stretch justify-start text-[1rem] text-base font-normal font-['Schibsted_Grotesk'] leading-6 text-[#131415]">Visual Design<br/>Handoff e a Sustentabilidade.<br/>Documentações</div>
      </div>
      <div data-svg-wrapper>
        <svg width="288" height="1" viewBox="0 0 288 1" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0.5H288" stroke="black"/>
        </svg>
      </div>
    </div>
    <div className="self-stretch flex flex-col justify-start items-start gap-3">
      <h4
          className="text-[1rem] leading-[100%] text-[#999] font-semibold"
          style={{ fontFamily: 'var(--font-schibstedGrotesk), sans-serif' }}
        >
          TIMELINE
        </h4>
      <div className="self-stretch justify-start text-[1rem] text-lg font-normal font-['Schibsted_Grotesk']  leading-6">2023</div>
    </div>
  </div>
</div>
        </div>
        
      </div>
      <div className="h-32"></div>
    </div>
  )
}