// components/Carousel.tsx
"use client"; // Directiva necesaria para usar hooks de cliente en Next.js App Router

import React, { useState, useRef, useEffect, useCallback, ReactNode } from 'react';

// Props que el componente aceptará
interface CarouselProps {
  children: ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);
  const [cardWidth, setCardWidth] = useState(0);
  const sliderWrapperRef = useRef<HTMLDivElement>(null);
  const totalCards = React.Children.count(children);

  /**
   * Actualiza el número de tarjetas visibles y el ancho de cada tarjeta
   * según el tamaño de la ventana. Se usa useCallback para memorizar la función.
   */
  const updateLayout = useCallback(() => {
    if (sliderWrapperRef.current) {
      let newCardsPerView = 1;
      if (window.innerWidth >= 768) { // Tailwind's md breakpoint
        newCardsPerView = 2;
      }
      
      setCardsPerView(newCardsPerView);

      // Calcula el ancho de cada tarjeta incluyendo el gap
      const wrapperWidth = sliderWrapperRef.current.offsetWidth;
      // Asumimos un gap de 2rem (32px) entre tarjetas
      const gap = newCardsPerView > 1 ? 32 : 0; 
      const newCardWidth = (wrapperWidth - gap * (newCardsPerView - 1)) / newCardsPerView;
      setCardWidth(newCardWidth);
    }
  }, []);

  /**
   * Efecto para inicializar y actualizar el layout en respuesta a cambios
   * de tamaño de la ventana.
   */
  useEffect(() => {
    updateLayout();
    window.addEventListener('resize', updateLayout);

    // Función de limpieza para remover el event listener
    return () => {
      window.removeEventListener('resize', updateLayout);
    };
  }, [updateLayout]);

  /**
   * Efecto para ajustar el índice actual si se vuelve inválido después
   * de un cambio de tamaño.
   */
  useEffect(() => {
    const maxIndex = Math.max(0, totalCards - cardsPerView);
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [cardsPerView, currentIndex, totalCards]);


  // Funciones para navegar
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, totalCards - cardsPerView));
  };

  // Calcula el desplazamiento del carrusel
  const offset = -currentIndex * (cardWidth + 32); // 32 es el gap

  return (
    <div className="slider-container relative">
      {/* Botón Anterior */}
      <button
        onClick={handlePrev}
        disabled={currentIndex === 0}
        className="slider-button left disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <i className="fas fa-chevron-left"></i>
      </button>

      {/* Botón Siguiente */}
      <button
        onClick={handleNext}
        disabled={currentIndex >= totalCards - cardsPerView}
        className="slider-button right disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <i className="fas fa-chevron-right"></i>
      </button>

      {/* Contenedor que oculta las tarjetas fuera de vista */}
      <div className="overflow-hidden" ref={sliderWrapperRef}>
        {/* Wrapper que se mueve con la transformación */}
        <div
          className="slider-wrapper flex gap-8 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(${offset}px)` }}
        >
          {/* Mapea los hijos (tarjetas) y les aplica el ancho calculado */}
          {React.Children.map(children, (child) => (
            <div style={{ flex: `0 0 ${cardWidth}px` }}>
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;