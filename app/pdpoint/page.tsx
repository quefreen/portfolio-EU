'use client'

import { useState, FormEvent } from "react"

import CustomCursor from "../_components/CustomCursor"
import { Footer } from "../_components/footer"
import { FooterCormedix } from "../_components/FooterCormedix"
import { DoublePD } from "../_components/PDpoint/DoublePD"
import { DualPD } from "../_components/PDpoint/DualHPX"
import { HeroPD } from "../_components/PDpoint/HeroPDpoint"
import { PDRetro } from "../_components/PDpoint/PDretro"
import { ResumoPD } from "../_components/PDpoint/ResumoPD"
import { RetroPDpoint } from "../_components/PDpoint/RetroPD"
import { TriplePD } from "../_components/PDpoint/TriplePD"
import Link from "next/link"

const PASSWORD = "2801" // troque se quiser outra senha

export default function PDPointPage() {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [unlocked, setUnlocked] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (password === PASSWORD) {
      setUnlocked(true)
      setError("")
    } else {
      setError("Senha incorreta. Tente novamente.")
    }
  }

  return (
    <main className="">
      

      {!unlocked ? (
        // GATE DE SENHA
        <section className="min-h-screen bg-[#f7f7f7] text-white flex items-center justify-center px-4">
          <div className="w-full max-w-md text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f7f7f7] border border-white/10">
                <img
                  src="/cadeado.svg"
                  alt="Conteúdo protegido"
                  className="w-12 h-12 object-contain"
                />
              </div>
            </div>

            <h1 className="text-xl sm:text-2xl font-semibold mb-3 text-[#131415]">
              Ops! Este projeto é protegido.
            </h1>

            <p className="text-[1rem] text-[#131415] mb-8">
              Para ver o conteúdo, entre em contato pelo
              <br />
              <a
                href="https://www.linkedin.com/in/quefreen/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                LinkedIn
              </a>{" "}
              ou{" "}
              <a
                href="mailto:quefreen.almeida@gmail.com"
                className="underline underline-offset-4"
              >
                e-mail
              </a>{" "}
              e solicite a senha.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Digite a senha aqui"
                  className="
                    w-full rounded-[8px] bg-[#d4d4d4] text-center
                    px-4 py-3 text-sm text-neutral-100 placeholder-neutral-500
                    focus:outline-none focus:ring-2 focus:ring-[#131415] focus:border-transparent
                  "
                />
                {error && (
                  <p className="mt-2 text-xs text-red-400">{error}</p>
                )}
              </div>

              <button
                type="submit"
                className="
                  w-full rounded-[8px] bg-[#131415] hover:bg-[#FF6B00] 
                  transition-colors px-4 py-3 text-sm font-medium
                "
              >
                Liberar acesso
              </button>
            </form>

            <div className="mt-6">
              <Link
                href="/home"
                className="text-[1rem] text-[#131415] hover:text-[#FF6B00]"
              >
                Voltar para a página inicial
              </Link>
            </div>
          </div>
        </section>
      ) : (
        // CONTEÚDO REAL DO CASE
        <>
          <HeroPD />
          <ResumoPD />
          <DualPD />
          <DoublePD />
          <TriplePD />
          <PDRetro />
          <FooterCormedix />
          <Footer />
        </>
      )}
    </main>
  )
}
