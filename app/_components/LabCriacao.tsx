import Image from "next/image"

export function LabCriacao() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-4 md:px-8 lg:px-12 flex flex-col gap-12">
        {/* HEADER */}
        <div className=""><div className="h-12"></div>
          <h2
            className="text-[2.1rem] sm:text-[2.4rem] md:text-[2.8rem] leading-[1.15] text-[#131415] font-medium mx-0 md:mx-16"
            style={{ fontFamily: "var(--font-schibstedGrotesk), sans-serif" }}
          >
            Laboratório de criação
          </h2>
          <p
            className="text-base sm:text-lg leading-6 mx-0 md:mx-16 text-[#3F3F46]"
            style={{ fontFamily: "var(--font-schibstedGrotesk), sans-serif" }}
          >
            Aqui você encontra alguns dos projetos que fiz como diretor de arte:
            logos, campanhas, 3Ds e embalagens.
          </p>
        </div>

        <div className="relative flex flex-col gap-16 md:gap-20">
          {/* HERO 1 */}
          <div className="relative w-full aspect-[1030/480]  overflow-hidden">

            <div className=" max-w-8xl h-[520px] bg-white overflow-hidden">
          <div
            className="absolute top-0 left-0 w-[96px] h-[960px] pointer-events-none z-[1]"
            style={{
              backgroundImage: 'url(/esqtopo.svg)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <div
            className="absolute top-0 right-0 w-[96px] h-[96px] pointer-events-none z-[1]"
            style={{
              backgroundImage: 'url(/dirtopo.svg)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-[96px] h-[96px] pointer-events-none z-[1]"
            style={{
              backgroundImage: 'url(/esqbaixo.svg)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <div
            className="absolute bottom-0 right-0 w-[96px] h-[96px] pointer-events-none z-[1]"
            style={{
              backgroundImage: 'url(/dirbaixo.svg)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          />
</div>

            <Image
              src="/lab-hero-1.jpg"
              alt="Laboratório de criação – destaque"
              fill
              className="object-cover"
            />
          </div>

          {/* TEXTO + IMG 1 */}
         <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 max-w-[900px] mx-auto">


            
  <p
    className="md:max-w-sm text-lg md:text-xl font-normal leading-7 text-[#27272A] text-center md:text-left"
    style={{
      fontFamily: "var(--font-schibstedGrotesk), sans-serif",
    }}
  >
    Iniciei minha carreira criativa <br/> aos 15 anos de idade.
    <br />
    <br />
    Nos tempos de escola eu era <br/> o amigo que sabia instalar<br/>
    impressoras, formatar<br/> computadores e arrumar<br/> drivers de som.
  </p>

  <div className="relative w-full md:w-[392px] aspect-[392/320] overflow-hidden flex-shrink-0">

        <div className=" max-w-8xl h-[520px] bg-white overflow-hidden">
          <div
            className="absolute top-0 left-0 w-[64px] h-[64px] pointer-events-none z-[1]"
            style={{
              backgroundImage: 'url(/esqtopo.svg)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <div
            className="absolute top-0 right-0 w-[64px] h-[64px] pointer-events-none z-[1]"
            style={{
              backgroundImage: 'url(/dirtopo.svg)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-[64px] h-[64px] pointer-events-none z-[1]"
            style={{
              backgroundImage: 'url(/esqbaixo.svg)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <div
            className="absolute bottom-0 right-0 w-[64px] h-[64px] pointer-events-none z-[1]"
            style={{
              backgroundImage: 'url(/dirbaixo.svg)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          />
</div>
    <Image
      src="/lab-side-1.jpg"
      alt="Primeiros trabalhos criativos"
      fill
      className="object-cover"
    />
  </div>
</div>


          {/* HERO 2 */}
         <div className="relative w-full aspect-[1030/575] overflow-hidden bg-black">
  {/* imagem de fundo */}
  <Image
    src="/lab-hero-2.jpg"
    alt="Projetos de direção de arte"
    fill
    className="object-cover scale-[1.02]" // leve zoom pra matar o filetinho
  />

  {/* moldura 4 cantos */}
  <div
    className="absolute top-0 left-0 w-[96px] h-[96px] pointer-events-none z-[1]"
    style={{
      backgroundImage: "url(/esqtopo.svg)",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
    }}
  />
  <div
    className="absolute top-0 right-0 w-[96px] h-[96px] pointer-events-none z-[1]"
    style={{
      backgroundImage: "url(/dirtopo.svg)",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
    }}
  />
  <div
    className="absolute bottom-0 left-0 w-[96px] h-[96px] pointer-events-none z-[1]"
    style={{
      backgroundImage: "url(/esqbaixo.svg)",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
    }}
  />
  <div
    className="absolute bottom-0 right-0 w-[96px] h-[96px] pointer-events-none z-[1]"
    style={{
      backgroundImage: "url(/dirbaixo.svg)",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
    }}
  />
</div>

          {/* TEXTO + IMG 2 (invertido) */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 max-w-[900px] mx-auto">
            
  <div className="relative w-full md:w-[392px] aspect-[392/320] overflow-hidden flex-shrink-0">
        <div className=" max-w-8xl h-[520px] bg-white overflow-hidden">
          <div
            className="absolute top-0 left-0 w-[64px] h-[64px] pointer-events-none z-[1]"
            style={{
              backgroundImage: 'url(/esqtopo.svg)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <div
            className="absolute top-0 right-0 w-[64px] h-[64px] pointer-events-none z-[1]"
            style={{
              backgroundImage: 'url(/dirtopo.svg)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-[64px] h-[64px] pointer-events-none z-[1]"
            style={{
              backgroundImage: 'url(/esqbaixo.svg)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <div
            className="absolute bottom-0 right-0 w-[64px] h-[64px] pointer-events-none z-[1]"
            style={{
              backgroundImage: 'url(/dirbaixo.svg)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          />
</div>
    <Image
      src="/lab-side-2.jpg"
      alt="Sonho de ser Web Master"
      fill
      className="object-cover"
    />
  </div>

  <p
    className="md:max-w-sm text-lg md:text-xl font-normal leading-7 text-[#27272A] text-center md:text-left"
    style={{
      fontFamily: "var(--font-schibstedGrotesk), sans-serif",
    }}
  >
    Aos 18 anos meu sonho era ser um Web Master. Dominar completamente
    o Dreamweaver e fazer grandes projetos com ActionScript 2.0.
  </p>
</div>


          {/* GRID DE PEÇAS */}
          <div className="flex flex-col gap-10">
            {/* wide */}
            <div className="relative w-full aspect-[1012/336]  overflow-hidden">
                  <div className=" max-w-8xl h-[520px] bg-white overflow-hidden">
          <div
            className="absolute top-0 left-0 w-[96px] h-[96px] pointer-events-none z-[1]"
            style={{
              backgroundImage: 'url(/esqtopo.svg)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <div
            className="absolute top-0 right-0 w-[96px] h-[96px] pointer-events-none z-[1]"
            style={{
              backgroundImage: 'url(/dirtopo.svg)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-[96px] h-[96px] pointer-events-none z-[1]"
            style={{
              backgroundImage: 'url(/esqbaixo.svg)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <div
            className="absolute bottom-0 right-0 w-[96px] h-[96px] pointer-events-none z-[1]"
            style={{
              backgroundImage: 'url(/dirbaixo.svg)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          />
</div>
              <Image
                src="/lab-wide-1.jpg"
                alt="Peça de campanha 1"
                fill
                className="object-cover"
              />
            </div>

            {/* XADREZ - linha 1 */}
            <div className="flex flex-col md:flex-row gap-8">
              <div className="relative w-full md:w-1/2 aspect-[600/477]  overflow-hidden">
                    <div className=" max-w-8xl h-[520px] bg-white overflow-hidden">
          <div
            className="absolute top-0 left-0 w-[96px] h-[96px] pointer-events-none z-[1]"
            style={{
              backgroundImage: 'url(/esqtopo.svg)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <div
            className="absolute top-0 right-0 w-[96px] h-[96px] pointer-events-none z-[1]"
            style={{
              backgroundImage: 'url(/dirtopo.svg)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-[96px] h-[96px] pointer-events-none z-[1]"
            style={{
              backgroundImage: 'url(/esqbaixo.svg)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <div
            className="absolute bottom-0 right-0 w-[96px] h-[96px] pointer-events-none z-[1]"
            style={{
              backgroundImage: 'url(/dirbaixo.svg)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          />
</div>
                <Image
                  src="/xadreza.jpg"
                  alt="Peça xadrez A"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full md:w-1/2 aspect-[392/477]  overflow-hidden">
                    <div className=" max-w-8xl h-[520px] bg-white overflow-hidden">
          <div
            className="absolute top-0 left-0 w-[96px] h-[96px] pointer-events-none z-[1]"
            style={{
              backgroundImage: 'url(/esqtopo.svg)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <div
            className="absolute top-0 right-0 w-[96px] h-[96px] pointer-events-none z-[1]"
            style={{
              backgroundImage: 'url(/dirtopo.svg)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-[96px] h-[96px] pointer-events-none z-[1]"
            style={{
              backgroundImage: 'url(/esqbaixo.svg)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <div
            className="absolute bottom-0 right-0 w-[96px] h-[96px] pointer-events-none z-[1]"
            style={{
              backgroundImage: 'url(/dirbaixo.svg)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          />
</div>
                <Image
                  src="/xadrezb.jpg"
                  alt="Peça xadrez B"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* VINHO - linha 2 */}
            <div className="flex flex-col md:flex-row gap-8">
              <div className="relative w-full md:w-1/2 aspect-[392/478] overflow-hidden">
                    <div className=" max-w-8xl h-[520px] bg-white overflow-hidden">
          <div
            className="absolute top-0 left-0 w-[96px] h-[96px] pointer-events-none z-[1]"
            style={{
              backgroundImage: 'url(/esqtopo.svg)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <div
            className="absolute top-0 right-0 w-[96px] h-[96px] pointer-events-none z-[1]"
            style={{
              backgroundImage: 'url(/dirtopo.svg)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-[96px] h-[96px] pointer-events-none z-[1]"
            style={{
              backgroundImage: 'url(/esqbaixo.svg)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <div
            className="absolute bottom-0 right-0 w-[96px] h-[96px] pointer-events-none z-[1]"
            style={{
              backgroundImage: 'url(/dirbaixo.svg)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          />
</div>
                <Image
                  src="/vinhoa.jpg"
                  alt="Peça vinho A"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full md:w-1/2 aspect-[601/478] overflow-hidden">
                    <div className=" max-w-8xl h-[520px] bg-white overflow-hidden">
          <div
            className="absolute top-0 left-0 w-[96px] h-[96px] pointer-events-none z-[1]"
            style={{
              backgroundImage: 'url(/esqtopo.svg)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <div
            className="absolute top-0 right-0 w-[96px] h-[96px] pointer-events-none z-[1]"
            style={{
              backgroundImage: 'url(/dirtopo.svg)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-[96px] h-[96px] pointer-events-none z-[1]"
            style={{
              backgroundImage: 'url(/esqbaixo.svg)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <div
            className="absolute bottom-0 right-0 w-[96px] h-[96px] pointer-events-none z-[1]"
            style={{
              backgroundImage: 'url(/dirbaixo.svg)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          />
</div>
                <Image
                  src="/vinhob.jpg"
                  alt="Peça vinho B"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
          </div>
          <div className="h-24"></div>

          {/* FECHO DE TEXTO */}
          <p
  className="
    max-w-[818px] 
    mx-auto 
    text-center md:text-left 
    text-lg md:text-xl 
    font-normal leading-7 
    text-[#27272A]
  "
  style={{
    fontFamily: "var(--font-schibstedGrotesk), sans-serif",
  }}
>
  Minha vida mudou quando ganhei uma bolsa de estudos <br/>na melhor escola
  de publicidade do mundo, a Miami Ad School.
</p>

        </div>
        <div className="h-6"></div>
      </div>
    </section>
  )
}
