import Image from 'next/image';

export function FooterBase() {
  return (
    <div className="w-full bg-[#f6f6f6] ">
      
      <div className="relative h-[96px] w-full bg-[#f7f7f7]">
        
<div className="absolute inset-x-0 bottom-0 h-24 bg-[#131415] z-10 " />


          {/* SVG Esquerda Topo */}


        <div className="absolute left-0 bottom-[-54] w-[150px] h-[150px] pointer-events-none z-20"


             style={{backgroundImage: 'url(/esqtopo.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}} />


       


        {/* SVG Direita Topo */}


        <div className="absolute bottom-[-54] right-0 w-[150px] h-[150px] pointer-events-none z-[20]"


             style={{backgroundImage: 'url(/dirtopo.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}} />

        
        <div className="absolute inset-0 z-20 w-full max-w-6xl mx-auto">
          
         


          
        </div>
        
        
        
        
      </div>
    </div>
  )
}