"use client"

import { useEffect } from "react"

type Easing = (t: number) => number

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3)
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(n, max))
}

export default function SmoothAnchors({
  duration = 850,
  easing = easeOutCubic,
  headerVar = "--header-h",
}: {
  duration?: number
  easing?: Easing
  headerVar?: string
}) {
  useEffect(() => {
    const prefersReduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const getHeaderOffset = () => {
      const v = getComputedStyle(document.documentElement).getPropertyValue(headerVar)
      const px = parseFloat(v) || 0
      return px
    }

    const animateTo = (targetY: number, d = duration) => {
      if (prefersReduced) {
        window.scrollTo(0, targetY)
        return
      }
      const startY = window.scrollY
      const delta = targetY - startY
      const start = performance.now()

      const step = (now: number) => {
        const t = clamp((now - start) / d, 0, 1)
        const y = startY + delta * easing(t)
        window.scrollTo(0, y)
        if (t < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }

    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element)?.closest<HTMLAnchorElement>("a[href^='#']")
      if (!a) return
      const hash = a.getAttribute("href") || ""
      if (hash === "#" || hash.length < 2) return
      const id = hash.slice(1)
      const el = document.getElementById(id)
      if (!el) return

      e.preventDefault()
      const rect = el.getBoundingClientRect()
      const header = getHeaderOffset()
      // destino com offset e limites
      const rawTarget = window.scrollY + rect.top - header
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const targetY = clamp(rawTarget, 0, maxScroll)

      // duração por link (opcional): data-scroll-duration="1000"
      const dAttr = a.getAttribute("data-scroll-duration")
      const d = dAttr ? parseInt(dAttr, 10) : undefined

      animateTo(targetY, d)

      // atualiza hash sem “pulo”
      history.pushState(null, "", `#${id}`)

      // acessibilidade: focar destino
      const hadTabIndex = el.hasAttribute("tabindex")
      if (!hadTabIndex) el.setAttribute("tabindex", "-1")
      ;(el as HTMLElement).focus({ preventScroll: true })
      if (!hadTabIndex) el.removeAttribute("tabindex")
    }

    document.addEventListener("click", onClick)
    return () => document.removeEventListener("click", onClick)
  }, [duration, easing, headerVar])

  return null
}
