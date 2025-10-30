// app/_components/ToolTip.tsx
"use client"

import { useEffect, useRef } from "react"
import tippy, { Instance, Props as TippyCoreProps } from "tippy.js"
import "tippy.js/dist/tippy.css"
// seu tema preto no globals.css já cobre 'quef'

type Props = {
  content: string // use string; para HTML, ver nota abaixo
  children: React.ReactNode
  placement?: TippyCoreProps["placement"]
  maxWidth?: number | "none"
  offset?: [number, number]
  theme?: string
}

export default function ToolTip({
  content,
  children,
  placement = "top",
  maxWidth = 280,
  offset = [0, 12],
  theme = "quef",
}: Props) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const inst = useRef<Instance | null>(null)

  useEffect(() => {
    if (!ref.current) return
    inst.current?.destroy()
    inst.current = tippy(ref.current, {
      content,
      placement,
      maxWidth,
      offset,
      theme,
      arrow: true,
      animation: "shift-away-subtle",
      delay: [80, 40],
      zIndex: 60,
      // se usar HTML dentro de 'content', habilite:
      // allowHTML: true,
    })
    return () => {
      inst.current?.destroy()
      inst.current = null
    }
  }, [content, placement, maxWidth, offset, theme])

  return (
    <span ref={ref} className="inline-flex">
      {children}
    </span>
  )
}
