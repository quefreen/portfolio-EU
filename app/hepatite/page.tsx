import CustomCursor from "../_components/CustomCursor";
import { Footer } from "../_components/footer";
import { FooterBase } from "../_components/FooterBase";
import { FooterCormedix } from "../_components/FooterCormedix";
import { Footerhome } from "../_components/Footerhome";
import { AbordagemH } from "../_components/Hepatite/AbordagemH";
import { DiscoveryH } from "../_components/Hepatite/DiscoveryH";
import { DoubleH } from "../_components/Hepatite/DoubleH";
import { HeroH } from "../_components/Hepatite/HeroH";
import LiverCheckupContent from "../_components/Hepatite/InsightsH";
import { ResumoH } from "../_components/Hepatite/ResumoH";
import { TriploH } from "../_components/Hepatite/TriploH";

export default function Hepatite() {
  return (
    <main className="">
      <CustomCursor />
     <HeroH />
     <ResumoH />
     <DoubleH />
     <AbordagemH />
     <TriploH />
     <DiscoveryH />
    <LiverCheckupContent />
    <Footerhome />
    <Footer />
    </main>
  )
}