"use client";
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

  return (
    <div className="overflow-x-auto bg-gray-700 rounded-xl shadow-lg p-4">
      {/* Tabla de series */}
      <table className="min-w-full divide-y divide-white">
        {/* Cabecera (sin cambios) */}
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
                    <img
                      className="h-10 w-10 rounded-full object-cover"
                      src={
                        serie.image
                          ? `/img/${serie.image}`
                          : "https://placehold.co/40x40/CCCCCC/000000?text=No+Img"
                      }
                      alt={serie.título || "Serie"}
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
      <div className="flex justify-between items-center mt-4">
        {/* Botón Anterior */}
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 0}
          className={`px-4 py-2 rounded transition-colors ${
            currentPage === 0
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          } text-white`}
        >
          Anterior
        </button>

        {/* Números de página */}
        <div className="flex space-x-2">
          {Array.from({ length: totalPages }, (_, pageIndex) => (
            <button
              key={pageIndex}
              onClick={() => goToPage(pageIndex)}
              className={`px-3 py-1 rounded transition-colors ${
                currentPage === pageIndex
                  ? "bg-blue-700"
                  : "bg-blue-500 hover:bg-blue-600"
              } text-white`}
            >
              {pageIndex + 1}
            </button>
          ))}
        </div>

        {/* Botón Siguiente */}
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages - 1}
          className={`px-4 py-2 rounded transition-colors ${
            currentPage === totalPages - 1
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          } text-white`}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default SeriesList;
