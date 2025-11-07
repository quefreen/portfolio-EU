'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function ScrollTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <div
      className={`
        fixed bottom-8 left-1/2 -translate-x-1/2 w-full z-[60]
        pointer-events-none
        ${visible ? 'opacity-100' : 'opacity-0'}
        transition-opacity duration-200
      `}
    >
      <div className="max-w-[1400px] mx-auto w-full  flex justify-start">
        <button
          type="button"
          onClick={toTop}
          aria-label="Voltar ao topo"
          className="
            group
            inline-flex items-center justify-center
            h-6 w-12
            
            transition-transform duration-200
            hover:scale-105 active:scale-95
            pointer-events-auto
          "
        >
          {/* Ícone normal */}
          <Image
            src="/top.svg"
            alt=""
            width={42}
            height={42}
            className="group-hover:hidden"
            aria-hidden="true"
          />
          {/* Ícone hover */}
          <Image
            src="/top.svg"
            alt=""
            width={42}
            height={42}
            className="hidden group-hover:inline-block"
            aria-hidden="true"
          />
          <span className="sr-only">Voltar ao topo</span>
        </button>
      </div>
    </div>
  )
}
