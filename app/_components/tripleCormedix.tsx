export function TripleCormedix () {
  return (
    <div className="w-full">
      <div className="h-8"></div>
      
      <div className="max-w-[1280px] mx-auto w-full px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="flex flex-col gap-y-2">
          <h4 className="text-[1rem] leading-[100%] text-[#a3a3a3] font-semibold uppercase mx-0 md:mx-16" style={{ fontFamily: 'var(--font-schibstedGrotesk), sans-serif' }}>
            OBJETIVOS
          </h4>
          <h2 className="mx-0 md:mx-16">A missão: transformar desafios em resultados.</h2>
        </div>
        <div className="h-4"></div>
        <p className="mx-0 md:mx-16">Fui encarregado de liderar o redesign do website com três objetivos centrais:</p>
      </div>

      <div className="h-8"></div>

      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-6 px-4 sm:px-8 md:px-12 lg:px-20">
        
        <div className="w-full md:w-1/3 bg-white relative p-12 sm:p-16 md:p-16">
          <div className="w-full flex flex-col justify-start items-start gap-4">
            <img src="/investor.svg" alt="Ícone de investidores" className="w-12 h-12 object-contain"/>
            <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
              <h5 className="text-xl font-medium text-[#131415]">Restabelecer a confiança do mercado</h5>
              <p>atrair e reter investidores.</p>
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
        
        <div className="w-full md:w-1/3 bg-white relative p-12 sm:p-16 md:p-16">
          <div className="w-full flex flex-col justify-start items-start gap-4">
            <img src="/medical.svg" alt="Ícone da comunidade médica" className="w-12 h-12 object-contain"/>
            <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
              <h5 className="text-xl font-medium text-[#131415]">Educar e engajar a comunidade médica</h5>
              <p>fonte confiável sobre pesquisas.</p>
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

        <div className="w-full md:w-1/3 bg-white relative p-12 sm:p-16 md:p-16">
          <div className="w-full flex flex-col justify-start items-start gap-4">
            <img src="/investor.svg" alt="Ícone de lançamento" className="w-12 h-12 object-contain"/>
            <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
              <h5 className="text-xl font-medium text-[#131415]">Construir a base para o lançamento</h5>
              <p>sustentação para marketing e comunicação.</p>
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

      </div>
      
      <div className="h-8"></div>
      
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 md:px-12 lg:px-20">
        <h4 className="text-[1rem] leading-[100%] text-[#a3a3a3] font-semibold uppercase mx-0 md:mx-16" style={{ fontFamily: 'var(--font-schibstedGrotesk), sans-serif' }}>
          RESTRIÇÕES
        </h4>
        <div className="h-2"></div>
        <p className="mx-0 md:mx-16">Legal e de conteúdo: era obrigatório preservar integralmente o histórico de informações do site.</p>
      </div>
      
    
    </div>
  )
}