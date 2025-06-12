import React from "react";
import series from "../../data/series.json";
import SeriesList from "@/components/SeriesList";
const Page = () => {
  return (
    <main className="container mx-auto p-6 mt-4">
      <h2 className="text-3xl font-bold text-gray-800 text-left mb-8">
        Listados de Series
      </h2>
      <SeriesList series={series} />
    </main>
  );
};

export default Page;
