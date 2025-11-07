"use client"

import { useEffect, useRef } from "react"
import tippy, { Instance, Props as TippyCoreProps } from "tippy.js"
import "tippy.js/dist/tippy.css"

type Props = {
  content: string
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
  theme = "quef", // seu tema padrão
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
      allowHTML: true, // 🔹 habilita HTML, mas string simples continua ok
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
