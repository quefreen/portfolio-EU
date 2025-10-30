export function ResumoPD () {
  return (
    <div>
    
      <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-4 md:px-8 lg:px-12 flex flex-col md:flex-row gap-6 ">
        
        
        <div className="relative bg-white overflow-hidden w-full md:w-2/3">
          
          <div className="w-full flex flex-col justify-start items-start gap-10 p-12 sm:p-16 md:p-16 ">
            <div className="self-stretch justify-start text-black text-xl font-medium" style={{ fontFamily: 'var(--font-schibstedGrotesk), sans-serif' }}>
              Resumo Rápido
            </div>
            
            <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
              <div className="text-[1rem] leading-[100%] text-[#a3a3a3] font-semibold uppercase">PROJETO</div>
              <p className="text-[1.2rem]">Redesenho completo da plataforma operacional legada "PD Point" da farmacêutica MSD, para resolver problemas críticos de usabilidade e otimizar o fluxo logístico de exames para 3 perfis de usuário distintos.</p>
            </div>

            <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
              <div className="text-[1rem] leading-[100%] text-[#a3a3a3] font-semibold uppercase">MINHA ATUAÇÃO</div>
              <p className="text-[1.2rem]">Liderança de Design (estratégia, UX, UI e inovação), responsável pela pesquisa com usuários, mapeamento de jornadas complexas e criação de um Design System escalável para a nova plataforma.</p>
            </div>
            
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
              <div className="text-[1rem] leading-[100%] text-[#a3a3a3] font-semibold uppercase">RESULTADOS</div>
              <p className="text-[1.2rem]">Redução de mais de 80% nos erros de preenchimento do sistema, validada através de testes e entrevistas com os usuários finais.</p>
              <div className="w-full h-px bg-[#FF6B00]"></div>
              <p className="text-[1.2rem]">Criação de um Design System e documentação com com 30 telas-chave que permitirama implementação de uma plataforma complexa de forma consistente, ágil e escalável.</p>
             
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
      <div className="h-16"></div>
    </div>
  )
}