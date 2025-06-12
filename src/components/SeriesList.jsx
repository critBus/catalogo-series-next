"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const SeriesList = ({ series }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 20;

  // Reiniciar la página al cambiar la lista de series
  useEffect(() => {
    setCurrentPage(0);
  }, [series]);

  // Calcular total de páginas
  const totalPages = Math.ceil(series.length / itemsPerPage);

  // Manejadores de navegación
  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (pageNumber) => {
    if (pageNumber >= 0 && pageNumber < totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  // Calcular elementos actuales para mostrar
  const startIndex = currentPage * itemsPerPage;
  const currentSeries = series.slice(startIndex, startIndex + itemsPerPage);

  // Manejo de casos sin series
  if (series.length === 0) {
    return (
      <div className="text-white text-center p-4">
        No hay series disponibles
      </div>
    );
  }

  // Función para generar los botones dinámicos de página
  const renderPaginationButtons = () => {
    const buttons = [];

    // Botón "Primera"
    if (currentPage > 0) {
      buttons.push(
        <button
          key="first"
          onClick={() => goToPage(0)}
          className="px-3 py-1 rounded bg-blue-500 hover:bg-blue-600 text-white"
        >
          Primera
        </button>
      );
    }

    // Botón "Anterior-10"
    if (currentPage > 10) {
      buttons.push(
        <button
          key="prev10"
          onClick={() => goToPage(currentPage - 10)}
          className="px-3 py-1 rounded bg-blue-500 hover:bg-blue-600 text-white"
        >
          Anterior-10
        </button>
      );
    }

    // Botón "Anterior-3"
    if (currentPage > 3) {
      buttons.push(
        <button
          key="prev3"
          onClick={() => goToPage(Math.max(0, currentPage - 3))}
          className="px-3 py-1 rounded bg-blue-500 hover:bg-blue-600 text-white"
        >
          Anterior-3
        </button>
      );
    }

    // Botón "Anterior"
    if (currentPage > 0) {
      buttons.push(
        <button
          key="prev"
          onClick={handlePrevPage}
          className="px-3 py-1 rounded bg-blue-500 hover:bg-blue-600 text-white"
        >
          Anterior
        </button>
      );
    }

    // Botón de página actual
    buttons.push(
      <button
        key={currentPage}
        className="px-3 py-1 rounded bg-blue-700 text-white"
        disabled
      >
        {currentPage + 1}
      </button>
    );

    // Botón "Siguiente"
    if (currentPage < totalPages - 1) {
      buttons.push(
        <button
          key="next"
          onClick={handleNextPage}
          className="px-3 py-1 rounded bg-blue-500 hover:bg-blue-600 text-white"
        >
          Siguiente
        </button>
      );
    }

    // Botón "Siguiente+3"
    if (currentPage < totalPages - 3) {
      buttons.push(
        <button
          key="next3"
          onClick={() => goToPage(Math.min(totalPages - 1, currentPage + 3))}
          className="px-3 py-1 rounded bg-blue-500 hover:bg-blue-600 text-white"
        >
          Siguiente+3
        </button>
      );
    }

    // Botón "Siguiente+10"
    if (currentPage < totalPages - 10) {
      buttons.push(
        <button
          key="next10"
          onClick={() => goToPage(Math.min(totalPages - 1, currentPage + 10))}
          className="px-3 py-1 rounded bg-blue-500 hover:bg-blue-600 text-white"
        >
          Siguiente+10
        </button>
      );
    }

    // Botón "Última"
    if (currentPage < totalPages - 1) {
      buttons.push(
        <button
          key="last"
          onClick={() => goToPage(totalPages - 1)}
          className="px-3 py-1 rounded bg-blue-500 hover:bg-blue-600 text-white"
        >
          Última
        </button>
      );
    }

    return buttons;
  };

  return (
    <div className="overflow-x-auto bg-gray-700 rounded-xl shadow-lg p-4">
      {/* Tabla de series */}
      <table className="min-w-full divide-y divide-white">
        {/* Cabecera */}
        <thead className="bg-gray-700">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-blue-300 uppercase tracking-wider">
              Título
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-blue-300 uppercase tracking-wider">
              Género
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-blue-300 uppercase tracking-wider">
              Temporadas
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-blue-300 uppercase tracking-wider">
              Año
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-blue-300 uppercase tracking-wider">
              Idioma
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-blue-300 uppercase tracking-wider">
              País
            </th>
          </tr>
        </thead>

        {/* Cuerpo de la tabla */}
        <tbody className="bg-gray-700 divide-y divide-gray-200">
          {currentSeries.map((serie, idx) => (
            <tr key={idx}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <Image
                      className="h-10 w-10 rounded-full object-cover"
                      src={serie.image ? `/img/p/${serie.image}` : ""}
                      alt={serie.título || "Serie"}
                      width={400}
                      height={400}
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-white">
                      <a
                        href={`/?serie=${encodeURIComponent(serie.título)}`}
                        className="hover:text-blue-300"
                      >
                        {serie.título}
                      </a>
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                {serie.genero}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-white text-center">
                {serie.temporada}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-white text-center">
                {serie.año}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                {serie.idioma}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                {serie.pais}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Controles de paginación */}
      <div className="flex flex-wrap gap-2 justify-center mt-4">
        {renderPaginationButtons()}
      </div>
    </div>
  );
};

export default SeriesList;
