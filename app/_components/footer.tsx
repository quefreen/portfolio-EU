export function Footer() {
  return (
    <div className="w-full bg-[#131415]">
        <div className="h-16"></div>
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 md:px-12 lg:px-20">
        <h2 className="text-white mx-0 md:mx-16">
          Para novos projetos, jogar RPG ou conversar sobre design entre em contato.
        </h2>
        <div className="h-8"></div>
        <div className="flex flex-col md:flex-row items-start md:items-center mx-0 md:mx-16 gap-4 md:gap-0">
          <p className="text-[#838383] font-semibold text-[1.5rem] mr-12" style={{ fontFamily: 'var(--font-schibstedGrotesk), sans-serif' }}>
            Chega mais, uai.
          </p>
          <a 
            href="https://www.linkedin.com/in/seu-usuario" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white text-[1rem] hover:text-orange-500 transition-colors mr-6"
            style={{ fontFamily: 'var(--font-schibstedGrotesk), sans-serif' }}
          >
            LinkedIn
          </a>
          <a 
            href="/caminho/do/seu-resume.pdf" 
            download
            className="text-white text-[1rem] hover:text-orange-500 transition-colors"
            style={{ fontFamily: 'var(--font-schibstedGrotesk), sans-serif' }}
          >
            Baixar Curriculo
          </a>
        </div>
      </div>

      <div className="w-full py-12">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-end px-4 sm:px-8 md:px-12 lg:px-20">
          <div className="flex flex-col gap-4">
            
            <a href="/" className="text-white text-lg font-medium hover:text-orange-500 transition-colors mx-0 md:mx-16" style={{ fontFamily: 'var(--font-schibstedGrotesk), sans-serif' }}>
              quefreen
            </a>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <p className="text-[1rem] text-white mx-0 md:mx-16" style={{ fontFamily: 'var(--font-schibstedGrotesk), sans-serif' }}>Feito com</p>
           
          </div>
        </div>
      </div>
    </div>
  )
}