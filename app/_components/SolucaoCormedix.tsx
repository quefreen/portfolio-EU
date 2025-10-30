import Image from 'next/image';

export function SolucaoCormedix() {
  return (
    <div className="w-full py-16 md:py-12">
      
      <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-4 md:px-8 lg:px-12">
        <div className='max-w-[600px]'> 
        <h2 className="mx-0 md:mx-16">Projetando para clareza e credibilidade.</h2>
        <div className="h-4"></div>
        <p className='mx-0 md:mx-16'>O sucesso do lançamento dependia criticamente de superar dois desafios de percepção: a exigência de transparência do mercado financeiro e a necessidade de evidência científica da comunidade médica.</p>
      </div></div>

      <div className="h-16"></div>

      <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-4 md:px-8 lg:px-12 flex flex-col md:flex-row gap-6">
        
        <div className="w-full md:w-1/2 relative p-0 sm:p-16 md:p-16">
          <div className="w-full flex flex-col justify-start items-start gap-4">
            <h2 className=''>Confiança para o mercado.</h2>
            <div className="flex flex-col gap-y-4">
                          
              <p className='' >Para resolver essa falta de clareza, projetei um novo hub de Relações com Investidores focado em transparência e usabilidade.</p>
              <p>A solução foi dupla: primeiro, um dashboard financeiro interativo que transforma dados complexos de performance em insights visuais e fáceis de entender.</p>
              <p>Segundo, uma nova tabela de registros (SEC Filings) com filtros poderosos e a capacidade de baixar todos os relatórios oficiais em múltiplos formatos (PDF, XLS, HTML), dando ao mercado o acesso direto e a clareza que eles exigiam.</p>
            </div>
            

          </div>
          
        
        </div>
        
        <div className="w-full md:w-1/2 relative overflow-hidden h-[300px] md:h-auto">
          <Image 
            src="/cormedix-home.png" 
            alt="Dashboard de investidores do projeto CorMedix" 
            fill
            className="object-cover z-0"
          />
          
        </div>
        
      </div>
      
      <div className="h-48"></div>

         <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-4 md:px-8 lg:px-12 flex flex-col md:flex-row gap-6">
        
        <div className="w-full md:w-1/2 relative p-0 sm:p-16 md:p-16">
          <div className="w-full flex flex-col justify-start items-start gap-4">
            <h2 className=''>Confiança para o mercado.</h2>
            <div className="flex flex-col gap-y-4">
              <p className='' >Para resolver essa falta de clareza, projetei um novo hub de Relações com Investidores focado em transparência e usabilidade.</p>
              <p>A solução foi dupla: primeiro, um dashboard financeiro interativo que transforma dados complexos de performance em insights visuais e fáceis de entender.</p>
              <p>Segundo, uma nova tabela de registros (SEC Filings) com filtros poderosos e a capacidade de baixar todos os relatórios oficiais em múltiplos formatos (PDF, XLS, HTML), dando ao mercado o acesso direto e a clareza que eles exigiam.</p>
            </div>
          </div>
          
        
        </div>
        
        <div className="w-full md:w-1/2 relative overflow-hidden h-[300px] md:h-auto">
          <Image 
            src="/cormedix-home.png" 
            alt="Dashboard de investidores do projeto CorMedix" 
            fill
            className="object-cover z-0"
          />
          
        </div>

        

      </div>

     <div className="h-48"></div>

      

    </div>
  )
}