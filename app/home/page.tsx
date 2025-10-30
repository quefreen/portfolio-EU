
import Bento from "../_components/Bento";
import CustomCursor from "../_components/CustomCursor";
import { Footer } from "../_components/footer";
import { Footerhome } from "../_components/Footerhome";
import { Hero } from "../_components/Hero";
import SmoothRouteScroll from "../_components/SmoothRouteScroll";


export default function Home() {
  return (
    <main className="">
      <SmoothRouteScroll />
      <CustomCursor />
        <Hero />
        <Bento />
        <Footerhome />
        <Footer />

    </main>
  )
}