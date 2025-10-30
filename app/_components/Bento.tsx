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
    
    <section className="w-full max-w-[1400px] mx-auto w-full px-4 sm:px-4 md:px-8 lg:px-12">
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
          <BentoCard className="col-span-2 row-span-2 bg-[#2DB5EA]/10 min-h-[400px]">
            <div className="h-full flex flex-col justify-between bg-[#2DB5EA]">
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
              <div className="p-6 sm:p-16 md:p-16">
                <h3 className="text-neutral-900 text-lg md:text-xl font-semibold ">Cormedix</h3>
                <p className="text-neutral-500 text-sm md:text-base">Lorem ipsum</p>
              </div>
              <div className="mt-4 h-24" />
            </div>
          </BentoCard>

          {/* B (vermelho): retângulo largo 4x2 */}
          <BentoCard className="col-span-2 md:col-span-4 row-span-2 min-h-[400px]">
            <div className="h-full grid md:grid-cols-2 gap-3 md:gap-4 bg-[#DC6E70]">
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
              <div className="flex flex-col p-6 sm:p-16 md:p-16">
                <h3 className="text-neutral-900 text-lg md:text-xl font-semibold">Gillead</h3>
                <p className="text-neutral-500 text-sm md:text-base">Lorem ipsum dolor sit amet</p>
              </div>
              <div className="" />
            </div>
          </BentoCard>

          {/* C (verde) 2x2 */}
          <BentoCard className="col-span-2 row-span-2 min-h-[400px]">
            <div className="h-full flex flex-col justify-between bg-[#38E282] p-6 sm:p-16 md:p-16">
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
              <h3 className="text-neutral-900 text-lg md:text-xl font-semibold">HP</h3>
              <div className="h-24" />
            </div>
          </BentoCard>

          {/* D (verde claro) 2x2 */}
          <BentoCard className="col-span-2 row-span-2 min-h-[400px]">
            <div className="h-full flex bg-[#CFF3B0] p-6 sm:p-16 md:p-16 ">
                <h3 className="text-neutral-900 text-lg md:text-xl font-semibold">P&G</h3>
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
          
              <div className="h-24 w-full" />
            </div>
          </BentoCard>

          {/* E (amarelo claro) 2x2 */}
          <BentoCard className="col-span-2 row-span-2 min-h-[400px]">
            <div className="h-full flex bg-[#FFF2A3] p-6 sm:p-16 md:p-16">
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
          <h3 className="text-neutral-900 text-lg md:text-xl font-semibold">Danone</h3>
              <div className="h-24 w-full" />
            </div>
          </BentoCard>

          {/* F (bege largo) 4x2 */}
          <BentoCard className="col-span-2 md:col-span-4 row-span-2 min-h-[400px]">
            <div className="h-full grid md:grid-cols-3 gap-3 md:gap-4 bg-[#F5D9A2]">
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
              <div className="md:col-span-2 flex flex-col p-6 sm:p-16 md:p-16">
                <h3 className="text-neutral-900 text-lg md:text-xl font-semibold">PD Point</h3>
                <p className="text-neutral-500 text-sm md:text-base">Padrões, sistemas, acessibilidade e notas de produto.</p>
              </div>
              <div className="" />
            </div>
          </BentoCard>

          {/* G (ciano) 2x2 */}
          <BentoCard className="col-span-2 row-span-2 bg-[#B7F0ED] min-h-[400px] ">
            <div className="h-full bg-[#B7F0ED] p-6 sm:p-16 md:p-16 ">
                <h3 className="text-neutral-900 text-lg md:text-xl font-semibold ">Nestlé</h3>
                
                <div
            className="absolute top-0 left-0 w-[64px] h-[64px] pointer-events-none z-[1] "
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
          
              <div className="h-24 w-full " />
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  )
}
