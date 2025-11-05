import React from 'react';

// Recomenda-se definir as cores customizadas 'hard-gray', 'orange', 'gray' no tailwind.config.js
// Caso não estejam definidas, substitua-as pelos valores literais do Tailwind (ex: text-zinc-500)

function LiverCheckupContent() {
  return (
    <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-4 md:px-8 lg:px-12 ">
      
      {/* Título: Linha Laranja e Texto */}

      
      <div className='mx-0 md:mx-16'>
        <h4
          className="text-[1rem] leading-[100%] text-[#999] font-semibold"
          style={{ fontFamily: 'var(--font-schibstedGrotesk), sans-serif' }}
        >
          INSIGHTS
        </h4>
        <div className="h-6"></div>
      <div className="flex items-center gap-2 ">
        <div className="w-[2rem] h-2 rounded-full bg-orange-500"></div>
        {/* Linha Laranja Estilizada */}
        
        <div className="h-12"></div>
        <h1 className="text-black text-4xl font-semibold font-['Schibsted_Grotesk'] leading-10">
          Check-up do figado
        </h1>
        <div className="h-10"></div>
      </div>
    <p className='text-[1.2rem] leading-7'>Este insight gerou a principal proposta de conteúdo: deslocar a comunicação do "medo da doença" (ex: "Você pode ter hepatite e não saber") para o território da "proatividade e bem-estar" (ex: "Como anda a saúde do seu fígado?").</p>
    <div className="h-12"></div>
<div className="relative ">
      {/* Ícone (SVG) */}
      <div className=" absolute top-0 left-0 z-0 opacity-50">
        <svg width="121" height="98" viewBox="0 0 121 98" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M43.6895 0L53.5442 14.1252L48.1241 18.0671C42.1018 22.447 37.5576 26.8816 34.4917 31.371C31.5353 35.7509 30.057 40.8425 30.057 46.6459V54.3655L26.1151 48.4526C32.904 48.4526 38.6526 50.752 43.361 55.3509C48.1789 59.9498 50.5878 65.7532 50.5878 72.761C50.5878 79.7689 48.1789 85.6817 43.361 90.4996C38.5431 95.3175 32.7397 97.7264 25.9509 97.7264C22.1185 97.7264 18.1766 96.7409 14.1252 94.77C10.0738 92.799 6.67934 89.5689 3.94191 85.0795C1.31397 80.4806 0 74.294 0 66.5197C0 56.1174 2.84693 45.6057 8.5408 34.9844C14.3442 24.2537 23.1587 14.6727 34.9844 6.24135L43.6895 0ZM110.209 0L120.064 14.1252L114.644 18.0671C108.621 22.447 104.077 26.8816 101.011 31.371C98.0549 35.7509 96.5767 40.8425 96.5767 46.6459V54.3655L92.6348 48.4526C99.4236 48.4526 105.172 50.752 109.881 55.3509C114.699 59.9498 117.107 65.7532 117.107 72.761C117.107 79.7689 114.699 85.6817 109.881 90.4996C105.063 95.3175 99.2594 97.7264 92.4706 97.7264C88.6381 97.7264 84.6962 96.7409 80.6448 94.77C76.5934 92.799 73.199 89.5689 70.4616 85.0795C67.8336 80.4806 66.5197 74.294 66.5197 66.5197C66.5197 56.1174 69.3666 45.6057 75.0605 34.9844C80.8638 24.2537 89.6784 14.6727 101.504 6.24135L110.209 0Z" fill="#FFC499"/>
        </svg>
      </div>

      
    <div className=''>
      {/* Bloco de Texto Principal (Citação/Declaração) */}
      <div className="translate-y-6">
        <p className="text-black text-4xl font-['Schibsted_Grotesk'] leading-10 relative z-10 ">
          <span className="font-semibold">Volto a dizer: é simples e barato.</span>
          <br className="lg:hidden"/> {/* Quebra de linha para responsividade em telas menores */}
          <span className="text-hard-gray font-semibold relative z-10">
            Todo mundo pensa em check-up do coração, check-up urológico ou ginecológico,
          </span>
          {' '}
          <span className="text-orange font-semibold relative z-10">
            mas ninguém pensa no check-up do fígado
          </span>
          <span className="text-black">, que é muito barato e pode salvar milhares de vidas.</span>
        </p>
      
</div>
    <div className="h-12"></div></div>

      {/* Fonte da Citação */}
      <div className="mt-2">
        <p className="text-hard-gray text-base font-semibold font-['Schibsted_Grotesk'] leading-4 ">
          Fala de um HEPATOLOGISTA durante a entrevista.
        </p>
      </div></div>

      
      <div className="h-12"></div>
      {/* Motivações de Negócios */}
      <div className="self-stretch flex flex-col justify-start items-start gap-4 mt-4">
        <h3 className="text-gray text-base font-semibold font-['Schibsted_Grotesk'] leading-4 uppercase">
          Motivações de Negócios
        </h3>
        <div className="self-stretch flex flex-col sm:flex-row justify-start items-start gap-2">
          
          {/* Cartão 1 */}
          <div className="p-4 bg-white border-2 border-stone-300 flex justify-center items-center flex-1 min-w-0">
            <p className="text-black text-[1rem] font-medium font-['Schibsted_Grotesk'] leading-7 text-center">
              Encontrar pessoas do grupo de risco
            </p>
          </div>
        <div className="h-36"></div>
          {/* Cartão 2 */}
          <div className="p-4 bg-white border-2 border-stone-300 flex justify-center items-center flex-1 min-w-0">
            <p className="justify-start text-black text-xl font-medium font-['Schibsted_Grotesk'] leading-7 text-[1rem]  text-center">
              Proteger o paciente no seu primeiro contato com a doença.
            </p>
          </div>
          <div className="h-12"></div>
          </div>
        </div>

        <div className="flex items-center gap-4 ">
        <div className="w-[2rem] h-2 rounded-full bg-orange-500"></div>
        {/* Linha Laranja Estilizada */}
        
        <div className="h-24"></div>
        <h1 className="text-black text-4xl font-semibold font-['Schibsted_Grotesk'] leading-10">
          Quiz
        </h1>
        <div className="h-10"></div>

        
      </div>
      <p className='text-[1.2rem] leading-7'>Para educar de forma interativa e privada, sugerimos o "Quiz para saber se estou vulnerável à transmissão?". É uma ferramenta de autoavaliação, não de diagnóstico.</p>
       </div>
      <div className="h-12"></div>
      <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-4 md:px-8 lg:px-12 ">
   <div className="h-[620px] overflow-hidden mx-0 md:mx-4 ">
           <img src="/quiz.jpg" alt="Quiz - Hepatite" className="w-full h-full object-cover"/>
        </div>
         <div className="self-stretch flex flex-col sm:flex-row justify-start items-start gap-5">
          
          {/* Cartão 1 */}
          <div className="p-4 bg-white border-2 border-stone-300 flex justify-center items-center flex-1 min-w-0">
            <p className="text-black text-xl font-medium font-['Schibsted_Grotesk'] leading-6 text-center">
              Encontrar pessoas do grupo de risco
            </p>
          </div>

          {/* Cartão 2 */}
          <div className="p-4 bg-white border-2 border-stone-300 flex justify-center items-center flex-1 min-w-0">
            <p className="justify-start text-black text-xl font-medium font-['Schibsted_Grotesk'] leading-6 text-center">
              Proteger o paciente no seu primeiro contato com a doença.
            </p>

          </div></div>
          

      <div className="flex items-center gap-4 ">
        <div className="w-[2rem] h-2 rounded-full bg-orange-500"></div>
        {/* Linha Laranja Estilizada */}
        
        <div className="h-24"></div>
        <h1 className="text-black text-4xl font-semibold font-['Schibsted_Grotesk'] leading-10">
          FAQ
        </h1>
        <div className="h-10"></div>

        
      </div>
      <p className='text-[1.2rem] leading-7'>Sugerimos um "FAQ (Perguntas Frequentes) com ajuda de médicos". O objetivo não é só listar fatos, mas criar uma plataforma de credibilidade para pacientes e médicos.</p>
       </div>
      <div className="h-12"></div>
      <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-4 md:px-8 lg:px-12 ">
   <div className="h-[620px] overflow-hidden mx-0 md:mx-4 ">
           <img src="/faq.jpg" alt="Quiz - Hepatite" className="w-full h-full object-cover"/>
        </div>
         <div className="self-stretch flex flex-col sm:flex-row justify-start items-start gap-5">
          
          {/* Cartão 1 */}
          <div className="p-4 bg-white border-2 border-stone-300 flex justify-center items-center flex-1 min-w-0">
            <p className="text-black text-xl font-medium font-['Schibsted_Grotesk'] leading-6 text-center">
              Encontrar pessoas do grupo de risco
            </p>
          </div>

          {/* Cartão 2 */}
          <div className="p-4 bg-white border-2 border-stone-300 flex justify-center items-center flex-1 min-w-0">
            <p className="justify-start text-black text-xl font-medium font-['Schibsted_Grotesk'] leading-6 text-center">
              Proteger o paciente no seu primeiro contato com a doença.
            </p>

          </div></div>
          

              <div className="flex items-center gap-4 ">
        <div className="w-[2rem] h-2 rounded-full bg-orange-500"></div>
        {/* Linha Laranja Estilizada */}
        
        <div className="h-24"></div>
        <h1 className="text-black text-4xl font-semibold font-['Schibsted_Grotesk'] leading-10">
          Mitos e Verdades sobre a Hepatite C
        </h1>
        <div className="h-10"></div>

        
      </div>
      <p className='text-[1.2rem] leading-7'>Para combater a desinformação e o medo neste momento sensível, sugeri a série "Mitos e Verdades sobre Hepatite C". O objetivo é usar fatos diretos e acionáveis para informar.</p>
       </div>
      <div className="h-12"></div>
      <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-4 md:px-8 lg:px-12 ">
   <div className="h-[620px] overflow-hidden mx-0 md:mx-4 ">
           <img src="/mitos.jpg" alt="Quiz - Hepatite" className="w-full h-full object-cover"/>
        </div>
         <div className="self-stretch flex flex-col sm:flex-row justify-start items-start gap-5">
          
          {/* Cartão 1 */}
          <div className="p-4 bg-white border-2 border-stone-300 flex justify-center items-center flex-1 min-w-0">
            <p className="text-black text-xl font-medium font-['Schibsted_Grotesk'] leading-6 text-center">
              Encontrar pessoas do grupo de risco
            </p>
          </div>

          {/* Cartão 2 */}
          <div className="p-4 bg-white border-2 border-stone-300 flex justify-center items-center flex-1 min-w-0">
            <p className="justify-start text-black text-xl font-medium font-['Schibsted_Grotesk'] leading-6 text-center">
              Proteger o paciente no seu primeiro contato com a doença.
            </p>

          </div></div>

    </div>

    </div>
    
  );
}

export default LiverCheckupContent;