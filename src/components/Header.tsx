import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaSearchengin } from "react-icons/fa";

const Header = () => (
  <header className="bg-gradient-to-r from-red-600 to-orange-700 text-white p-6 shadow-lg rounded-b-lg">
    <div className="container mx-auto mb-4">
      <Image
        src="/img/banner2_series.webp"
        alt="Banner del Catálogo de Series"
        width={1024}
        height={500}
        className="w-full h-auto object-cover rounded-lg"
      />
    </div>
    <div className="container mx-auto flex flex-col items-center">
      <div className="w-full flex justify-between items-center mb-4 sm:mb-0">
        <div className="flex items-center">
          <Image
            src="/img/logo-rogerseries.png"
            alt="Rogerseries Logo"
            width={300}
            height={300}
            className="w-12 h-12 mr-4"
          />
          <h1 className="text-4xl font-extrabold">Rogerseries</h1>
        </div>
      </div>
      <nav className="w-full">
        <ul className="flex flex-col space-y-2 lg:flex lg:flex-row lg:justify-center lg:space-y-0 lg:space-x-6 text-lg items-center mt-4 lg:mt-0">
          <li>
            <Link
              href="/"
              className="block text-center hover:text-blue-200 transition duration-300"
            >
              Inicio
            </Link>
          </li>
          <li>
            <a
              href="/Listados.html"
              className="block text-center hover:text-blue-200 transition duration-300"
            >
              Listados
            </a>
          </li>
          <li>
            <a
              href="/Imagenes.html"
              className="block text-center hover:text-blue-200 transition duration-300"
            >
              Imágenes
            </a>
          </li>
          <li>
            <a
              href="/Info.html"
              className="block text-center hover:text-blue-200 transition duration-300"
            >
              Info
            </a>
          </li>
          <li>
            <a
              href="/Contactos.html"
              className="block text-center hover:text-blue-200 transition duration-300"
            >
              Contactos
            </a>
          </li>
          <li className="mt-4 lg:mt-0 lg:ml-6 w-full sm:w-auto">
            <div className="flex items-center bg-white rounded-full p-1 shadow-md">
              <input
                type="text"
                placeholder="Buscar series..."
                className="px-4 py-1 rounded-full text-gray-800 focus:outline-none w-full sm:w-auto"
              />
              <button
                className="bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 transition duration-300 ml-2"
                aria-label="Search"
              >
                <FaSearchengin className="w-8 h-8" />
                {/* <Image
                  src="/icons/heroicons--magnifying-glass.svg"
                  width={400}
                  height={400}
                  className="w-8 h-8 text-white"
                  alt="El icono"
                ></Image> */}
                {/* <i className="fas fa-search"></i> */}
              </button>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
