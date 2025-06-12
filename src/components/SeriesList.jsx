import React from "react";
// Si usas import, descomenta la siguiente línea y ajusta la ruta si es necesario
// import series from "../data/series.json";

const SeriesList = ({ series }) => (
  <div className="overflow-x-auto bg-gray-700 rounded-xl shadow-lg p-4">
    <table className="min-w-full divide-y divide-white">
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
      <tbody className="bg-gray-700 divide-y divide-gray-200">
        {series.slice(0, 20).map((serie, idx) => (
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
  </div>
);

export default SeriesList;
