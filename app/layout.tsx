// app/layout.tsx
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { Navbar } from "./_components/menu";
import ScrollTop from "./_components/ScrollToTopButton";



const sora = Sora({
  subsets: ["latin"],
  weight: ["400","500","600","700"], // escolha os pesos que vai usar
  display: "swap",
});

export const metadata: Metadata = {
  title: "Quéfreen Almeida - Product Designer",
  description: "Portfólio de UX/UI e Product Design de Quéfreen.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${sora.className} antialiased bg-[#F6F6F6] text-neutral-900`}>
        <Navbar />
        <ScrollTop />
        {children}
      </body>
    </html>
  );
}
