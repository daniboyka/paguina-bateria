import fondo11 from "../../utiles/IMG/Fondos/fondo11.jpg";
import fondo01 from "../../utiles/IMG//local/img_00.jpg";
import fondo02 from "../../utiles/IMG//local/img_07.jpg";
import fondo03 from "../../utiles/IMG//local/img_11.jpg";
import { useContext } from "react";
import { BateriatContext } from "../../Contex";
import { Contactanos } from "../../Componentes/Contactanos";

export const Servicios = () => {
  const Context = useContext(BateriatContext);

  const showProduct = () => {
    Context.abrirContactos();
  };

  const textoBlanco = {
    color: "white", // Cambia el color del texto a blanco
  };

  return (
    <section
      style={{
        backgroundImage: `url('${fondo11}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="py-10"
    >
      {" "}
      {/* Fondo azul oscuro */}
      <div>
        <Contactanos />
      </div>
      <div className="container mx-auto">
        <h2
          style={textoBlanco}
          className="text-3xl font-semibold text-center mb-6"
        >
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Detalle de Servicios */}
          <div className="bg-white bg-opacity-60 backdrop-blur-md rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Instalación de Baterías
            </h3>
            <p className="text-gray-900">
              Ofrecemos servicios profesionales de instalación de baterías para
              garantizar un rendimiento óptimo de su vehículo.
            </p>
          </div>

          {/* Otras descripciones de servicios */}
          <div className="bg-white bg-opacity-60 backdrop-blur-md rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Diagnóstico de Baterías
            </h3>
            <p className="text-gray-900">
              Realizamos diagnósticos precisos de baterías para identificar
              problemas y garantizar su buen funcionamiento.
            </p>
          </div>
        </div>

        {/* Llamado a la Acción */}
        <div className="text-center mt-8">
          <p className="text-white/50 text-lg mb-4">
            ¿Listo para beneficiarte de nuestros servicios?
          </p>
          <button
            onClick={() => showProduct()}
            className="bg-gray-200 font-semibold text-black py-2 px-4 rounded-lg text-lg hover:text-red-600 hover:border-red-600"
          >
            Contáctanos
          </button>
        </div>

        {/* Imágenes */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-white mb-4">
            Nuestra Experiencia
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <img
                src={fondo02}
                alt="Servicio 1"
                className="w-full sm:h-auto h-40 object-cover"
              />
            </div>

            <div className=" flex items-center justify-center bg-black rounded-lg shadow overflow-hidden">
              <img
                src={fondo01}
                alt="Servicio 2"
                className="w-full sm:h-auto h-40 object-cover"
              />
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden">
              <img
                src={fondo03}
                alt="Servicio 3"
                className="w-full sm:h-auto h-40 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Política de Garantía */}
        <div className="mt-12 rounded-lg shadow bg-white bg-opacity-60 backdrop-blur-md p-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Política de Garantía
          </h3>
          <p className="text-gray-600">
            Garantizamos la calidad de nuestras baterías y servicios. Ofrecemos
            una política de garantía que cubre los posibles problemas que puedan
            surgir después de la instalación.
          </p>
        </div>
      </div>
    </section>
  );
};
