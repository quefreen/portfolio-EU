"use client"

import Link from "next/link"
import { ReactNode } from "react"

// Small utility to merge class names
function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ")
}

// Generic Bento card with consistent padding/hover/focus styles
function BentoCard({
  className,
  children,
  href,
  style,
}: {
  className?: string
  children: ReactNode
  href?: string
  style?: React.CSSProperties
}) {
  const base = cn(
    "group relative bg-white",
    "overflow-hidden",
    className
  )
  if (href) {
    return (
      <Link href={href} className={base} style={style}>
        {children}
      </Link>
    )
  }
  return <div className={base} style={style}>{children}</div>
}

export default function BentoHome() {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-4 md:px-8 lg:px-12">
      <div className="">
        <h4
          className="text-[1rem] leading-[100%] text-[#999] font-semibold px-4 sm:px-4 md:px-4 lg:px-16"
          style={{ fontFamily: 'var(--font-schibstedGrotesk), sans-serif' }}
        >
          PROJETOS
        </h4>
        <div className="h-8" />

        {/* Grid com 3 colunas */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          
          {/* ========== COLUNA 1 ========== */}
          <div className="flex flex-col gap-6 lg:col-span-4">
            
            {/* Card 1 - Large (480px) */}
            <BentoCard className="card-1" style={{ height: "240px" }}>
  <style
    dangerouslySetInnerHTML={{
      __html: `
        @media (min-width: 1024px) {
          .card-1 { height: 480px !important; }
        }
      `,
    }}
  />

  <Link href="/cormedix" className="block h-full">
    <div className="relative h-full flex flex-col justify-between rounded-[40px] bg-white shadow-sm transition-colors duration-300 group-hover:bg-[#016FAD]">
      {/* Hover overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-[1]"
        style={{
          backgroundImage: "url(/hovermolecula.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Corner SVGs */}
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
          backgroundImage: "url(/esqbaixo.svg)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[96px] h-[96px] pointer-events-none z-[2]"
        style={{
          backgroundImage: "url(/dirbaixo.svg)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Conteúdo (UPDATED) */}
      <div className="p-8 sm:p-10 md:p-14 relative z-[3]">
        <p className="text-sm font-semibold text-[#999] transition-colors duration-300 group-hover:text-white/80 font-bricolageGrotesque">
          ABOUT ME
        </p>

        <p className="mt-2 text-2xl font-semibold leading-[1.15] text-[#131415] transition-colors duration-300 group-hover:text-white font-bricolageGrotesque">
          A creative generalist
          <br />
          and problem-solver
        </p>

        <p className="mt-1 text-2xl leading-[1.15] text-[#131415] transition-colors duration-300 group-hover:text-white font-bricolageGrotesque">
          skilled in designing seamless workflows and structuring complex
          information.
        </p>
      </div>

      {/* Rodapé com os SVGs (UPDATED) */}
      <div className="px-8 sm:px-10 md:px-14 pb-10 relative z-[3]">
        <div className="relative w-[147px] h-[33px]">
          <svg
            width="92"
            height="38"
            viewBox="0 0 92 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[87px] h-[33px] absolute left-0 top-0"
          >
            <path
              d="M2 10.2815C2 10.3676 2 10.4538 2.72325 14.8467C3.44649 19.2396 4.89298 27.9367 5.76503 31.8981C6.63707 35.8595 6.89084 34.8217 7.15231 33.3357C7.41378 31.8497 7.67527 29.9471 7.94361 26.6489C8.21196 23.3507 8.47924 18.7146 8.88962 15.3709C9.54022 10.07 10.7341 7.76848 11.4997 7.53002C11.9398 7.39296 12.4797 8.34331 14.122 13.2496C15.7642 18.1558 18.4911 27.2755 19.8284 31.7863C21.1658 36.2972 21.031 35.9229 20.2057 34.5078C17.9325 30.6102 14.8355 26.3861 11.4494 22.8968C9.64691 21.0394 7.2374 19.4557 5.99494 18.7914C4.75247 18.127 4.63853 18.545 4.61034 19.2585C4.46858 22.8476 5.53384 25.0383 6.37859 25.7058C7.35331 26.4761 11.6201 23.294 17.1432 19.0881C23.7404 14.0643 25.1896 9.2705 25.5315 8.73063C25.8078 8.29427 25.131 11.0787 24.8536 15.9464C24.6504 19.5113 24.7593 25.3172 24.9493 27.78C25.1393 30.2427 25.5194 29.191 25.8562 28.4135C26.4101 27.1348 27.0945 26.3495 27.8067 26.0184C28.6021 25.6485 29.4326 27.6425 30.0248 29.2661C30.4052 30.3091 30.3364 31.0739 30.089 31.6981C29.3629 33.5303 26.7132 32.2603 25.8617 31.9465C25.4699 31.8021 25.2065 31.5747 26.1451 31.8071C32.3604 33.3459 36.7951 33.2869 39.7222 32.1291C40.6165 31.7753 40.8712 30.5223 41.207 30.0432C41.7196 29.3119 41.9 32.1868 42.7318 33.122C43.6407 34.1439 44.7792 34.3672 45.464 34.381C46.2328 34.3964 46.9604 33.8334 47.6068 33.0609C49.2804 31.0607 48.7394 26.6507 47.6221 22.5817C47.276 21.3215 46.2834 20.954 45.597 20.7703C44.8595 20.5728 43.4965 21.0068 41.8536 21.6918C40.5133 22.2508 39.9908 23.6394 39.6777 24.9241C39.3546 26.2499 39.8354 27.6946 40.5381 28.9942C41.2592 30.3278 43.0502 30.8287 44.7917 31.1981C48.6932 32.0256 53.1044 29.909 55.9452 27.9005C57.1887 27.0213 57.3913 25.4751 57.4912 24.9069C57.8522 22.8563 56.3998 30.414 56.7742 33.3618C56.8447 33.9169 57.1316 34.1802 57.3957 34.3853C57.9249 34.7962 58.6337 34.835 59.4043 34.68C62.0108 34.1554 64.7941 29.1123 66.5865 26.6628C67.3997 25.5514 66.8355 30.0437 67.0929 31.5227C67.2044 32.163 67.4121 32.5521 68.0391 32.3798C71.7924 31.3487 73.2629 26.4652 75.6449 21.3507C76.8212 18.8252 77.5387 16.2676 78.126 12.8108C78.7133 9.35408 79.0482 5.03121 79.0923 3.1521C79.1363 1.27298 78.8795 1.96861 78.6493 3.2779C78.0882 6.46826 78.089 10.8792 78.4902 16.196C78.9585 22.4026 80.2911 26.4797 81.1883 28.3644C82.5092 31.1388 84.5503 32.878 85.7309 33.4799C86.2371 33.738 86.6964 33.5546 86.9098 32.8507C87.4964 30.9165 86.4088 28.1691 84.7371 25.4776C82.8778 22.4842 79.6762 20.2818 76.5367 18.4096C75.0092 17.4988 73.4257 17.0056 71.6738 16.5861C69.9219 16.1666 68.0011 15.9221 70.6444 15.2224C73.2877 14.5227 80.5534 13.3751 84.5167 12.784C88.48 12.1928 88.9207 12.1928 89.3747 12.1928"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>

          <svg
            width="54"
            height="21"
            viewBox="0 0 54 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[49px] h-[17px] absolute left-[98px] top-[17px]"
          >
            <path
              d="M2 4.6504C6.35531 12.3151 9.0864 17.1816 9.95376 18.2879C12.6351 21.7075 13.3111 7.37308 13.9524 6.95839C17.0078 4.98285 16.7386 11.0593 17.369 11.3138C18.8536 11.913 20.5846 10.1025 23.2172 10.1306C27.4114 10.1753 31.5659 8.58068 34.0323 7.14204C34.4868 6.87689 34.5963 6.43147 34.6568 5.98701C34.7173 5.54255 34.6516 5.01378 34.3493 4.47449C32.8942 1.8782 28.7086 1.82883 25.7825 2.12068C24.5136 2.24724 23.7916 2.98533 23.2254 3.85538C22.0146 5.71607 22.1048 8.81307 22.8026 11.9668C23.3952 14.6453 26.5966 15.9234 29.838 16.8598C33.2639 17.8496 37.3809 17.1545 41.4494 16.3611C45.0761 15.3152 47.9147 14.1032 49.7804 12.9798C50.5452 12.4671 50.9407 12.0708 51.278 11.6602"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  </Link>
</BentoCard>


            {/* Card 4 - Small (120px) */}
            <BentoCard className="card-4" style={{ height: '240px' }}>
              <style dangerouslySetInnerHTML={{
                __html: `
                  @media (min-width: 1024px) {
                    .card-4 { height: 120px !important; }
                  }
                `
              }} />
              <Link href="/highpoint" className="block h-full">
                <div className="relative h-full flex flex-col justify-between rounded-[40px] bg-white shadow-sm transition-colors duration-300 group-hover:bg-[#016FAD]">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-[1]" style={{ backgroundImage: "url(/bg-hp.jpg)", backgroundSize: "cover", backgroundPosition: "center" }} />
                  <div className="absolute top-0 left-0 w-[96px] h-[96px] pointer-events-none z-[2]" style={{ backgroundImage: "url(/esqtopo.svg)", backgroundSize: "contain", backgroundRepeat: "no-repeat" }} />
                  <div className="absolute top-0 right-0 w-[96px] h-[96px] pointer-events-none z-[2]" style={{ backgroundImage: "url(/dirtopo.svg)", backgroundSize: "contain", backgroundRepeat: "no-repeat" }} />
                  <div className="absolute bottom-0 left-0 w-[96px] h-[96px] pointer-events-none z-[2]" style={{ backgroundImage: "url(/esqbaixo.svg)", backgroundSize: "contain", backgroundRepeat: "no-repeat" }} />
                  <div className="absolute bottom-0 right-0 w-[96px] h-[96px] pointer-events-none z-[2]" style={{ backgroundImage: "url(/dirbaixo.svg)", backgroundSize: "contain", backgroundRepeat: "no-repeat" }} />

                  <div className="p-8 sm:p-10 md:p-14 relative z-[3]">
                    <h3 className="text-[1rem] font-medium text-[#999] mb-4 transition-colors duration-300 group-hover:text-white/80" style={{ fontFamily: "var(--font-schibstedGrotesk), sans-serif" }}>Highpoint</h3>
                    <p className="text-[2rem] sm:text-[2.2rem] md:text-[1.6rem] lg:text-[2.2rem] leading-[1.2] text-[#131415] transition-colors duration-300 group-hover:text-white" style={{ fontFamily: "var(--font-schibstedGrotesk), sans-serif" }}>
                      Quebrando<br />o dress code
                    </p>
                  </div>
                </div>
              </Link>
            </BentoCard>

            {/* Card 7 - Medium (240px) */}
            <BentoCard className="card-7" style={{ height: '240px' }}>
              <style dangerouslySetInnerHTML={{
                __html: `
                  @media (min-width: 1024px) {
                    .card-7 { height: 240px !important; }
                  }
                `
              }} />
              <Link href="#" className="block h-full">
                <div className="relative h-full flex flex-col justify-between rounded-[40px] bg-white shadow-sm transition-colors duration-300 group-hover:bg-[#FF6B00]">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-[1]" style={{ backgroundImage: "url(/hoveasdla.jpg)", backgroundSize: "cover", backgroundPosition: "center" }} />
                  <div className="absolute top-0 left-0 w-[96px] h-[96px] pointer-events-none z-[2]" style={{ backgroundImage: "url(/esqtopo.svg)", backgroundSize: "contain", backgroundRepeat: "no-repeat" }} />
                  <div className="absolute top-0 right-0 w-[96px] h-[96px] pointer-events-none z-[2]" style={{ backgroundImage: "url(/dirtopo.svg)", backgroundSize: "contain", backgroundRepeat: "no-repeat" }} />
                  <div className="absolute bottom-0 left-0 w-[96px] h-[96px] pointer-events-none z-[2]" style={{ backgroundImage: "url(/esqbaixo.svg)", backgroundSize: "contain", backgroundRepeat: "no-repeat" }} />
                  <div className="absolute bottom-0 right-0 w-[96px] h-[96px] pointer-events-none z-[2]" style={{ backgroundImage: "url(/dirbaixo.svg)", backgroundSize: "contain", backgroundRepeat: "no-repeat" }} />

                  <div className="p-8 sm:p-10 md:p-14 relative z-[3]">
                    <h3 className="text-[1rem] font-medium text-[#999] mb-4 transition-colors duration-300 group-hover:text-white/80" style={{ fontFamily: "var(--font-schibstedGrotesk), sans-serif" }}>P&G</h3>
                    <p className="text-[2rem] sm:text-[2.2rem] md:text-[1.6rem] lg:text-[2.2rem] leading-[1.2] text-[#131415] transition-colors duration-300 group-hover:text-white" style={{ fontFamily: "var(--font-schibstedGrotesk), sans-serif" }}>
                      Hub de conteúdo<br />LATAM.
                    </p>
                  </div>
                </div>
              </Link>
            </BentoCard>

          </div>

          {/* ========== COLUNA 2 ========== */}
          <div className="flex flex-col gap-6 lg:col-span-4">
            
            {/* Espaçador flex-1 */}
            <style dangerouslySetInnerHTML={{
              __html: `
                .spacer-col2 {
                  display: none;
                }
                @media (min-width: 1024px) {
                  .spacer-col2 {
                    display: block !important;
                    flex: 1;
                    min-height: 120px;
                  }
                }
              `
            }} />
            <div className="spacer-col2" />

            {/* Card 2 - Large (480px) */}
            <BentoCard className="card-2" style={{ height: '240px' }}>
              <style dangerouslySetInnerHTML={{
                __html: `
                  @media (min-width: 1024px) {
                    .card-2 { height: 480px !important; }
                  }
                `
              }} />
              <Link href="/hepatite" className="block h-full">
                <div className="relative h-full rounded-[40px] bg-white shadow-sm transition-colors duration-300 group-hover:bg-[#F9AA00]">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-[1]" style={{ backgroundImage: "url(/hasdrmolecula.png)", backgroundSize: "cover", backgroundPosition: "center" }} />
                  <div className="absolute top-0 left-0 w-[96px] h-[96px] pointer-events-none z-[2]" style={{ backgroundImage: "url(/esqtopo.svg)", backgroundSize: "contain", backgroundRepeat: "no-repeat" }} />
                  <div className="absolute top-0 right-0 w-[96px] h-[96px] pointer-events-none z-[2]" style={{ backgroundImage: "url(/dirtopo.svg)", backgroundSize: "contain", backgroundRepeat: "no-repeat" }} />
                  <div className="absolute bottom-0 left-0 w-[96px] h-[96px] pointer-events-none z-[2]" style={{ backgroundImage: "url(/esqbaixo.svg)", backgroundSize: "contain", backgroundRepeat: "no-repeat" }} />
                  <div className="absolute bottom-0 right-0 w-[96px] h-[96px] pointer-events-none z-[2]" style={{ backgroundImage: "url(/dirbaixo.svg)", backgroundSize: "contain", backgroundRepeat: "no-repeat" }} />

                  <div className="relative z-[3] h-full flex flex-col justify-between">
                    <div className="p-8 sm:p-10 md:p-14">
                      <h3 className="text-[1rem] font-medium mb-4 text-[#999] transition-colors duration-300 group-hover:text-[#131415]" style={{ fontFamily: "var(--font-schibstedGrotesk), sans-serif" }}>Gilead</h3>
                      <p className="text-[2rem] sm:text-[2.2rem] md:text-[1.6rem] lg:text-[2.2rem] leading-[1.2] text-[#131415]" style={{ fontFamily: "var(--font-schibstedGrotesk), sans-serif" }}>
                        A epidemia<br />de mitos sobre<br />Hepatite C.
                      </p>
                      <div className="mt-6 flex flex-wrap gap-3">
                        {["UI Design", "Criativo", "Lançamento"].map((tag) => (
                          <span key={tag} className="px-4 py-1.5 rounded-full border border-neutral-200 text-xs font-medium text-[#999] bg-white transition-colors duration-300 group-hover:text-[#131415] group-hover:border-black/50 group-hover:bg-white/10" style={{ fontFamily: "var(--font-schibstedGrotesk), sans-serif" }}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </BentoCard>

            {/* Card 5 - Medium (240px) */}
            <BentoCard className="card-5" style={{ height: '240px' }}>
              <style dangerouslySetInnerHTML={{
                __html: `
                  @media (min-width: 1024px) {
                    .card-5 { height: 240px !important; }
                  }
                `
              }} />
              <Link href="#" className="block h-full">
                <div className="relative h-full flex flex-col justify-between rounded-[40px] bg-white shadow-sm transition-colors duration-300 group-hover:bg-[#FF6B00]">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-[1]" style={{ backgroundImage: "url(/hoveasdla.jpg)", backgroundSize: "cover", backgroundPosition: "center" }} />
                  <div className="absolute top-0 left-0 w-[96px] h-[96px] pointer-events-none z-[2]" style={{ backgroundImage: "url(/esqtopo.svg)", backgroundSize: "contain", backgroundRepeat: "no-repeat" }} />
                  <div className="absolute top-0 right-0 w-[96px] h-[96px] pointer-events-none z-[2]" style={{ backgroundImage: "url(/dirtopo.svg)", backgroundSize: "contain", backgroundRepeat: "no-repeat" }} />
                  <div className="absolute bottom-0 left-0 w-[96px] h-[96px] pointer-events-none z-[2]" style={{ backgroundImage: "url(/esqbaixo.svg)", backgroundSize: "contain", backgroundRepeat: "no-repeat" }} />
                  <div className="absolute bottom-0 right-0 w-[96px] h-[96px] pointer-events-none z-[2]" style={{ backgroundImage: "url(/dirbaixo.svg)", backgroundSize: "contain", backgroundRepeat: "no-repeat" }} />

                  <div className="p-8 sm:p-10 md:p-14 relative z-[3]">
                    <h3 className="text-[1rem] font-medium text-[#999] mb-4 transition-colors duration-300 group-hover:text-white/80" style={{ fontFamily: "var(--font-schibstedGrotesk), sans-serif" }}>Danone</h3>
                    <p className="text-[2rem] sm:text-[2.2rem] md:text-[1.6rem] lg:text-[2.2rem] leading-[1.2] text-[#131415] transition-colors duration-300 group-hover:text-white" style={{ fontFamily: "var(--font-schibstedGrotesk), sans-serif" }}>
                      Análise<br />Heurística
                    </p>
                  </div>
                </div>
              </Link>
            </BentoCard>

          </div>

          {/* ========== COLUNA 3 ========== */}
          <div className="flex flex-col gap-6 lg:col-span-4">
            
            {/* Card 3 - Medium (240px) */}
            <BentoCard className="card-3" style={{ height: '240px' }}>
              <style dangerouslySetInnerHTML={{
                __html: `
                  @media (min-width: 1024px) {
                    .card-3 { height: 240px !important; }
                  }
                `
              }} />
              <Link href="/pdpoint" className="block h-full">
                <div className="relative h-full rounded-[40px] bg-white shadow-sm transition-colors duration-300 group-hover:bg-[#00857C]">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-[1]" style={{ backgroundImage: "url(/hasdrmolecula.png)", backgroundSize: "cover", backgroundPosition: "center" }} />
                  <div className="absolute top-0 left-0 w-[64px] h-[64px] pointer-events-none z-[2]" style={{ backgroundImage: "url(/esqtopo.svg)", backgroundSize: "contain", backgroundRepeat: "no-repeat" }} />
                  <div className="absolute top-0 right-0 w-[64px] h-[64px] pointer-events-none z-[2]" style={{ backgroundImage: "url(/dirtopo.svg)", backgroundSize: "contain", backgroundRepeat: "no-repeat" }} />
                  <div className="absolute bottom-0 left-0 w-[64px] h-[64px] pointer-events-none z-[2]" style={{ backgroundImage: "url(/esqbaixo.svg)", backgroundSize: "contain", backgroundRepeat: "no-repeat" }} />
                  <div className="absolute bottom-0 right-0 w-[64px] h-[64px] pointer-events-none z-[2]" style={{ backgroundImage: "url(/dirbaixo.svg)", backgroundSize: "contain", backgroundRepeat: "no-repeat" }} />

                  <div className="relative z-[3] h-full flex flex-col justify-between">
                    <div className="p-8 sm:p-10 md:p-14">
                      <h3 className="text-[1rem] font-medium mb-4 text-[#999] transition-colors duration-300 group-hover:text-white/80" style={{ fontFamily: "var(--font-schibstedGrotesk), sans-serif" }}>MSD</h3>
                      <p className="text-[2rem] sm:text-[2.2rem] md:text-[1.6rem] lg:text-[2.2rem] leading-[1.2] text-[#131415] transition-colors duration-300 group-hover:text-white" style={{ fontFamily: "var(--font-schibstedGrotesk), sans-serif" }}>
                        Estabilizando<br />a jornada<br />de exames.
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </BentoCard>

            {/* Card 6 - Small (120px) */}
            <BentoCard className="card-6" style={{ height: '240px' }}>
              <style dangerouslySetInnerHTML={{
                __html: `
                  @media (min-width: 1024px) {
                    .card-6 { height: 120px !important; }
                  }
                `
              }} />
              <Link href="#" className="block h-full">
                <div className="relative h-full flex flex-col justify-between rounded-[40px] bg-white shadow-sm transition-colors duration-300 group-hover:bg-[#FF6B00]">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-[1]" style={{ backgroundImage: "url(/hoveasdla.jpg)", backgroundSize: "cover", backgroundPosition: "center" }} />
                  <div className="absolute top-0 left-0 w-[96px] h-[96px] pointer-events-none z-[2]" style={{ backgroundImage: "url(/esqtopo.svg)", backgroundSize: "contain", backgroundRepeat: "no-repeat" }} />
                  <div className="absolute top-0 right-0 w-[96px] h-[96px] pointer-events-none z-[2]" style={{ backgroundImage: "url(/dirtopo.svg)", backgroundSize: "contain", backgroundRepeat: "no-repeat" }} />
                  <div className="absolute bottom-0 left-0 w-[96px] h-[96px] pointer-events-none z-[2]" style={{ backgroundImage: "url(/esqbaixo.svg)", backgroundSize: "contain", backgroundRepeat: "no-repeat" }} />
                  <div className="absolute bottom-0 right-0 w-[96px] h-[96px] pointer-events-none z-[2]" style={{ backgroundImage: "url(/dirbaixo.svg)", backgroundSize: "contain", backgroundRepeat: "no-repeat" }} />

                  <div className="p-8 sm:p-10 md:p-14 relative z-[3]">
                    <h3 className="text-[1rem] font-medium text-[#999] mb-4 transition-colors duration-300 group-hover:text-white/80" style={{ fontFamily: "var(--font-schibstedGrotesk), sans-serif" }}>Nestlé</h3>
                    <p className="text-[2rem] sm:text-[2.2rem] md:text-[1.6rem] lg:text-[2.2rem] leading-[1.2] text-[#131415] transition-colors duration-300 group-hover:text-white" style={{ fontFamily: "var(--font-schibstedGrotesk), sans-serif" }}>
                      Visual<br />Aids
                    </p>
                  </div>
                </div>
              </Link>
            </BentoCard>

            {/* Card 9 - Large (480px) */}
            <BentoCard className="card-9" style={{ height: '240px' }}>
              <style dangerouslySetInnerHTML={{
                __html: `
                  @media (min-width: 1024px) {
                    .card-9 { height: 480px !important; }
                  }
                `
              }} />
              <Link href="#" className="block h-full">
                <div className="relative h-full flex flex-col justify-between rounded-[40px] bg-white shadow-sm transition-colors duration-300 group-hover:bg-[#FF6B00]">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-[1]" style={{ backgroundImage: "url(/hoveasdla.jpg)", backgroundSize: "cover", backgroundPosition: "center" }} />
                  <div className="absolute top-0 left-0 w-[96px] h-[96px] pointer-events-none z-[2]" style={{ backgroundImage: "url(/esqtopo.svg)", backgroundSize: "contain", backgroundRepeat: "no-repeat" }} />
                  <div className="absolute top-0 right-0 w-[96px] h-[96px] pointer-events-none z-[2]" style={{ backgroundImage: "url(/dirtopo.svg)", backgroundSize: "contain", backgroundRepeat: "no-repeat" }} />
                  <div className="absolute bottom-0 left-0 w-[96px] h-[96px] pointer-events-none z-[2]" style={{ backgroundImage: "url(/esqbaixo.svg)", backgroundSize: "contain", backgroundRepeat: "no-repeat" }} />
                  <div className="absolute bottom-0 right-0 w-[96px] h-[96px] pointer-events-none z-[2]" style={{ backgroundImage: "url(/dirbaixo.svg)", backgroundSize: "contain", backgroundRepeat: "no-repeat" }} />

                  <div className="p-8 sm:p-10 md:p-14 relative z-[3]">
                    <h3 className="text-[1rem] font-medium text-[#999] mb-4 transition-colors duration-300 group-hover:text-white/80" style={{ fontFamily: "var(--font-schibstedGrotesk), sans-serif" }}>Outro Projeto</h3>
                    <p className="text-[2rem] sm:text-[2.2rem] md:text-[1.6rem] lg:text-[2.2rem] leading-[1.2] text-[#131415] transition-colors duration-300 group-hover:text-white" style={{ fontFamily: "var(--font-schibstedGrotesk), sans-serif" }}>
                      Título<br />do projeto<br />aqui.
                    </p>
                  </div>
                </div>
              </Link>
            </BentoCard>

          </div>

        </div>
      </div>
    </section>
  )
}