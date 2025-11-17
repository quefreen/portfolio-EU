import CustomCursor from "../_components/CustomCursor";
import { Footer } from "../_components/footer";
import { FooterCormedix } from "../_components/FooterCormedix";
import { Footerhome } from "../_components/Footerhome";
import { HeroRPG } from "../_components/RPG/HeroRPG";
import { ResumoRPG } from "../_components/RPG/ResumoRPG";
import { TextRPG } from "../_components/RPG/TextRPG";

export default function RPG() {
  return (
    <main className="">
       
        <HeroRPG />
        <TextRPG />
        <ResumoRPG />
        <Footerhome />
        <Footer />
    
    </main>
  )
}