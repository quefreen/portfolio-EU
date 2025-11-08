// app/[...catchAll]/page.tsx
import { redirect } from "next/navigation"

export default function CatchAll() {
  redirect("/") // manda qualquer rota desconhecida pra home
}
