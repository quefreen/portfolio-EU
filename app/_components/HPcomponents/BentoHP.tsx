export function BentoHP() {
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
          <div className="md:col-span-2 md:row-span-2 bg-amber-400 h-[400px] md:h-auto md:min-h-0 flex items-center justify-center relative">
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
          <div className="md:col-span-2 bg-blue-200 h-[400px] md:h-auto flex items-center justify-center rounded-lg relative">
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
            <span className="text-black">Card 2 (2x1)</span>
          </div>

          {/* CARD 3 */}
          <div className="bg-blue-950 h-[400px] md:h-auto md:aspect-square flex items-center justify-center relative">
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
            <span className="text-black">Card 3 (1x1)</span>
          </div>

          {/* CARD 4 */}
          <div className="bg-cyan-200 h-[400px] md:h-auto md:aspect-square flex items-center justify-center relative">
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
            <span className="text-black">Card 4 (1x1)</span>
          </div>
        </div>

        <div className="w-full bg-emerald-700 p-10 mt-6 relative min-h-[400px]">
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
          <h2 className="text-xl font-bold text-gray-800">
            Esta é a sessão retangular
          </h2>
          <p className="text-gray-600 mt-2">
            Você pode adicionar qualquer conteúdo aqui.
          </p>
        </div>
      </div>
    </div>
  );
}
