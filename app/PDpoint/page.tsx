import CustomCursor from "../_components/CustomCursor";
import { DoublePD } from "../_components/PDpoint/DoublePD";
import { DualPD } from "../_components/PDpoint/DualHPX";
import { HeroPD } from "../_components/PDpoint/HeroPDpoint";
import { ResumoPD } from "../_components/PDpoint/ResumoPD";
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

    </main>
  )
}