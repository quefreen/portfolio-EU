import CustomCursor from "../_components/CustomCursor";
import { Footer } from "../_components/footer";
import { FooterCormedix } from "../_components/FooterCormedix";
import { DualPG } from "../_components/PG/DualPG";
import { HeroPG } from "../_components/PG/HeroPG";
import { IntroPG } from "../_components/PG/IntroPG";
import { ResumoPG } from "../_components/PG/ResumoPG";
import { RetroPG } from "../_components/PG/RetroPG";
import { TriplePG } from "../_components/PG/TriplePG";

export default function Home() {
  return (
    <main className="">
   <CustomCursor />
   <HeroPG />
   <ResumoPG />
   <IntroPG />
   <DualPG />
   <TriplePG />
   <RetroPG />
   <FooterCormedix />
   <Footer />
    
    </main>
  )
}