import Image from "next/image";
import Link from "next/link"


export function Footerhome() {
  return (
    <div className="w-full pt-16 md:pt-24">
      <div className="relative h-[490px] w-full">
        {/* faixa preta em espaço negativo (mantida) */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[#131415] z-10" />

        {/* SVGs grandes externos */}
        <div
          className="absolute left-0 bottom-[95px] w-[150px] h-[150px] pointer-events-none z-20"
          style={{
            backgroundImage: "url(/esqtopo.svg)",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div
          className="absolute right-0 bottom-[95px] w-[150px] h-[150px] pointer-events-none z-20"
          style={{
            backgroundImage: "url(/dirtopo.svg)",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* conteúdo central */}
        <div className="absolute inset-0 z-20 max-w-[1400px] mx-auto w-full px-4 sm:px-4 md:px-8 lg:px-12">
          <h4
            className="text-[1rem] leading-[100%] text-[#131415] font-semibold uppercase mx-0 md:mx-16"
            style={{ fontFamily: "var(--font-schibstedGrotesk), sans-serif" }}
          >
            OUTROS PROJETOS
          </h4>

          <div className="h-4" />

          <div className="relative flex flex-col md:flex-row gap-6 w-full min-h-[320px]">
            {/* CARD 1 */}
     <div className="w-full md:w-1/2">
  <Link href="/rpgdosnoobs" className="block h-full cursor-grow">
    <div className="relative min-h-[420px] overflow-hidden group">
      {/* imagem */}
      <Image
        src="/rpg-thumb.jpg"
        alt="Projeto RPG dos Noobs"
        fill
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
      />

      {/* moldura 4 cantos do card */}
      <div
        className="absolute top-0 left-0 w-[96px] h-[96px] pointer-events-none z-[2]"
        style={{
          backgroundImage: "url(/esqtopo.svg)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div
        className="absolute top-0 right-0 w-[96px] h-[96px] pointer-events-none z-[2]"
        style={{
          backgroundImage: "url(/dirtopo.svg)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[96px] h-[96px] pointer-events-none z-[2]"
        style={{
          backgroundImage: "url(/esqbaixop.svg)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[96px] h-[96px] pointer-events-none z-[2]"
        style={{
          backgroundImage: "url(/dirbaixop.svg)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* conteúdo */}
      <div className="p-8 sm:p-10 md:p-14 relative z-[3]">
        <h3
          className="text-[1rem] font-medium text-white mb-4"
          style={{ fontFamily: "var(--font-schibstedGrotesk), sans-serif" }}
        >
          Podcast
        </h3>

        <p
          className="text-[2rem] sm:text-[2.2rem] md:text-[1.6rem] lg:text-[2.2rem] leading-[1.2] text-white"
          style={{ fontFamily: "var(--font-schibstedGrotesk), sans-serif" }}
        >
          RPG dos Noobs
          <br />
          <br />
        </p>
      </div>
    </div>
  </Link>
</div>


            

            {/* CARD 2 */}
            
             <div className="w-full hidden md:block md:w-1/2">
  <Link href="/nidavellir" className="block h-full cursor-grow">
    <div className="relative min-h-[420px] overflow-hidden group">
      {/* imagem */}
      <Image
        src="/nida-thumb.jpg"
        alt="Projeto Nidavellir"
        fill
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
      />

      {/* moldura 4 cantos do card */}
      <div
        className="absolute top-0 left-0 w-[96px] h-[96px] pointer-events-none z-[2]"
        style={{
          backgroundImage: "url(/esqtopo.svg)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div
        className="absolute top-0 right-0 w-[96px] h-[96px] pointer-events-none z-[2]"
        style={{
          backgroundImage: "url(/dirtopo.svg)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[96px] h-[96px] pointer-events-none z-[2]"
        style={{
          backgroundImage: "url(/esqbaixop.svg)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[96px] h-[96px] pointer-events-none z-[2]"
        style={{
          backgroundImage: "url(/dirbaixop.svg)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* conteúdo */}
      <div className="p-8 sm:p-10 md:p-14 relative z-[3]">
        <h3
          className="text-[1rem] font-medium text-white mb-4"
          style={{ fontFamily: "var(--font-schibstedGrotesk), sans-serif" }}
        >
          E-commerce
        </h3>

        <p
          className="text-[2rem] sm:text-[2.2rem] md:text-[1.6rem] lg:text-[2.2rem] leading-[1.2] text-white"
          style={{ fontFamily: "var(--font-schibstedGrotesk), sans-serif" }}
        >
          Nidavellir
          <br />
          <br />
        </p>
      </div>
    </div>
  </Link>
</div>

            </div>
        </div>
      </div>  
    </div>
  );
}
