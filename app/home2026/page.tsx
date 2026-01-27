import BentoHome2026 from "../_components/bento2026";
import CustomCursor from "../_components/CustomCursor";
import { Footer } from "../_components/footer";
import { Footerhome } from "../_components/Footerhome";
import { Hero2026 } from "../_components/hero2026";
import SmoothRouteScroll from "../_components/SmoothRouteScroll";
import { Suspense } from "react";




export default function Home() {
  return (
    <main className="">
      <div className="">
      

      <Suspense fallback={null}>
        <SmoothRouteScroll />
      </Suspense>

      {/* resto da home */}
    </div>
        <Hero2026 />
        <BentoHome2026 />
        <Footerhome/>
        <Footer />

    </main>
  )
}