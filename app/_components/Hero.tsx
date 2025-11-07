import "tippy.js/dist/tippy.css";        /* base */
import "tippy.js/themes/light.css";      /* se quiser tema */
import Tooltip from "./ToolTip"
import Spline from "@splinetool/react-spline"
export function Hero () {
  return (
 
     <div className="">
         <div className="w-full">
      
      
      <div className="max-w-[1280px] mx-auto w-full px-4 sm:px-8 md:px-12 lg:px-20">
        
        <div className="h-4"></div>
      </div>

      <div className="h-8"></div>
      
      <div className="max-w-[1280px] mx-auto w-full flex flex-col md:flex-row px-4 sm:px-8 md:px-12 lg:px-20">
        

      {/* Spline */}
      <div className="relative w-full md:w-3/5  relative h-[720px]">
        <div className="absolute inset-0 z-[5]">
          <Spline scene="https://prod.spline.design/AIfe4jRcveYWT6HX/scene.splinecode " />
        </div>


        
          <div className="w-full flex flex-col justify-start items-start">
            
            <div className="self-stretch flex flex-col justify-start items-start">
              
            </div>
          </div>
          
          
        </div>
        
        <div className="relative w-full md:w-2/5  relative h-[720px]">
          <div className="h-full flex flex-col justify-center items-start">
            
            <div className="whitespace-pre-line self-stretch flex flex-col justify-start items-start gap-2.5 ">
              <h2 className="">Olá, sou Quef.
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
       text-[14px] leading-[10px] font-semibold
      rounded-[3px] bg-white text-[#131415]   /* ou sua cor */
      align-super -translate-y-6    translate-x-0         /* levanta um pouco */
      ml-1 select-none cursor-help
    "
    tabIndex={0}
  >
    2
  </sup>
</Tooltip>
               
               {"\n"}especializado {"\n"}no setor de saúde.
               
                <Tooltip content="Simplificando experiências de farmacêuticas e med-tech." maxWidth={170} offset={[0, 40]} >
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
</Tooltip>

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

  )
}