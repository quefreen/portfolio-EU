import "tippy.js/dist/tippy.css";        /* base */
import "tippy.js/themes/light.css";      /* se quiser tema */
import Tooltip from "./ToolTip"
import Spline from "@splinetool/react-spline"
import Image from "next/image"
import SkillsMarquee from "../SkillsMarquee";



export function Hero () {
  return (
 
     
         <div className="w-full">
      
      
      <div className="max-w-[1280px] mx-auto w-full px-4 sm:px-8 md:px-12 lg:px-20">
        
        
        <div className="h-4"></div>
      </div>

      <div className="h-16"></div>
      <div className="">< SkillsMarquee /></div>
      
      
<div className="max-w-[1280px] mx-auto w-full flex flex-col md:flex-row px-4 sm:px-8 md:px-12 lg:px-20">
  {/* BLOCO DO SPLINE / IMAGEM */}
  <div className="relative w-full md:w-3/5 h-auto md:h-[720px] mb-8 md:mb-0">
    {/* Mobile: imagem estática */}
    <div className="relative w-full max-w-[300px] sm:max-w-[420px] mx-auto md:hidden aspect-[4/5]">
      <Image
        src="/quef3d.png"
        alt="Ilustração 3D do Quef"
        fill
        className="object-cover"
        priority
      />
    </div>

    {/* Desktop: Spline */}
    <div className="absolute inset-0 hidden md:block">
      <Spline scene="https://prod.spline.design/asZQCydgchLhW7Tj/scene.splinecode" />
    </div>



    
  </div>
  {/* BLOCO DO TEXTO */}
<div className="relative w-full md:w-2/5 h-auto md:h-[720px]">
  <div className="h-full flex flex-col justify-center items-start">
    <h2
  className="
    text-[30px] mx-auto sm:text-[24px] sm:leading-[1.1]
    md:text-[32px] md:leading-[1.1]
    lg:text-[40px] lg:leading-[1.1]
  "
>
  {/* linha 1 */}
  <span className="block">
    Olá, sou Quef.
    <Tooltip content="Versão curta de Quéfreen." maxWidth={160} offset={[0, 40]}>
      <sup
        className="
          inline-block
    px-[0.3rem] py-[0.05rem]
    text-[0.4em] leading-none font-semibold
    rounded-[3px] bg-white text-[#131415]
    align-super
    ml-1 select-none cursor-help
        "
        tabIndex={0}
      >
        1
      </sup>
    </Tooltip>
  </span>

  {/* linha 2 */}
  <span className="block mt-1">
    Designer de produto
    <Tooltip
      content="10 anos como Diretor de Arte, agora projeto para pessoas."
      maxWidth={180}
      offset={[0, 40]}
    >
      <sup
        className="
          inline-block
    px-[0.3rem] py-[0.05rem]
    text-[0.4em] leading-none font-semibold
    rounded-[3px] bg-white text-[#131415]
    align-super
    ml-1 select-none cursor-help
        "
        tabIndex={0}
      >
        2
      </sup>
    </Tooltip>
  </span>

  {/* linha 3 */}
  <span className="block mt-1">
    que simplifica
  </span>

  {/* linha 4 */}
  <span className="block mt-1">
    jornadas complexas.
    <Tooltip
      content="Explorar. Definir. Criar. Entregar."
      maxWidth={115}
      offset={[0, 40]}
    >
      <sup
        className="
        inline-block
    px-[0.3rem] py-[0.05rem]
    text-[0.4em] leading-none font-semibold
    rounded-[3px] bg-white text-[#131415]
    align-super
    ml-1 select-none cursor-help
        "
        tabIndex={0}
      >
        3
      </sup>
    </Tooltip>
  </span>
  <p className="mt-4 text-[1.2rem] text-[#666] leading-relaxed">
  5 anos de experiência <br />
  em UX, UI e produtos digitais.
</p>
</h2>


  </div>
</div>

  </div>





     
  
    </div>

  )}