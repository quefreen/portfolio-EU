import CustomCursor from "../_components/CustomCursor";
import { Footer } from "../_components/footer";
import { FooterCormedix } from "../_components/FooterCormedix";
import { DoublePD } from "../_components/PDpoint/DoublePD";
import { DualPD } from "../_components/PDpoint/DualHPX";
import { HeroPD } from "../_components/PDpoint/HeroPDpoint";
import { PDRetro } from "../_components/PDpoint/PDretro";
import { ResumoPD } from "../_components/PDpoint/ResumoPD";
import { RetroPDpoint } from "../_components/PDpoint/RetroPD";
import { TriplePD } from "../_components/PDpoint/TriplePD";


export default function Home() {
  return (
    <main className="">
    <CustomCursor />
    <HeroPD />
    <ResumoPD />
    <DualPD />
    <DoublePD />
    <TriplePD />
   <PDRetro />
    <FooterCormedix />
    <Footer />
    </main>
  )
}