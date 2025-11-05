export function DualPG () {
  return (
    <div className="w-full">
      
      
      <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-4 md:px-8 lg:px-12">
        <div className="flex flex-col gap-y-2 ">
          <h4 className="text-[1rem] leading-[100%] text-[#a3a3a3] font-semibold uppercase mx-0 md:mx-16" style={{ fontFamily: 'var(--font-schibstedGrotesk), sans-serif' }}>
            DESAFIO
          </h4>
          <h2 className="mx-0 md:mx-16">Construindo em Território Desconhecido.</h2>
        </div>
        <div className="h-4"></div>
        <p className="mx-0 md:mx-16 leading-8 ">A complexidade de um time global se manifestou rapidamente em dois grandes desafios para a equipe de design do LATAM.</p>
      </div>

      <div className="h-16"></div>
      
      <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-4 md:px-8 lg:px-12 flex flex-col md:flex-row gap-6">
        
        <div className="w-full md:w-1/2 bg-white relative p-12 sm:p-16 md:p-16">
          <div className="w-full flex flex-col justify-start items-start gap-4">
            <img src="/investor.svg" alt="Ícone de investidores" className="w-12 h-12 object-contain"/>
            <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
              <h5 className="text-xl font-medium text-[#131415] leading-8 ">A Lacuna de Recursos</h5>
              <p>O projeto no LATAM começou sem nenhum arquivo-fonte ou documentação de design da Europa. A tarefa inicial era criar layouts baseando-se apenas na observação de sites europeus já no ar, um processo lento, ineficiente e propenso a inconsistências.</p>
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
        
        <div className="w-full md:w-1/2 bg-white relative p-12 sm:p-16 md:p-16">
          <div className="w-full flex flex-col justify-start items-start gap-4">
            <img src="/medical.svg" alt="Ícone da comunidade médica" className="w-12 h-12 object-contain"/>
            <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
              <h5 className="text-xl font-medium text-[#131415]">O Risco da fragmentação</h5>
              <p>Com a iminente entrada de designers de múltiplos países (Colômbia, México, Argentina, etc.), havia um risco enorme de cada um criar seu próprio padrão por falta de um guia, resultando em uma experiência fragmentada e um pesadelo de manutenção.</p>
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

      <div className="h-16"></div>
      
      
    </div>
  )
}