import React from "react";
import HeroAnimation from "./components/HeroAnimation";
import Upload from "./components/Upload";

const Home = () => {
  return (
    <div className="h-screen">
      <section className="flex h-screen py-12 bg-gray-900 sm:pb-16 lg:pb-20 xl:pb-24 items-center">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center max-w-5xl grid-cols-1 mx-auto gap-y-8 lg:grid-cols-5 gap-x-16">
            <div className="max-w-md mx-auto text-center lg:max-w-none lg:col-span-3">
              <h1 className="text-4xl font-normal text-white uppercase sm:text-5xl lg:text-6xl xl:text-8xl">
                Analiza tu CV{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
                  CON IA
                </span>
              </h1>

              <p className="mt-6 text-lg font-normal text-white sm:text-xl">
                AnalizaMiCV te ayuda a optimizar tu currículum, identificando
                fortalezas y áreas de mejora. Sube tu CV y recibe un análisis
                detallado para destacar en el mercado laboral. Potencia tus
                oportunidades de empleo hoy mismo.
              </p>

              <div className="mt-8 sm:mt-10">
               <Upload/>
              </div>
            </div>

            <div className="lg:col-span-2 lg:order-first">
              <HeroAnimation />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
