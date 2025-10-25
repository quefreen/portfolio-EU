import Spline from "@splinetool/react-spline"

export function RetrospectoCormedix () {
 return (


<div className="max-w-6xl mx-auto w-full mb-2 md:mb-2 lg:mb-2 px-2 lg:px-2 bg-blue-600">
    <div> <div className="">
      <div className="h-8"></div>
      <h4 className="mx-16 text-[1rem] leading-[100%] text-[#a3a3a3] font-semibold" style={{ fontFamily: 'var(--font-schibstedGrotesk), sans-serif' }}>
  DESAFIO
      </h4>

      <div className="h-2"></div>
      <h2 className="mx-16">Uma experiência digital desalinhada com a estratégia de negócio.</h2>
      <div className="h-4"></div>
      <p className="mx-16">A plataforma antiga não apenas falhava em transmitir a imagem de uma biofarmacêutica inovadora, como também criava barreiras diretas para seus públicos mais importantes:</p>
      <div className="h-8"></div></div></div>
    
    {/* --- CONTAINER PAI ÚNICO ---
  - Este é o único 'div' que deve ter 'flex' e 'md:flex-row'.
  - Ele agora envolve AMBOS os seus cards.
*/}
<div className="flex flex-col md:flex-row gap-6 w-full">
  
  {/* --- Card 1 (Filho 1) ---
    - Note que eu limpei as classes duplicadas:
      'w-full bg-amber-400 w-full md:w-1/2'
      virou
      'w-full md:w-1/2 bg-amber-400'
    - 'w-full' é para mobile (quando o pai é 'flex-col').
    - 'md:w-1/2' é para desktop (quando o pai é 'md:flex-row').
  */}
  <div className="w-full md:w-1/2 bg-white relative p-16">
    <div className="w-full flex flex-col justify-start items-start gap-10">
      
      <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
        <img src="/investor.svg"  alt="Descrição significativa da imagem"  className="object-cover min-h-[200px] md:min-h-0"/>
        <h5>Investidores</h5>
        <p>O acesso a relatórios financeiros e projeções de crescimento era confuso, minando a confiança em um momento de alta sensibilidade de mercado.</p>
      </div>
    </div>
    
    {/* SVGs do Card 1 */}
    <div className="absolute top-0 left-0 w-[64px] h-[64px] pointer-events-none z-[1]"
         style={{backgroundImage: 'url(/esqtopo.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}} />
    <div className="absolute top-0 right-0 w-[64px] h-[64px] pointer-events-none z-[1]"
         style={{backgroundImage: 'url(/dirtopo.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}} />
    <div className="absolute bottom-0 left-0 w-[64px] h-[64px] pointer-events-none z-[1]"
         style={{backgroundImage: 'url(/esqbaixo.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}} />
    <div className="absolute bottom-0 right-0 w-[64px] h-[64px] pointer-events-none z-[1]"
         style={{backgroundImage: 'url(/dirbaixo.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}} />
  </div>
  
  {/* --- Card 2 (Filho 2) ---
    - Este é o SEGUNDO filho, agora DENTRO do mesmo container-pai.
    - Também limpei as classes duplicadas aqui.
  */}
  <div className="w-full md:w-1/2 bg-white relative p-16">
    <div className="w-full flex flex-col justify-start items-start gap-10">
      
      <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
        <img src="/medical.svg"  alt="Descrição significativa da imagem"  className="object-cover min-h-[200px] md:min-h-0"/>
         <h5>Comunidade médica</h5>
        <p>Localizar publicações científicas, dados clínicos e informações sobre o novo produto seria uma tarefa árdua, comprometendo a credibilidade e a adoção da solução.</p>
       
      </div>
    </div>
    
    {/* SVGs do Card 2 */}
    <div className="absolute top-0 left-0 w-[64px] h-[64px] pointer-events-none z-[1]"
         style={{backgroundImage: 'url(/esqtopo.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}} />
    <div className="absolute top-0 right-0 w-[64px] h-[64px] pointer-events-none z-[1]"
         style={{backgroundImage: 'url(/dirtopo.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}} />
    <div className="absolute bottom-0 left-0 w-[64px] h-[64px] pointer-events-none z-[1]"
         style={{backgroundImage: 'url(/esqbaixo.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}} />
    <div className="absolute bottom-0 right-0 w-[64px] h-[64px] pointer-events-none z-[1]"
         style={{backgroundImage: 'url(/dirbaixo.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}} />
  </div>

</div> {/* <-- Fim do CONTAINER PAI ÚNICO */}
    <div className="h-8"></div>
    <p className="mx-16">O desafio, portanto, não era apenas estético; tratava-se de uma necessidade estratégica de negócio, agravada por um conjunto complexo de restrições.</p>
    <div className="h-24"></div>
    </div>
    
    )
    }