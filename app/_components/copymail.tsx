'use client'

import { useState } from 'react'

export function CopyEmailButton() {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText('quefreen.almeida@gmail.com')
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Erro ao copiar e-mail', err)
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="text-[18px] font-normal text-white hover:text-orange-500 transition-colors"
      style={{ fontFamily: 'var(--font-schibstedGrotesk), sans-serif' }}
    >
      {copied ? 'E-mail copiado.' : 'Copiar meu e-mail.'}
    </button>
  )
}
