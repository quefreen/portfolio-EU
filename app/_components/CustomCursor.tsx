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
  grow = 32,
  showOnTouch = false,
}: Props) {
  const dotRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [isGrow, setIsGrow] = useState(false)

  // Alvos que fazem crescer por padrão
  const defaultGrowSelector = "a, button, [role='button'], .cursor-grow"
  // Seletor que bloqueia o crescimento
  const notGrowSelector = ".cursor-notgrow, [data-cursor='nogrow']"

  useEffect(() => {
    if (!showOnTouch && window.matchMedia("(pointer: coarse)").matches) return

    const onMove = (e: MouseEvent) => {
      const el = e.target as Element | null

      const growCandidate = el?.closest(defaultGrowSelector)
      const blockGrow = el?.closest(notGrowSelector)

      const shouldGrow = !!growCandidate && !blockGrow
      if (shouldGrow !== isGrow) setIsGrow(shouldGrow)
      if (!visible) setVisible(true)

      const n = dotRef.current
      if (n) n.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`
    }

    const onLeave = () => setVisible(false)

    document.addEventListener("mousemove", onMove, { passive: true })
    document.addEventListener("mouseleave", onLeave)
    return () => {
      document.removeEventListener("mousemove", onMove)
      document.removeEventListener("mouseleave", onLeave)
    }
  }, [isGrow, visible, showOnTouch])

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className={`fixed left-0 top-0 z-[9999] pointer-events-none transition-all duration-150 ease-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        width: isGrow ? grow : base,
        height: isGrow ? grow : base,
        backgroundColor: color,
        borderRadius: 9999,
      }}
    >
      {/* Ícone visível só no grow */}
      <svg
        viewBox="0 0 24 24"
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-100 ${
          isGrow ? "opacity-100" : "opacity-0"
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
    </div>
  )
}
