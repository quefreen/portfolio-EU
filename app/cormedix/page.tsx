import { BentoCormedix } from "../_components/BentoCormedix";
import { DualCormedix } from "../_components/dualCormedix";
import { Footer } from "../_components/footer";
import { FooterCormedix } from "../_components/FooterCormedix";
import { HeroCaseCormedix } from "../_components/heroCases";
import { ResumoCormedix } from "../_components/resumocormedix";
import { RetroCormedix } from "../_components/retroCormedix";
import { SolucaoCormedix } from "../_components/SolucaoCormedix";
import { TripleCormedix } from "../_components/tripleCormedix";



export default function Cormedix () {
  return (
    <div className="">
      <HeroCaseCormedix />
      <ResumoCormedix />
      <DualCormedix />
      <TripleCormedix />
      <BentoCormedix />
      <SolucaoCormedix />
      <RetroCormedix />
      <FooterCormedix />
      <Footer />
    </div>
  )
}