  

import Spline from "@splinetool/react-spline"
import Link from "next/link"

export function TextRPG() {
  return (
   

<div className="max-w-[1400px] mx-auto w-full px-4 sm:px-4 md:px-8 lg:px-12">
  <div className="flex w-full max-w-[1440px] mx-auto px-4 sm:px-8 md:px-24 flex-col items-center">
    {/* Espaço antes do título */}
    <div className="h-4 md:h-12" />

    <div className="w-full flex flex-col justify-start items-center gap-3 md:gap-4">
      <h1 className="text-center">
        Um mundo de magia, dragões e aventureiros despreparados.
      </h1>
      {/* Espaço depois do título */}
      <div className="h-3 md:h-12" />
    </div>

    <div className="w-full flex justify-center">
      <iframe
        data-testid="embed-iframe"
        src="https://open.spotify.com/embed/episode/312H3Bqjw0DYBOvWdUBMRK?utm_source=generator&theme=0"
        className="w-full md:w-3/4 h-[160px] md:h-[300px]"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>

    {/* Espaço depois do player */}
    <div className="h-8 md:h-0" />
  </div>
</div>







    

            

  )
}
  
  
  
  
  
  
  
  
  
  