// app/not-found.tsx
import { redirect } from "next/navigation"

export default function NotFound() {
  // manda direto pra home
  redirect("/home")   // ou "/" se você preferir
}
