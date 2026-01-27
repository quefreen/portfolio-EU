import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import Tooltip from "./ToolTip"
import Spline from "@splinetool/react-spline"
import Image from "next/image"

export function Hero2026() {
  return (
    <div className="w-full pt-10">
      
      {/* Hero Section com Spline e textos nos cantos */}
      <section
        className="relative w-full overflow-hidden bg-[#F7F7F7] pt-10"
        style={{ height: 800 }}
      >
        {/* Spline de fundo */}
        <div className="absolute inset-0 z-0">
          <Spline scene="https://prod.spline.design/asZQCydgchLhW7Tj/scene.splinecode" />
        </div>

        {/* Textos por cima (NÃO BLOQUEIAM O MOUSE) - MESMO CONTAINER DO MENU */}
        <div className="pointer-events-none relative z-10 mx-auto h-full w-full max-w-[1400px] px-8 sm:px-4 md:px-12 lg:px-28">
          <div className="relative h-full">
            {/* Top-left com margin-top de 80px */}
            <p
              className="absolute left-0 font-bricolageGrotesque font-semibold leading-[1.2] text-[#FF4C2C]"
              style={{ 
                fontSize: "clamp(24px, 2.6vw, 40px)", 
                maxWidth: "16ch",
                top: "80px" 
              }}
            >
              Product Designer exploring AI and programming.
            </p>

            {/* Bottom-right */}
            <p
              className="absolute bottom-0 right-0 text-left font-bricolageGrotesque font-semibold leading-[1.2] text-[#131415]"
              style={{ 
                fontSize: "clamp(14px, 2vw, 24px)", 
                maxWidth: "18ch" 
              }}
            >
              A creative generalist and problem-solver skilled in designing
              seamless workflows and structuring complex information.
            </p>
            
          </div>
        </div>
      </section>

      {/* Skills Marquee */}
     
    </div>
  );
}