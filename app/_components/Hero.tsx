import "tippy.js/dist/tippy.css";        /* base */
import "tippy.js/themes/light.css";      /* se quiser tema */
import Tooltip from "./ToolTip"
import Spline from "@splinetool/react-spline"
import Image from "next/image"
import SkillsMarquee from "../SkillsMarquee";



export function Hero () {
  return (
 
     <div className="">
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
      <div className="whitespace-pre-line self-stretch flex flex-col justify-start items-start gap-2.5 ">
        <h2 className="text-[30px] mx-auto sm:text-[24px] sm:leading-[24px] md:text-[32px] md:leading-[32px] lg:text-[40px] lg:leading-[40px]">
          Olá, sou Quef.
                <Tooltip content="Versão curta de Quéfreen." maxWidth={160} offset={[0, 40]}>
  <sup
    className="
      inline-flex items-center justify-center
      w-6 h-6           /* 12x12px */
       text-[14px] leading-[10px] font-semibold
      rounded-[3px] bg-white text-[#131415]   /* ou sua cor */
      align-super -translate-y-6    translate-x-1          /* levanta um pouco */
      ml-1 select-none cursor-help
    "
    tabIndex={0}
  >
    1
  </sup>
</Tooltip>
               {"\n"}Designer de produto
               
               <Tooltip content="10 anos como Diretor de Arte, agora projeto para pessoas." maxWidth={180} offset={[0, 40]}>
  <sup
    className="
      inline-flex items-center justify-center
      w-6 h-6           /* 12x12px */
       text-[14px] leading-[14px] font-semibold
      rounded-[3px] bg-white text-[#131415]   /* ou sua cor */
      align-super -translate-y-6    translate-x-0         /* levanta um pouco */
      ml-1 select-none cursor-help
    "
    tabIndex={0}
  >
    2
  </sup>
</Tooltip>{"\n"}que simplifica 
               

               
             

{"\n"}jornadas complexas.

                <Tooltip content="Explorar. Definir. Criar. Entregar." maxWidth={115} offset={[0, 40]}>
  <sup
    className="
      inline-flex items-center justify-center
      w-6 h-6           /* 12x12px */
       text-[14px] leading-[10px] font-semibold
      rounded-[3px] bg-white text-[#131415]   /* ou sua cor */
      align-super -translate-y-6    translate-x-1          /* levanta um pouco */
      ml-1 select-none cursor-help
    "
    tabIndex={0}
  >
    3
  </sup>
</Tooltip><p className="text-[1.2rem] text-[#666]">5 anos de experiência {"\n"}em UX, UI e produtos digitais.</p>




               </h2>
               
            </div>
            
          </div>
          
  
        </div>

      </div>
      
      <div className="h-8"></div>
      
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-8 md:px-12 lg:px-20">
      </div>
      
      
    </div>
  
    </div>

  )}