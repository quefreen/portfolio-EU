"use client"

import Image from "next/image"
import ToolTip from "./_components/ToolTip"


// "banco" de pessoas aqui dentro mesmo
const PEOPLE = {
  ricardo: {
    id: "ricardo",
    name: "Ricardo Brandão",
    role: "Gerente de Projetos",
    avatar: "/ricardo.png", // ajuste o caminho da imagem
  },
  bea: {
    id: "bea",
    name: "Beatriz Salomone",
    role: "Gerente de Projetos",
    avatar: "/bea.jpg", // ajuste o caminho da imagem
  },
  ana: {
    id: "ana",
    name: "Ana Mahfuz",
    role: "Gerente de Contas",
    avatar: "/ana.png",
  },
  alvarez: {
    id: "alvarez",
    name: "Igor Alvarez",
    role: "Tech Lead",
    avatar: "/alvarez.png",
  },
  leticia: {
    id: "leticia",
    name: "Letícia Oliveira",
    role: "Q&A",
    avatar: "/leticia.png",
  },
  diego: {
    id: "diego",
    name: "Diego Muniz",
    role: "Full Stack",
    avatar: "/diego.png",
  },
} as const

type PersonId = keyof typeof PEOPLE

type Props = {
  members: PersonId[] // IDs que você vai passar em cada projeto
}

export function TeamAvatars({ members }: Props) {
  const team = members
    .map((id) => PEOPLE[id])
    .filter(Boolean)

  if (!team.length) return null

  return (
    <div className="flex items-center gap-2 mt-4">
      {/* Avatares empilhados */}
      <div className="flex -space-x-2">
        {team.map((person) => (
         <ToolTip
  key={person.id}
  theme="team" // 🔹 tema exclusivo pros avatares
  content={`
    <div class="tooltip-person">
      <div class="tooltip-name">${person.name}</div>
      <div class="tooltip-role">${person.role}</div>
    </div>
  `}
  placement="top"
>
  <div className="h-10 w-10 rounded-full border border-white/80 overflow-hidden bg-[#d4d4d4]">
    <Image
      src={person.avatar}
      alt={person.name}
      width={40}
      height={40}
      className="h-full w-full object-cover"
    />
  </div>
</ToolTip>

        ))}
      </div>

      <p
        className="text-xs text-[#838383]"
        style={{ fontFamily: "var(--font-schibstedGrotesk), sans-serif" }}
      >
       
      </p>
    </div>
  )
}
