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
}: {
  className?: string
  children: ReactNode
  href?: string
}) {
  const base = cn(
    "group relative bg-white",
    "",
    "overflow-hidden",
    className
  )
  if (href) {
    return (
      <Link href={href} className={base}>
        {children}
      </Link>
    )
  }
  return <div className={base}>{children}</div>
}

export default function BentoHome() {
  return (
    
    <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-4 md:px-8 lg:px-12">
  <div className="">
    <h4
      className="text-[1rem] leading-[100%] text-[#999] font-semibold"
      style={{ fontFamily: 'var(--font-schibstedGrotesk), sans-serif' }}
    >
      PROJETOS
    </h4>
    <div className="h-8" />

    {/* 👇 sem absolute; altura fixa no mobile com min-h */}
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 gap-6 ",
        "",
        "md:[grid-auto-rows:200px] lg:[grid-auto-rows:220px]"
      )}
    >
          {/* A (azul): quadrado 2x2 */}
        

<BentoCard className="col-span-2 row-span-2 min-h-[400px] group">
  <Link href="/cormedix" className="block h-full">
    <div className="relative h-full flex flex-col justify-between rounded-[40px] bg-white shadow-sm transition-colors duration-300 group-hover:bg-[#016FAD]">
      {/* BG da molécula no hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-[1]"
        style={{
          backgroundImage: "url(/hovermolecula.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Moldura */}
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

      {/* TOPO – título, heading e chips */}
      <div className="p-8 sm:p-10 md:p-14 relative z-[3]">
        <h3
          className="text-[1rem] font-medium text-[#999] mb-4 transition-colors duration-300 group-hover:text-white/80"
          style={{ fontFamily: "var(--font-schibstedGrotesk), sans-serif" }}
        >
          Cormedix
        </h3>

        <p
          className="text-[2rem] sm:text-[2.2rem] md:text-[2.6rem] leading-[1.2] text-[#131415] transition-colors duration-300 group-hover:text-white"
          style={{ fontFamily: "var(--font-schibstedGrotesk), sans-serif" }}
        >
          Prescrevendo
          <br />
          dados para
          <br />
          decisões.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {["UI Design", "Investidores", "Conteúdo legado"].map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 rounded-full border border-neutral-200 text-xs font-medium text-[#999] bg-white transition-colors duration-300 group-hover:text-white group-hover:border-white/40 group-hover:bg-white/10"
              style={{ fontFamily: "var(--font-schibstedGrotesk), sans-serif" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* BASE – "Ver projeto" */}
      <div className="px-8 sm:px-10 md:px-14 pb-10 relative z-[3]">
        <div
          className="inline-flex items-center gap-2 text-[0.95rem] sm:text-base text-[#131415] font-medium transition-colors duration-300 group-hover:text-white"
          style={{ fontFamily: "var(--font-schibstedGrotesk), sans-serif" }}
        >
          <span></span>
          <span aria-hidden></span>
        </div>
      </div>
    </div>
  </Link>
</BentoCard>



          {/* B (vermelho): retângulo largo 4x2 */}
         

<BentoCard className="col-span-2 md:col-span-4 row-span-2 min-h-[400px] group cursor-lock">
  <Link href="/hepatite" className="block h-full">
    <div className="relative h-full rounded-[40px] bg-white shadow-sm transition-colors duration-300 group-hover:bg-[#F9AA00]">
      {/* BG da molécula no hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-[1]"
        style={{
          backgroundImage: "url(/hasdrmolecula.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Moldura */}
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

      {/* CONTEÚDO */}
      <div className="relative z-[3] h-full flex flex-col justify-between">
        <div className="p-8 sm:p-10 md:p-14 grid md:grid-cols-2 gap-6">
          <div>
            <h3
  className="
    text-[1rem] font-medium mb-4
    text-[#999]
    transition-colors duration-300
    group-hover:text-[#131415]
  "
  style={{ fontFamily: "var(--font-schibstedGrotesk), sans-serif" }}
>
  Gilead
</h3>


            <p
              className="text-[2rem] sm:text-[2.2rem] md:text-[2.6rem] leading-[1.2] text-[#131415]"
              style={{ fontFamily: "var(--font-schibstedGrotesk), sans-serif" }}
            >
              A epidemia
              <br />
              de mitos sobre
              <br />
              Hepatite C.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
          {["Ui Design", "Criativo", "Lançamento"].map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 rounded-full border border-neutral-200 text-xs font-medium text-[#999] bg-white transition-colors duration-300 group-hover:text-[#131415] group-hover:border-black/50 group-hover:bg-white/10"
              style={{ fontFamily: "var(--font-schibstedGrotesk), sans-serif" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

          <div className="hidden md:block" />
        </div>

        <div className="px-8 sm:px-10 md:px-14 pb-10">
          <div
            className="inline-flex items-center gap-2 text-[0.95rem] sm:text-base text-[#131415] font-medium"
            style={{ fontFamily: "var(--font-schibstedGrotesk), sans-serif" }}
          >
            <span></span>
            <span aria-hidden></span>
          </div>
        </div>
      </div>
    </div>
  </Link>
</BentoCard>


          {/* C (verde) 2x2 */}
          <BentoCard className="col-span-2 row-span-2 min-h-[400px] group ">
  <Link href="/highpoint" className="block h-full">
    <div className="relative h-full flex flex-col justify-between rounded-[40px] bg-white shadow-sm transition-colors duration-300 group-hover:bg-[#016FAD]">
      {/* BG da molécula no hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-[1]"
        style={{
          backgroundImage: "url(/bg-hp.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Moldura */}
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

      {/* TOPO – título, heading e chips */}
      <div className="p-8 sm:p-10 md:p-14 relative z-[3]">
        <h3
          className="text-[1rem] font-medium text-[#999] mb-4 transition-colors duration-300 group-hover:text-white/80"
          style={{ fontFamily: "var(--font-schibstedGrotesk), sans-serif" }}
        >
          Highpoint
        </h3>

        <p
          className="text-[2rem] sm:text-[2.2rem] md:text-[2.6rem] leading-[1.2] text-[#131415] transition-colors duration-300 group-hover:text-white"
          style={{ fontFamily: "var(--font-schibstedGrotesk), sans-serif" }}
        >
          Quebrando
          <br />
          o dress code
          <br />
          da saúde.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {["Ui Design", "Criativo", "Lançamento"].map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 rounded-full border border-neutral-200 text-xs font-medium text-[#999] bg-white transition-colors duration-300 group-hover:text-white group-hover:border-white/40 group-hover:bg-white/10"
              style={{ fontFamily: "var(--font-schibstedGrotesk), sans-serif" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* BASE – "Ver projeto" */}
      <div className="px-8 sm:px-10 md:px-14 pb-10 relative z-[3]">
        <div
          className="inline-flex items-center gap-2 text-[0.95rem] sm:text-base text-[#131415] font-medium transition-colors duration-300 group-hover:text-white"
          style={{ fontFamily: "var(--font-schibstedGrotesk), sans-serif" }}
        >
          <span></span>
          <span aria-hidden></span>
        </div>
      </div>
    </div>
  </Link>
</BentoCard>

          {/* D (verde claro) 2x2 */}
          <BentoCard className="col-span-2 row-span-2 min-h-[400px] group cursor-contact">
  <Link href="#" className="block h-full">
    <div className="relative h-full flex flex-col justify-between rounded-[40px] bg-white shadow-sm transition-colors duration-300 group-hover:bg-[#FF6B00]">
      {/* BG da molécula no hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-[1]"
        style={{
          backgroundImage: "url(/hoveasdla.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Moldura */}
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

      {/* TOPO – título, heading e chips */}
      <div className="p-8 sm:p-10 md:p-14 relative z-[3]">
        <h3
          className="text-[1rem] font-medium text-[#999] mb-4 transition-colors duration-300 group-hover:text-white/80"
          style={{ fontFamily: "var(--font-schibstedGrotesk), sans-serif" }}
        >
          P&G
        </h3>

        <p
          className="text-[2rem] sm:text-[2.2rem] md:text-[2.6rem] leading-[1.2] text-[#131415] transition-colors duration-300 group-hover:text-white"
          style={{ fontFamily: "var(--font-schibstedGrotesk), sans-serif" }}
        >
          Hub de conteúdo
          <br />
          LATAM.
          <br />
          
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {["Salesforce", "Design System", "Informativo"].map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 rounded-full border border-neutral-200 text-xs font-medium text-[#999] bg-white transition-colors duration-300 group-hover:text-white group-hover:border-white/40 group-hover:bg-white/10"
              style={{ fontFamily: "var(--font-schibstedGrotesk), sans-serif" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* BASE – "Ver projeto" */}
      <div className="px-8 sm:px-10 md:px-14 pb-10 relative z-[3]">
        <div
          className="inline-flex items-center gap-2 text-[0.95rem] sm:text-base text-[#131415] font-medium transition-colors duration-300 group-hover:text-white"
          style={{ fontFamily: "var(--font-schibstedGrotesk), sans-serif" }}
        >
          <span className="text-black/30">Apresentado em reuniões.</span>
          <span aria-hidden></span>
        </div>
      </div>
    </div>
  </Link>
</BentoCard>


          {/* E (amarelo claro) 2x2 */}
                <BentoCard className="col-span-2 row-span-2 min-h-[400px] group cursor-contact">
  <Link href="#" className="block h-full">
    <div className="relative h-full flex flex-col justify-between rounded-[40px] bg-white shadow-sm transition-colors duration-300 group-hover:bg-[#FF6B00]">
      {/* BG da molécula no hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-[1]"
        style={{
          backgroundImage: "url(/hoveasdla.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Moldura */}
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

      {/* TOPO – título, heading e chips */}
      <div className="p-8 sm:p-10 md:p-14 relative z-[3] cursor-lock">
        <h3
          className="text-[1rem] font-medium text-[#999] mb-4 transition-colors duration-300 group-hover:text-white/80"
          style={{ fontFamily: "var(--font-schibstedGrotesk), sans-serif" }}
        >
          Danone
        </h3>

        <p
          className="text-[2rem] sm:text-[2.2rem] md:text-[2.6rem] leading-[1.2] text-[#131415] transition-colors duration-300 group-hover:text-white"
          style={{ fontFamily: "var(--font-schibstedGrotesk), sans-serif" }}
        >
          Análise
          <br />
          Heurística
          <br />
          
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {["UX Design", "Recomendações", "Boas práticas"].map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 rounded-full border border-neutral-200 text-xs font-medium text-[#999] bg-white transition-colors duration-300 group-hover:text-white group-hover:border-white/40 group-hover:bg-white/10"
              style={{ fontFamily: "var(--font-schibstedGrotesk), sans-serif" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* BASE – "Ver projeto" */}
      <div className="px-8 sm:px-10 md:px-14 pb-10 relative z-[3]">
        <div
          className="inline-flex items-center gap-2 text-[0.95rem] sm:text-base text-[#131415] font-medium transition-colors duration-300 group-hover:text-white"
          style={{ fontFamily: "var(--font-schibstedGrotesk), sans-serif" }}
        >
          <span className="text-black/30">Apresentado em reuniões.</span>
          <span aria-hidden></span>
        </div>
      </div>
    </div>
  </Link>
</BentoCard>

          {/* F (bege largo) 4x2 */}
          <BentoCard className="col-span-2 md:col-span-4 row-span-2 min-h-[400px] group cursor-lock">
  <Link href="/pdpoint" className="block h-full">
    <div className="relative h-full rounded-[40px] bg-white shadow-sm transition-colors duration-300 group-hover:bg-[#00857C]">
      {/* BG da molécula no hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-[1]"
        style={{
          backgroundImage: "url(/hasdrmolecula.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Moldura */}
      <div
        className="absolute top-0 left-0 w-[64px] h-[64px] pointer-events-none z-[2]"
        style={{
          backgroundImage: "url(/esqtopo.svg)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div
        className="absolute top-0 right-0 w-[64px] h-[64px] pointer-events-none z-[2]"
        style={{
          backgroundImage: "url(/dirtopo.svg)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[64px] h-[64px] pointer-events-none z-[2]"
        style={{
          backgroundImage: "url(/esqbaixo.svg)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[64px] h-[64px] pointer-events-none z-[2]"
        style={{
          backgroundImage: "url(/dirbaixo.svg)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* CONTEÚDO */}
      <div className="relative z-[3] h-full flex flex-col justify-between">
        <div className="p-8 sm:p-10 md:p-14 grid md:grid-cols-2 gap-6">
          <div>
            <h3
              className="
                text-[1rem] font-medium mb-4
                text-[#999]
                transition-colors duration-300
                group-hover:text-white/80
              "
              style={{ fontFamily: "var(--font-schibstedGrotesk), sans-serif" }}
            >
              MSD
            </h3>

            <p
              className="
                text-[2rem] sm:text-[2.2rem] md:text-[2.6rem]
                leading-[1.2] text-[#131415]
                transition-colors duration-300
                group-hover:text-white
              "
              style={{ fontFamily: "var(--font-schibstedGrotesk), sans-serif" }}
            >
              Estabilizando 
              <br />
              a jornada 
              <br />
              de exames.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {["UI Design", "Investidores", "Outro tópico"].map((tag) => (
                <span
                  key={tag}
                  className="
                    px-4 py-1.5 rounded-full border border-neutral-200 
                    text-xs font-medium text-[#999] bg-white
                    transition-colors duration-300
                    group-hover:text-white
                    group-hover:border-white/40
                    group-hover:bg-white/10
                  "
                  style={{
                    fontFamily: "var(--font-schibstedGrotesk), sans-serif",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="hidden md:block" />
        </div>

        <div className="px-8 sm:px-10 md:px-14 pb-10">
          <div
            className="
              inline-flex items-center gap-2 text-[0.95rem] sm:text-base 
              text-[#131415] font-medium
              transition-colors duration-300
              group-hover:text-white
            "
            style={{ fontFamily: "var(--font-schibstedGrotesk), sans-serif" }}
          >
            <span></span>
            <span aria-hidden></span>
          </div>
        </div>
      </div>
    </div>
  </Link>
</BentoCard>


          {/* G (ciano) 2x2 */}
                        <BentoCard className="col-span-2 row-span-2 min-h-[400px] group cursor-contact">
  <Link href="#" className="block h-full">
    <div className="relative h-full flex flex-col justify-between rounded-[40px] bg-white shadow-sm transition-colors duration-300 group-hover:bg-[#FF6B00]">
      {/* BG da molécula no hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-[1]"
        style={{
          backgroundImage: "url(/hoveasdla.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Moldura */}
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

      {/* TOPO – título, heading e chips */}
      <div className="p-8 sm:p-10 md:p-14 relative z-[3]">
        <h3
          className="text-[1rem] font-medium text-[#999] mb-4 transition-colors duration-300 group-hover:text-white/80"
          style={{ fontFamily: "var(--font-schibstedGrotesk), sans-serif" }}
        >
          Nestlé
        </h3>

        <p
          className="text-[2rem] sm:text-[2.2rem] md:text-[2.6rem] leading-[1.2] text-[#131415] transition-colors duration-300 group-hover:text-white"
          style={{ fontFamily: "var(--font-schibstedGrotesk), sans-serif" }}
        >
          Visual
          <br />
           Aids
          <br />
          
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {["Apresentação"].map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 rounded-full border border-neutral-200 text-xs font-medium text-[#999] bg-white transition-colors duration-300 group-hover:text-white group-hover:border-white/40 group-hover:bg-white/10"
              style={{ fontFamily: "var(--font-schibstedGrotesk), sans-serif" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* BASE – "Ver projeto" */}
      <div className="px-8 sm:px-10 md:px-14 pb-10 relative z-[3]">
        <div
          className="inline-flex items-center gap-2 text-[0.95rem] sm:text-base text-[#131415] font-medium transition-colors duration-300 group-hover:text-white"
          style={{ fontFamily: "var(--font-schibstedGrotesk), sans-serif" }}
        >
          <span className="text-black/30">Apresentado em reuniões.</span>
          <span aria-hidden></span>
        </div>
      </div>
    </div>
  </Link>
</BentoCard>
        </div>
      </div>
    </section>
  )
}
