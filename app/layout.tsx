// app/layout.tsx
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "./_components/menu";
import ScrollTop from "./_components/ScrollToTopButton";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // escolha os pesos que vai usar
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
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-83R4NEKXFP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-83R4NEKXFP');
          `}
        </Script>

        <Navbar />
        <ScrollTop />
        {children}
      </body>
    </html>
  );
}
