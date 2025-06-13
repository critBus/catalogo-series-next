import Image from "next/image";
import React from "react";
import series from "../data/series.json";
import "./Home.css";
import Carousel from "../components/Carousel"; // Adjusted import path

const Home = () => {
    //bg-[url('img/pngtree-tv-channel-wall-showing-lots-of-images-image_2969811.webp')] 
  return (
    <div className="container mx-auto p-6  flex flex-col gap-8">
      <div className="relative p-4 rounded-lg shadow-md text-white 
      
      bg-cover bg-center bg-no-repeat flex items-center justify-center sm:justify-between flex-wrap">
        <div className="absolute inset-0 bg-black opacity-60 rounded-lg"></div>
        <h2 className="relative z-10 text-4xl font-extrabold text-center sm:text-left mb-4 sm:mb-0">Más de 500 series en español</h2>
        <Image 
            src="/img/pareja5.png" 
            alt="Pareja en sofá viendo televisión" 
            width={192} 
            height={128} 
            className="relative z-10 h-auto rounded-lg shadow-lg" 
        />
      </div>
      <h2 className="text-3xl font-bold text-gray-800 text-left">Nuestras Series Destacadas</h2>

      <div className="flex flex-col lg:flex-row gap-8">
        <main className="w-full lg:w-3/4">
          <div className="bg-gray-700 p-6 rounded-xl shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-200 text-center mb-6">Acción</h2>
            <Carousel> {/* */}
              <div className="slider-card">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden w-full max-w-xs">
                  <Image 
                      src="/img/blindspot22.webp" 
                      alt="Imagen de la Serie Blindspot" 
                      width={600} 
                      height={400} 
                      className="w-full h-48 object-fit rounded-t-xl mx-auto" 
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">BLINDSPOT</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      Sigue la historia de Jane Doe, una mujer que es encontrada en Times Square sin memoria y con el cuerpo cubierto de tatuajes. 
                      Estos tatuajes contienen pistas sobre una gran conspiración criminal, que el FBI, liderado por el agente Kurt Weller, 
                      investiga para resolver el misterio de Jane y descubrir su verdadera identidad.
                    </p>
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                      Ver más
                    </button>
                  </div>
                </div>
              </div>

              <div className="slider-card">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden w-full max-w-xs">
                  <Image 
                      src="/img/alias-700x400-690x394.webp" 
                      alt="Imagen de la Serie S.W.A.T." 
                      width={700} 
                      height={400} 
                      className="w-full h-48 object-cover rounded-t-xl mx-auto" 
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">ALIAS</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      Sydney Bristow (Jennifer Garner), una espía de la CIA que trabaja para SD-6, una organización clandestina que descubre que es 
                      en realidad una organización criminal. Sydney, con ayuda de la CIA, busca derrocar al SD-6 y desentrañar los secretos de su pasado.
                    </p>
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                      Ver más
                    </button>
                  </div>
                </div>
              </div>

              <div className="slider-card">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden w-full max-w-xs">
                  <Image 
                      src="/img/six_3.webp" 
                      alt="Imagen de la Serie Walking Dead" 
                      width={600} 
                      height={400} 
                      className="w-full h-48 object-cover rounded-t-xl mx-auto" 
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">SIX</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      Narra las operaciones y la vida cotidiana de los Navy SEAL del Equipo Seis, una unidad de operaciones especiales de EE. UU
                    </p>
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                      Ver más
                    </button>
                  </div>
                </div>
              </div>

              <div className="slider-card">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden w-full max-w-xs">
                  <Image 
                      src="/img/blacklist_3.webp" 
                      alt="Imagen de la Serie Lista Negra" 
                      width={600} 
                      height={400} 
                      className="w-full h-48 object-cover rounded-t-xl mx-auto" 
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">LISTA NEGRA</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      Gira en torno a Raymond Reddington, uno de los criminales más buscados por el FBI, 
                      quien se entrega a la agencia y ofrece colaborar para atrapar a otros criminales de su "Lista Negra".
                    </p>
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                      Ver más
                    </button>
                  </div>
                </div>
              </div>

              <div className="slider-card">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden w-full max-w-xs">
                  <Image 
                      src="/img/seal team2.webp" 
                      alt="Imagen de la Serie Mentes Criminales" 
                      width={600} 
                      height={400} 
                      className="w-full h-48 object-cover rounded-t-xl mx-auto" 
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">SEAL TEAM</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      Narra la vida de un equipo de SEAL de la Marina de los Estados Unidos, la unidad más élite de la Armada.
                    </p>
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                      Ver más
                    </button>
                  </div>
                </div>
              </div>

              <div className="slider-card">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden w-full max-w-xs">
                  <Image 
                      src="/img/dark-angel.webp" 
                      alt="Imagen de la Serie Seal Team" 
                      width={600} 
                      height={400} 
                      className="w-full h-48 object-cover rounded-t-xl mx-auto" 
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">ANGEL NEGRO</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      Cuenta la historia de Max Guevara, una joven mujer genéticamente modificada que escapa de un laboratorio militar 
                      y se convierte en una fugitiva en un Seattle distópico del futuro cercano.
                    </p>
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                      Ver más
                    </button>
                  </div>
                </div>
              </div>

              <div className="slider-card">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden w-full max-w-xs">
                  <Image 
                      src="/img/banshee_3.webp" 
                      alt="Imagen de la Serie The Crown" 
                      width={600} 
                      height={400} 
                      className="w-full h-48 object-fit rounded-t-xl mx-auto" 
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">BANSHEE</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      Cuenta la historia de un exconvicto, Lucas Hood, que sale de prisión y se hace pasar por el sheriff de un pequeño pueblo llamado Banshee en Pensilvania. 
                      Lucas intenta encontrar a su antigua cómplice, Carrie, y evadir a su antiguo jefe, Rabbit, quien lo busca para vengarse.
                    </p>
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                      Ver más
                    </button>
                  </div>
                </div>
              </div>

              <div className="slider-card">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden w-full max-w-xs">
                  <Image 
                      src="/img/distrito slavaje_3.webp" 
                      alt="Imagen de la Serie Stranger Things" 
                      width={600} 
                      height={400} 
                      className="w-full h-48 object-cover rounded-t-xl mx-auto" 
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">DISTRITO SALVAJE</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      Cuenta la historia de Jhon Jeiver, un ex-guerrillero que escapa de la jungla tras la firma de los acuerdos de paz y se traslada a Bogotá, buscando una nueva vida. 
                      Al llegar a la ciudad, intenta reinsertarse en la sociedad, pero se ve envuelto en un mundo de corrupción y violencia, donde debe lidiar con su pasado y enfrentar decisiones difíciles.
                    </p>
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                      Ver más
                    </button>
                  </div>
                </div>
              </div>
            </Carousel> {/* */}
          </div>

          <div className="bg-gray-700 p-6 rounded-xl shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-200 text-center mb-6">Policiaco</h2>
            <Carousel> {/* */}
              <div className="slider-card">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden w-full max-w-xs">
                  <Image 
                      src="/img/swat-e1533208359413.webp" 
                      alt="Imagen de la Serie La Casa de Papel" 
                      width={600} 
                      height={400} 
                      className="w-full h-48 object-cover rounded-t-xl mx-auto" 
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">S W A T</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      Sigue la historia de Daniel "Hondo" Harrelson, un sargento del SWAT de Los Ángeles, quien es nombrado para liderar una nueva unidad de élite que resuelve crímenes en la ciudad. Hondo.
                    </p>
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                      Ver más
                    </button>
                  </div>
                </div>
              </div>
              <div className="slider-card">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden w-full max-w-xs">
                  <Image 
                      src="/img/xmentes-criminales.jpg" 
                      alt="Imagen de la Serie Sherlock" 
                      width={600} 
                      height={400} 
                      className="w-full h-48 object-cover rounded-t-xl mx-auto" 
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">MENTES CRIMINALES</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      Sigue a un equipo de perfiladores criminales del FBI que trabajan en la Unidad de Análisis de Conducta (BAU). 
                      Utilizan el análisis de comportamiento y la elaboración de perfiles para ayudar a investigar casos y capturar a criminales, especialmente asesinos en serie.
                    </p>
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                      Ver más
                    </button>
                  </div>
                </div>
              </div>
              <div className="slider-card">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden w-full max-w-xs">
                  <Image 
                      src="/img/fbi_3.webp" 
                      alt="Imagen de la Serie Narcos" 
                      width={600} 
                      height={400} 
                      className="w-full h-48 object-cover rounded-t-xl mx-auto" 
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">FBI</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      Es un drama policial que sigue la vida de una unidad de élite de agentes del FBI en la oficina de Nueva York.
                    </p>
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                      Ver más
                    </button>
                  </div>
                </div>
              </div>
              <div className="slider-card">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden w-full max-w-xs">
                  <Image 
                      src="/img/chicago pd_3.webp" 
                      alt="Imagen de la Serie Line of Duty" 
                      width={600} 
                      height={400} 
                      className="w-full h-48 object-cover rounded-t-xl mx-auto" 
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">CHICAGO PD</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      La serie explora las vidas de los agentes mientras se enfrentan a los desafíos diarios
                      de la lucha contra el crimen en la ciudad, incluyendo el crimen organizado, el tráfico de drogas y los asesinatos.
                    </p>
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                      Ver más
                    </button>
                  </div>
                </div>
              </div>
              <div className="slider-card">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden w-full max-w-xs">
                  <Image 
                      src="/img/csi_33.webp" 
                      alt="Imagen de la Serie Line of Duty" 
                      width={600} 
                      height={400} 
                      className="w-full h-48 object-cover rounded-t-xl mx-auto" 
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">CSI</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      Sigue a un equipo de investigadores forenses que utilizan la ciencia para resolver crímenes.
                    </p>
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                      Ver más
                    </button>
                  </div>
                </div>
              </div>
              <div className="slider-card">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden w-full max-w-xs">
                  <Image 
                      src="/img/24-jack-bauer.webp" 
                      alt="Imagen de la Serie Line of Duty" 
                      width={600} 
                      height={400} 
                      className="w-full h-48 object-cover rounded-t-xl mx-auto"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">24 HORAS</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      La serie transcurre en su mayor parte en la ciudad de Los Ángeles, y trata sobre situaciones de amenaza o ataques masivos a la seguridad nacional de Estados Unidos,
                    </p>
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                      Ver más
                    </button>
                  </div>
                </div>
              </div>
            </Carousel> {/* */}
          </div>

          <div className="bg-gray-700 p-6 rounded-xl shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-200 text-center mb-6">Terror</h2>
            <Carousel> {/* */}
              <div className="slider-card">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden w-full max-w-xs">
                  <Image 
                      src="/img/walking dead2.webp" 
                      alt="Imagen de la Serie Mindhunter" 
                      width={600} 
                      height={400} 
                      className="w-full h-48 object-cover rounded-t-xl mx-auto" 
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">WALKING DEAD</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      Narra la supervivencia de un grupo de humanos en un mundo postapocalíptico dominado por zombis, conocidos como "caminantes".
                    </p>
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                      Ver más
                    </button>
                  </div>
                </div>
              </div>
              <div className="slider-card">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden w-full max-w-xs">
                  <Image 
                      src="/img/the-vampire-diaries.webp" 
                      alt="Imagen de la Serie The Wire" 
                      width={600} 
                      height={400} 
                      className="w-full h-48 object-cover rounded-t-xl mx-auto" 
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">DIARIO DE UN VAMPIRO</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      Cuenta la historia de Elena Gilbert, una adolescente que se enamora de dos hermanos vampiros, Stefan y Damon Salvatore, en el pueblo de Mystic Falls. 
                      La serie explora el romance, los peligros sobrenaturales y la vida de los personajes mientras se enfrentan a amenazas vampíricas y otras criaturas de la noche.
                    </p>
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                      Ver más
                    </button>
                  </div>
                </div>
              </div>
              <div className="slider-card">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden w-full max-w-xs">
                  <Image 
                      src="/img/sleepy_3.jpeg" 
                      alt="Imagen de la Serie Broadchurch" 
                      width={600} 
                      height={400} 
                      className="w-full h-48 object-cover rounded-t-xl mx-auto" 
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">SLEEPY HOLLOW</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      Ichabod Crane, resucitado dos siglos y medio después de la Guerra de Independencia, debe detener al jinete sin cabeza, que amenaza con desencadenar el apocalipsis. Junto con una joven policía, Abbie Mills, 
                      Crane investiga crímenes sobrenaturales y desvela un misterio que se remonta a los padres fundadores de Estados Unidos.
                    </p>
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                      Ver más
                    </button>
                  </div>
                </div>
              </div>
              <div className="slider-card">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden w-full max-w-xs">
                  <Image 
                      src="/img/originales_3.webp" 
                      alt="Imagen de la Serie True Detective" 
                      width={600} 
                      height={400} 
                      className="w-full h-48 object-fit rounded-t-xl mx-auto" 
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">LOS ORIGINALES</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      Sigue la historia de la familia vampírica Mikaelson. Después de abandonar Nueva Orleans, la familia regresa a la ciudad para reclamar el control y enfrentarse a sus enemigos, tanto humanos como sobrenaturales.
                    </p>
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                      Ver más
                    </button>
                  </div>
                </div>
              </div>
              <div className="slider-card">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden w-full max-w-xs">
                  <Image 
                      src="/img/supernatural_3.jpg" 
                      alt="Imagen de la Serie True Detective" 
                      width={600} 
                      height={400} 
                      className="w-full h-48 object-cover rounded-t-xl mx-auto" 
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">SUPERNATURAL</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      Sigue a los hermanos Sam y Dean Winchester mientras viajan por Estados Unidos investigando y combatiendo eventos paranormales.
                    </p>
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                      Ver más
                    </button>
                  </div>
                </div>
              </div>
              <div className="slider-card">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden w-full max-w-xs">
                  <Image 
                      src="/img/last of us_33.webp" 
                      alt="Imagen de la Serie True Detective" 
                      width={600} 
                      height={400} 
                      className="w-full h-48 object-cover rounded-t-xl mx-auto" 
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">THE LAST OF US</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      Se ambienta en un mundo postapocalíptico, 20 años después de que una pandemia causada por un hongo mutante, el Cordyceps, transformara a los humanos en criaturas agresivas y causara el colapso de la sociedad.
                    </p>
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                      Ver más
                    </button>
                  </div>
                </div>
              </div>
            </Carousel> {/* */}
          </div>

          <div className="bg-gray-700 p-6 rounded-xl shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-200 text-center mb-6">Aventuras</h2>
            <Carousel> {/* */}
              <div className="slider-card">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden w-full max-w-xs">
                  <Image 
                      src="/img/juego de tronos.jpg" 
                      alt="Imagen de la Serie The Killing" 
                      width={600} 
                      height={400} 
                      className="w-full h-48 object-cover rounded-t-xl mx-auto" 
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">JUEGO DE TRONOS</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      Se centra en la lucha por el Trono de Hierro, que gobierna los siete reinos de Poniente, y las intrincadas relaciones políticas, alianzas y traiciones entre varias casas nobiliarias.
                    </p>
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                      Ver más
                    </button>
                  </div>
                </div>
              </div>
              <div className="slider-card">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden w-full max-w-xs">
                  <Image 
                      src="/img/arrow2.webp" 
                      alt="Imagen de la Serie Luther" 
                      width={600} 
                      height={400} 
                      className="w-full h-48 object-cover rounded-t-xl mx-auto" 
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">ARROW</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      Oliver Queen, un multimillonario playboy que, después de ser dado por muerto tras un naufragio, regresa a su ciudad natal, Starling City, con una nueva determinación y una nueva identidad: Arrow.
                    </p>
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                      Ver más
                    </button>
                  </div>
                </div>
              </div>
              <div className="slider-card">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden w-full max-w-xs">
                  <Image 
                      src="/img/witcher_3.webp" 
                      alt="Imagen de la Serie Bosch" 
                      width={600} 
                      height={400} 
                      className="w-full h-48 object-cover rounded-t-xl mx-auto" 
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">THE WITCHER</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      Cuenta la historia de Geralt de Rivia, un cazador de monstruos mutante, en un mundo donde las personas pueden ser más malvadas que las criaturas que él caza.
                    </p>
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                      Ver más
                    </button>
                  </div>
                </div>
              </div>
              <div className="slider-card">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden w-full max-w-xs">
                  <Image 
                      src="/img/spartaco_3.webp" 
                      alt="Imagen de la Serie Criminal Minds" 
                      width={600} 
                      height={400} 
                      className="w-full h-48 object-cover rounded-t-xl mx-auto" 
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">ESPARTACO</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      Narra la vida de Espartaco, un tracio que se convierte en gladiador después de ser capturado por los romanos.
                    </p>
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                      Ver más
                    </button>
                  </div>
                </div>
              </div>
              <div className="slider-card">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden w-full max-w-xs">
                  <Image 
                      src="/img/shadowhunters1-.webp" 
                      alt="Imagen de la Serie Criminal Minds" 
                      width={600} 
                      height={400} 
                      className="w-full h-48 object-cover rounded-t-xl mx-auto" 
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">SHADOWHUNTER</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      Clary Fray, una joven que descubre en su cumpleaños que es una Cazadora de Sombras, mitad ángel y mitad humana, con la misión de proteger el mundo de los demonios.
                    </p>
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                      Ver más
                    </button>
                  </div>
                </div>
              </div>
              <div className="slider-card">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden w-full max-w-xs">
                  <Image 
                      src="/img/vikingos_3.jpg" 
                      alt="Imagen de la Serie Criminal Minds" 
                      width={600} 
                      height={400} 
                      className="w-full h-48 object-cover rounded-t-xl mx-auto" 
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">VIKINGOS</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      Narra la historia del legendario guerrero vikingo Ragnar Lothbrok y su banda, mientras se embarcan en una serie de viajes, saqueos y batallas en Europa medieval.
                    </p>
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                      Ver más
                    </button>
                  </div>
                </div>
              </div>
            </Carousel> {/* */}
          </div>
        </main>

        <aside className="w-full lg:w-1/4">
          <div className="bg-gray-800 rounded-xl shadow-lg p-6 h-fit text-gray-200">
            <h3 className="text-2xl font-bold text-white mb-6 border-b-2 border-blue-500 pb-2">Series de Estreno</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="block text-blue-300 hover:text-blue-100 font-semibold transition duration-300">
                  <i className="fas fa-star text-yellow-400"></i>
                  <span className="text-gray-400 text-sm">13 Abril 2025</span> - The Last of Us 2T
                </a>
              </li>
              <li>
                <a href="#" className="block text-blue-300 hover:text-blue-100 font-semibold transition duration-300">
                  <i className="fas fa-star text-yellow-400"></i>
                  <span className="text-gray-400 text-sm">21 Mayo 2025</span> - Chicago PD 12T
                </a>
              </li>
              <li>
                <a href="#" className="block text-blue-300 hover:text-blue-100 font-semibold transition duration-300">
                  <i className="fas fa-star text-yellow-400"></i>
                  <span className="text-gray-400 text-sm">15 Marzo 2025</span> - FBI Most Wanted 6T
                </a>
              </li>
              <li>
                <a href="#" className="block text-blue-300 hover:text-blue-100 font-semibold transition duration-300">
                  <i className="fas fa-star text-yellow-400"></i>
                  <span className="text-gray-400 text-sm">20 Mayo 2025</span> - FBI 7T
                </a>
              </li>
              <li>
                <a href="#" className="block text-blue-300 hover:text-blue-100 font-semibold transition duration-300">
                  <i className="fas fa-star text-yellow-400"></i>
                  <span className="text-gray-400 text-sm">8 Mayo 2025</span> - Mentes Criminales 18T
                </a>
              </li>
              <li>
                <a href="#" className="block text-blue-300 hover:text-blue-100 font-semibold transition duration-300">
                  <i className="fas fa-star text-yellow-400"></i>
                  <span className="text-gray-400 text-sm">18 Octubre 2024</span> - S W A T 8T
                </a>
              </li>
              <li>
                <a href="#" className="block text-blue-300 hover:text-blue-100 font-semibold transition duration-300">
                  <i className="fas fa-star text-yellow-400"></i>
                  <span className="text-gray-400 text-sm">4 Mayo 2025</span> - The Walking Dead: Dead City 2T
                </a>
              </li>
              <li>
                <a href="#" className="block text-blue-300 hover:text-blue-100 font-semibold transition duration-300">
                  <i className="fas fa-star text-yellow-400"></i>
                  <span className="text-gray-400 text-sm">17 Abril 2025</span> - Law & Order: Organized Crime 5T
                </a>
              </li>
              <li>
                <a href="#" className="block text-blue-300 hover:text-blue-100 font-semibold transition duration-300">
                  <i className="fas fa-star text-yellow-400"></i>
                  <span className="text-gray-400 text-sm">5 Mayo 2025</span> - The Equalizer 5T
                </a>
              </li>
              <li>
                <a href="#" className="block text-blue-300 hover:text-blue-100 font-semibold transition duration-300">
                  <i className="fas fa-star text-yellow-400"></i>
                  <span className="text-gray-400 text-sm">20 Marzo 2025</span> - Gangs of London 3T
                </a>
              </li>
            </ul>
          </div>
          <div className="bg-sky-950 p-6 rounded-xl shadow-lg text-white mt-6">
            <h3 className="text-2xl font-bold text-white mb-6 border-b-2 border-orange-500 pb-2">Próximos Lanzamientos</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <i className="fas fa-calendar-alt text-orange-400"></i>
                <span>Blade Runner 2099 - 2025</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-calendar-alt text-orange-400"></i>
                <span>The Witcher (Temporada 4) - 2025</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-calendar-alt text-orange-400"></i>
                <span>Daredevil: Born Again - 2025</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-calendar-alt text-orange-400"></i>
                <span>El Caballero de los Siete Reinos - Finales de 2025</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-calendar-alt text-orange-400"></i>
                <span>Andor (Temporada 2) - 2025</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-calendar-alt text-orange-400"></i>
                <span>Alien: Planeta Tierra - Agosto de 2025</span>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Home;