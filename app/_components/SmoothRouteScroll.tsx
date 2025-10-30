// app/_components/SmoothRouteScroll.tsx
"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

export default function SmoothRouteScroll() {
  const pathname = usePathname()
  const search = useSearchParams()

  useEffect(() => {
    // rola pro topo suavemente a cada navegação
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [pathname, search])

  return null
}
