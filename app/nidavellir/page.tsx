import CustomCursor from "../_components/CustomCursor";
import { Footer } from "../_components/footer";
import { Footerhome } from "../_components/Footerhome";
import { HeroNid } from "../_components/Nidavellir/HeroNid";
import { ResumoNid } from "../_components/Nidavellir/ResumoNid";
import { TextNid } from "../_components/Nidavellir/TextNid";

export default function Nidavellir() {
  return (
    <main className="">
        
        <HeroNid />
        <TextNid />
        <ResumoNid />
        <Footerhome />
        <Footer />
      
    
    </main>
  )
}