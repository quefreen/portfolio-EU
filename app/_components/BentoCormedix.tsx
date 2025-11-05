import Image from 'next/image';

export function BentoCormedix() {
  return (
    <div className="w-full py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-4 md:px-8 lg:px-12">
        <h4 className="text-[1rem] leading-[100%] text-[#a3a3a3] font-semibold uppercase mx-16" style={{ fontFamily: 'var(--font-schibstedGrotesk), sans-serif' }}>
          ENTREGAS
        </h4>
        <div className="h-8"></div>
        
        {/* Moldura branca (mantida original) */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6">

          {/* CARD 1 */}
          <div className="md:col-span-2 md:row-span-2 bg-white h-[520px] md:h-auto md:min-h-0 flex items-center justify-center relative">
            <div className="flex flex-col p-12 sm:p-16 md:p-16">
            <img src="/investidor.jpg" alt="Ícone de investidores" className="object-contain w-full  rounded-2xl"/>
            <div>
            <div className="h-8"></div>
            <h4
          className="text-[1rem] leading-[100%] text-[#131415] font-semibold"
          style={{ fontFamily: 'var(--font-schibstedGrotesk), sans-serif' }}
        >
          Investidores
        </h4>
            <div className="h-4"></div>
            <p className="text-[1rem]">Um hub focado em clareza, transparência e acesso fácil aos relatórios (SEC Filings).</p></div></div>
            <div
              className="absolute top-0 left-0 w-[64px] h-[64px] pointer-events-none z-[1]"
              style={{ backgroundImage: 'url(/esqtopo.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
            />
            <div
              className="absolute top-0 right-0 w-[64px] h-[64px] pointer-events-none z-[1]"
              style={{ backgroundImage: 'url(/dirtopo.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
            />
            <div
              className="absolute bottom-0 left-0 w-[64px] h-[64px] pointer-events-none z-[1]"
              style={{ backgroundImage: 'url(/esqbaixo.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
            />
            <div
              className="absolute bottom-0 right-0 w-[64px] h-[64px] pointer-events-none z-[1]"
              style={{ backgroundImage: 'url(/dirbaixo.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
            />
          </div>

      {/* CARD 2 */}
{/* Mudei 'items-center' para 'items-end'.
  'justify-center' foi mantido para o bloco de texto continuar centralizado horizontalmente.
*/}
<div className="md:col-span-2 bg-blue-200 h-[520px] md:h-auto flex items-end relative overflow-hidden">
  
  {/* IMAGEM DE BACKGROUND (igual a antes) */}
  <img 
    src="/molecula.jpg" 
    alt="Background de Moléculas" 
    className="absolute inset-0 w-full h-full object-cover z-0" 
  />

  {/* CONTEÚDO DO TEXTO (igual a antes) */}
  {/* Este bloco agora será 'empurrado' para baixo pelo 'items-end' do pai */}
  <div className="relative z-10 flex flex-col text-left"> 
    <div className="h-4"></div>
    <div className="p-12 sm:p-16 md:p-16">
    <h4
      className="text-[1rem] leading-[100%] text-white font-semibold"
      style={{ fontFamily: 'var(--font-schibstedGrotesk), sans-serif' }}
    >
      Inovação 3D Interativa
    </h4>
    <div className="h-4"></div>
    <p className="text-white text-[1rem] text-left">Protótipo da molécula do DefenCath em Spline para comunicar a ciência complexa do produto.</p>
  </div>

</div>
            
            
            <div
              className="absolute top-0 left-0 w-[64px] h-[64px] pointer-events-none z-[1]"
              style={{ backgroundImage: 'url(/esqtopo.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
            />
            <div
              className="absolute top-0 right-0 w-[64px] h-[64px] pointer-events-none z-[1]"
              style={{ backgroundImage: 'url(/dirtopo.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
            />
            <div
              className="absolute bottom-0 left-0 w-[64px] h-[64px] pointer-events-none z-[1]"
              style={{ backgroundImage: 'url(/esqbaixo.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
            />
            <div
              className="absolute bottom-0 right-0 w-[64px] h-[64px] pointer-events-none z-[1]"
              style={{ backgroundImage: 'url(/dirbaixo.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
            />
          
          </div>

          {/* CARD 3 */}
          <div className="bg-white h-[400px] md:h-auto flex items-center justify-center relative">
            <div className="flex flex-col items-center">
            <img src="/wordpress.svg" alt="Ícone de investidores" className="w-32 h-32 object-contain"/>
                    <div className="h-8"></div>
                    <h4
              className="text-[1rem] leading-[100%] text-[#131415] font-semibold"
              style={{ fontFamily: 'var(--font-schibstedGrotesk), sans-serif' }}
            >
              Wordpress
            </h4></div>
            <div
              className="absolute top-0 left-0 w-[64px] h-[64px] pointer-events-none z-[1]"
              style={{ backgroundImage: 'url(/esqtopo.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
            />
            <div
              className="absolute top-0 right-0 w-[64px] h-[64px] pointer-events-none z-[1]"
              style={{ backgroundImage: 'url(/dirtopo.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
            />
            <div
              className="absolute bottom-0 left-0 w-[64px] h-[64px] pointer-events-none z-[1]"
              style={{ backgroundImage: 'url(/esqbaixo.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
            />
            <div
              className="absolute bottom-0 right-0 w-[64px] h-[64px] pointer-events-none z-[1]"
              style={{ backgroundImage: 'url(/dirbaixo.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
            />
            
          </div>

          {/* CARD 4 */}
          <div className="bg-white h-[400px] md:h-auto flex items-center justify-center relative">
            <div className="flex flex-col items-center">
            <img src="/handoff.svg" alt="Ícone de investidores" className="w-32 h-32 object-contain"/>
                 <div className="h-8"></div>
                    <h4
              className="text-[1rem] leading-[100%] text-[#131415] font-semibold"
              style={{ fontFamily: 'var(--font-schibstedGrotesk), sans-serif' }}
            >
              Handoff
            </h4>
            </div>
            <div
              className="absolute top-0 left-0 w-[64px] h-[64px] pointer-events-none z-[1]"
              style={{ backgroundImage: 'url(/esqtopo.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
            />
            <div
              className="absolute top-0 right-0 w-[64px] h-[64px] pointer-events-none z-[1]"
              style={{ backgroundImage: 'url(/dirtopo.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
            />
            <div
              className="absolute bottom-0 left-0 w-[64px] h-[64px] pointer-events-none z-[1]"
              style={{ backgroundImage: 'url(/esqbaixo.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
            />
            <div
              className="absolute bottom-0 right-0 w-[64px] h-[64px] pointer-events-none z-[1]"
              style={{ backgroundImage: 'url(/dirbaixo.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
            />
            
          </div>
        </div>

       <div className="w-full bg-white relative mt-6 rounded-2xl">
  <div className="p-12 sm:p-16 md:p-16">
    <img
      src="/assets-cormedix.jpg"
      alt="Background de Moléculas"
      className="block w-full h-auto object-contain"
      loading="lazy"
    />
  </div>

          <div
            className="absolute top-0 left-0 w-[64px] h-[64px] pointer-events-none z-[1]"
            style={{ backgroundImage: 'url(/esqtopo.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
          />
          <div
            className="absolute top-0 right-0 w-[64px] h-[64px] pointer-events-none z-[1]"
            style={{ backgroundImage: 'url(/dirtopo.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
          />
          <div
            className="absolute bottom-0 left-0 w-[64px] h-[64px] pointer-events-none z-[1]"
            style={{ backgroundImage: 'url(/esqbaixo.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
          />
          <div
            className="absolute bottom-0 right-0 w-[64px] h-[64px] pointer-events-none z-[1]"
            style={{ backgroundImage: 'url(/dirbaixo.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
          />
         
        </div>
      </div>

 


    </div>
  );
}
