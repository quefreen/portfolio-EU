import BentoHome from "./_components/Bento";
import CustomCursor from "./_components/CustomCursor";
import { Footer } from "./_components/footer";
import { Footerhome } from "./_components/Footerhome";
import { Hero } from "./_components/Hero";
import SmoothRouteScroll from "./_components/SmoothRouteScroll";
import { Suspense } from "react"




export default function Home() {
  return (
    <main className="">
      <div className="">
      

      <Suspense fallback={null}>
        <SmoothRouteScroll />
      </Suspense>

      {/* resto da home */}
    </div>
        <Hero />
        <BentoHome />
        <Footerhome/>
        <Footer />

    </main>
  )
}