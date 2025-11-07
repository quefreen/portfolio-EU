"use client"

import { useEffect, useRef, useState } from "react"

type Props = {
  color?: string
  base?: number
  grow?: number
  showOnTouch?: boolean
}

export default function CustomCursor({
  color = "#FF6B00",
  base = 10,
  grow = 42,
  showOnTouch = false,
}: Props) {
  const dotRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [isGrow, setIsGrow] = useState(false)
  const [isLock, setIsLock] = useState(false)
  const [isMessage, setIsMessage] = useState(false)

  // Alvos que fazem crescer por padrão
  const defaultGrowSelector = "a, button, [role='button'], .cursor-grow"
  // Seletor que bloqueia o crescimento
  const notGrowSelector = ".cursor-notgrow, [data-cursor='nogrow']"
  // Alvos que mudam ícone para cadeado
  const lockSelector = ".cursor-lock, [data-cursor='lock']"
  // Alvos que mostram variação de "contato"
  const messageSelector = ".cursor-contact, [data-cursor='contact']"

  useEffect(() => {
    if (!showOnTouch && window.matchMedia("(pointer: coarse)").matches) return

    const onMove = (e: MouseEvent) => {
      const el = e.target as Element | null
      if (!el) return

      const growCandidate = el.closest(defaultGrowSelector)
      const blockGrow = el.closest(notGrowSelector)
      const lockCandidate = el.closest(lockSelector)
      const messageCandidate = el.closest(messageSelector)

      const shouldGrow = !!growCandidate && !blockGrow
      const shouldLock = !!lockCandidate
      const shouldMessage = !!messageCandidate

      if (shouldGrow !== isGrow) setIsGrow(shouldGrow)
      if (shouldLock !== isLock) setIsLock(shouldLock)
      if (shouldMessage !== isMessage) setIsMessage(shouldMessage)
      if (!visible) setVisible(true)

      const n = dotRef.current
      if (n) {
        n.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`
      }
    }

    const onLeave = () => setVisible(false)

    document.addEventListener("mousemove", onMove, { passive: true })
    document.addEventListener("mouseleave", onLeave)
    return () => {
      document.removeEventListener("mousemove", onMove)
      document.removeEventListener("mouseleave", onLeave)
    }
  }, [isGrow, isLock, isMessage, visible, showOnTouch])

  const size = isGrow ? grow : base

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className={`fixed left-0 top-0 z-[9999] pointer-events-none transition-all duration-450 ease-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        borderRadius: 9999,
      }}
    >
      {/* Ícone de + (padrão, só quando crescer, NÃO for lock e NÃO for message) */}
      <svg
        viewBox="0 0 24 24"
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-100 ${
          isGrow && !isLock && !isMessage ? "opacity-100" : "opacity-0"
        }`}
        width={20}
        height={20}
        fill="none"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 5v14M5 12h14" />
      </svg>

      {/* Ícone de cadeado (quando crescer E estiver sobre .cursor-lock, sem message) */}
      <img
        src="/cad.svg"
        alt=""
        width={20}
        height={20}
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-100 ${
          isGrow && isLock && !isMessage ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Ícone de ampulheta (3ª variação – contato) */}
      <img
        src="/ampulheta.svg"
        alt=""
        width={20}
        height={20}
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-100 ${
          isGrow && isMessage ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  )
}
