import Image from 'next/image';

export function SolucaoCormedix() {
  return (
    <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-4 md:px-8 lg:px-12">
      <Image
        src="/cormedix-home.jpg"
        alt="Dashboard de investidores do projeto CorMedix"
        width={1920}           // <<< use a largura real do arquivo
        height={1080}          // <<< use a altura real do arquivo
        priority
        className="block w-full h-auto" // altura passa a ser definida pela imagem
        sizes="(min-width:1536px) 1400px,
               (min-width:1024px) calc(100vw - 96px),
               (min-width:640px)  calc(100vw - 32px),
               100vw"
      />
      <div className="h-24"></div>
    </div>
    
  );
}
