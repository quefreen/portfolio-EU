export function ResumoCormedix () {
  return (
    <div>
    
      <div className="max-w-[1280px] mx-auto w-full flex flex-col md:flex-row gap-6 px-4 sm:px-8 md:px-12 lg:px-20 ">
        
        <div className="relative bg-white overflow-hidden w-full md:w-2/3">
          
          <div className="w-full flex flex-col justify-start items-start gap-10 p-12 sm:p-16 md:p-16 ">
            <div className="self-stretch justify-start text-black text-xl font-medium" style={{ fontFamily: 'var(--font-schibstedGrotesk), sans-serif' }}>
              Resumo Rápido
            </div>
            
            <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
              <div className="text-[1rem] leading-[100%] text-[#a3a3a3] font-semibold uppercase">PROJETO</div>
              <p className="text-[1.2rem]">Redesign estratégico do website institucional da biofarmacêutica CorMedix para alinhar a presença digital ao lançamento de seu primeiro produto comercial, o DefenCath.</p>
            </div>
            
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
              <div className="text-[1rem] leading-[100%] text-[#a3a3a3] font-semibold uppercase">RESULTADOS</div>
              <p className="text-[1.2rem]">Aumento da confiança de investidores através de um novo dashboard financeiro interativo, que transformou dados complexos em insights visuais.</p>
              <div className="w-full h-px bg-[#FF6B00]"></div>
              <p className="text-[1.2rem]">Melhora no acesso à informação para a comunidade médica, reestruturando um conteúdo legado de mais de 10 anos sob novas regras de usabilidade.</p>
              <div className="w-full h-px bg-[#FF6B00]"></div>
              <p className="text-[1.2rem]">Entrega de uma plataforma escalável em WordPress, respeitando restrições críticas de tempo, legais e técnicas.</p>
            </div>
          </div>
          
          <div className="absolute top-0 left-0 w-[64px] h-[64px] pointer-events-none z-[1]"
               style={{backgroundImage: 'url(/esqtopo.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}} />
          <div className="absolute top-0 right-0 w-[64px] h-[64px] pointer-events-none z-[1]"
               style={{backgroundImage: 'url(/dirtopo.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}} />
          <div className="absolute bottom-0 left-0 w-[64px] h-[64px] pointer-events-none z-[1]"
               style={{backgroundImage: 'url(/esqbaixo.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}} />
          <div className="absolute bottom-0 right-0 w-[64px] h-[64px] pointer-events-none z-[1]"
               style={{backgroundImage: 'url(/dirbaixo.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}} />
        </div>
        
        <div className="w-full md:w-1/3 relative">
          <img src="/cormedix-home.png" alt="Homepage do projeto CorMedix" className="w-full h-full object-cover min-h-[200px] md:min-h-0"/>
          
          <div className="absolute top-0 left-0 w-[64px] h-[64px] pointer-events-none z-[1]"
               style={{backgroundImage: 'url(/esqtopo.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}} />
          <div className="absolute top-0 right-0 w-[64px] h-[64px] pointer-events-none z-[1]"
               style={{backgroundImage: 'url(/dirtopo.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}} />
          <div className="absolute bottom-0 left-0 w-[64px] h-[64px] pointer-events-none z-[1]"
               style={{backgroundImage: 'url(/esqbaixo.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}} />
          <div className="absolute bottom-0 right-0 w-[64px] h-[64px] pointer-events-none z-[1]"
               style={{backgroundImage: 'url(/dirbaixo.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}} />
        </div>
        
      </div>
      <div className="h-24"></div>
    </div>
  )
}