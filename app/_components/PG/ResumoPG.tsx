export function ResumoPG () {
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
              <p className="text-[1.2rem]">A expansão da plataforma P&G Contigo para a América Latina foi iniciada sem um design system localizado ou arquivos-fonte, criando um alto risco de inconsistência, retrabalho e fragmentação da experiência para as equipes de múltiplos países.</p>
            </div>

           
            
            <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
              <div className="text-[1rem] leading-[100%] text-[#a3a3a3] font-semibold uppercase">MINHA ATUAÇÃO</div>
              <p className="text-[1.2rem]">Começando com uma pequena task, tomei a iniciativa de fazer a engenharia reversa do design europeu, criar e documentar os componentes por completo para o LATAM no Figma. Apresentei e validei este sistema com a equipe global, estabelecendo-o como o padrão oficial para a região.</p>
            </div>
            
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
              <div className="text-[1rem] leading-[100%] text-[#a3a3a3] font-semibold uppercase">RESULTADOS</div>
              <p className="text-[1.2rem]">A documentação acelerou o trabalho de todos os designers subsequentes na região. Minha proatividade e a qualidade da entrega me levaram a me tornar a referência de design para o LATAM, revisando o trabalho de outros e sendo convidado a conceituar uma nova versão de toda a plataforma.</p>
              <div className="w-full h-px bg-[#FF6B00]"></div>
              <p className="text-[1.2rem]">Reestruturação de +10 anos de conteúdo legado com nova arquitetura e usabilidade.</p>
              <div className="w-full h-px bg-[#FF6B00]"></div>
              <p className="text-[1.2rem]">Plataforma escalável em WordPress e treinamento entregue superando restrições de prazos.</p>
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