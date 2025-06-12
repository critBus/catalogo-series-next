import Image from "next/image";
import Header from "../components/Header";
import SeriesList from "../components/SeriesList";
import series from "../data/series.json";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* <Header /> */}
      <main className="container mx-auto p-6 mt-4">
        <h2 className="text-3xl font-bold text-gray-800 text-left mb-8">
          Listados de Series
        </h2>
        <SeriesList series={series} />
      </main>
      {/* Puedes agregar aquí el footer si lo necesitas */}
    </div>
  );
}
