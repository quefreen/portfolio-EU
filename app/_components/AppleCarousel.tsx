'use client'; // Necessário pois usa hooks (useState, etc)

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// Importe os estilos CSS da Swiper (essencial)
// Se o seu CSS global sobrescreveu da última vez, é porque
// estes imports precisam estar no topo do seu componente .tsx
// ou no seu 'layout.tsx', e não no 'globals.css'.
import 'swiper/css';
import 'swiper/css/navigation';

// Nossas 5 imagens de exemplo (coloque na pasta /public)
const images = [
  '/pdpoint1.jpg', // Troque pelos seus caminhos
  '/pdpoint2.jpg',
  '/pdpoint3.jpg',
  '/pdpoint4.jpg',
  '/pdpoint5.jpg',
];

export function AppleCarousel() {
  return (
    // O 'h-[70vh]' é um exemplo. Ajuste a altura como preferir.
    <div className="relative w-full h-[70vh]">
      
      <Swiper
        // Importa o módulo de Navegação
        modules={[Navigation]}
        // Conecta nossas classes customizadas
        navigation={{
          nextEl: '.apple-nav-next',
          prevEl: '.apple-nav-prev',
        }}
        loop={true} // Faz o carrossel ser infinito
        className="w-full h-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* --- Navegação Customizada (Estilo Apple) --- */}
      {/* Posicionada no canto superior direito, na frente (z-10) */}
      <div className="absolute -top-10 right-4 z-10 flex gap-2">
        
        {/* Botão Voltar (com a classe apple-nav-prev) */}
        <button className="apple-nav-prev w-8 h-8 rounded-full bg-black/30 text-white flex items-center justify-center backdrop-blur-sm hover:bg-black/50 transition-colors">
          <FiChevronLeft className="w-5 h-5" />
        </button>
        
        {/* Botão Avançar (com a classe apple-nav-next) */}
        <button className="apple-nav-next w-8 h-8 rounded-full bg-black/30 text-white flex items-center justify-center backdrop-blur-sm hover:bg-black/50 transition-colors">
          <FiChevronRight className="w-5 h-5" />
        </button>
      </div>
      
    </div>
  );
}