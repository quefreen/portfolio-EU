import CustomCursor from "../_components/CustomCursor";
import { Footer } from "../_components/footer";
import { FooterCormedix } from "../_components/FooterCormedix";
import { BentoHP } from "../_components/HPcomponents/BentoHP";
import { DualHP } from "../_components/HPcomponents/DualHP";
import { GaleriaHP } from "../_components/HPcomponents/GaleriaHP";
import { HeroHP } from "../_components/HPcomponents/HeroHP";
import { ResumoHP } from "../_components/HPcomponents/ResumoHP";
import { RetroHP } from "../_components/HPcomponents/RetroHP";

export default function Home() {
  return (
    <main className="">
    
    <HeroHP />
    <ResumoHP />
    <DualHP />
    <BentoHP />
    <GaleriaHP />
    <RetroHP />
    <FooterCormedix />
    <Footer />
    </main>
  )
}