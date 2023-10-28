import { useContext } from "react";
import { BateriatContext } from '../../Contex'
import fondo11 from "../../utiles/IMG/Fondos/fondo11.jpg";
import sucursal1 from "../../utiles/IMG/sucursales/sucursal1.jpg";
import sucursal2 from "../../utiles/IMG/sucursales/sucursal2.jpg";
import { Contactanos } from "../../Componentes/Contactanos";

export const Sucursales = () => {

  const Context = useContext(BateriatContext)

  const showProduct = () => {   
      Context.abrirContactos();
    };


  return (
    <div
      style={{
        backgroundImage: `url('${fondo11}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
            <div>
      <Contactanos/>
      </div>
      <h2 className="text-3xl text-white font-semibold p-3 mb-4">Nuestras Sucursales</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Sucursal 1 */}
        <div className="bg-white bg-opacity-60 rounded-lg p-4 shadow flex flex-col">
          <div className="text-lg mb-4">
            <div className="flex items-center justify-around">
              <div>
            <iframe
              width="100%"
              height="200"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1414.9076730317831!2d-58.25681764934565!3d-32.49310635935745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1698530562895!5m2!1ses-419!2sar"
              allowFullScreen=""
              title="Sucursal 1 Map"
            ></iframe>
              </div>
            <div className="flex flex-col gap-3 justify-center items-start">
            <p className="text-lg sm:text-xl subpixel-antialiased lining-nums ">
              <strong>Sucursal II</strong>
            </p>
            <p className="text-lg sm:text-xl subpixel-antialiased lining-nums ">
              <strong>Provincia:</strong> Entre Rios
            </p>
            <p className="text-lg sm:text-xl subpixel-antialiased lining-nums ">
              <strong>Localidad:</strong> Concepción del Uruguay
            </p>
            <p className="text-lg sm:text-xl subpixel-antialiased lining-nums ">
              <strong>Dirección:</strong> 25 de Agosto 932
            </p>

            </div>
          </div>

            </div>
            <div>
          <img
            src={sucursal2}
            alt="Sucursal 1"
            className="w-full h-64 object-cover rounded-md mb-4"          />

            </div>
        </div>

        {/* Sucursal 2 */}
        <div className="bg-white bg-opacity-60 rounded-lg p-4 shadow flex flex-col">
          <div className="text-lg mb-4">
            <div className="flex items-center justify-around">
              <div>
            <iframe
              width="100%"
              height="200"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1414.9076730317831!2d-58.25681764934565!3d-32.49310635935745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1698530562895!5m2!1ses-419!2sar"
              allowFullScreen=""
              title="Sucursal 1 Map"
            ></iframe>
              </div>
            <div className="flex flex-col gap-3 justify-center items-start">
            <p className="text-lg sm:text-xl subpixel-antialiased lining-nums ">
              <strong>Sucursal I</strong>
            </p>
            <p className="text-lg sm:text-xl subpixel-antialiased lining-nums ">
              <strong>Provincia:</strong> Entre Rios
            </p>
            <p className="text-lg sm:text-xl subpixel-antialiased lining-nums ">
              <strong>Localidad:</strong> Concepción del Uruguay
            </p>
            <p className="text-lg sm:text-xl subpixel-antialiased lining-nums ">
              <strong>Dirección:</strong> Entre Henry y Camino al Matadero
            </p>

            </div>
          </div>

            </div>
            <div>
          <img
            src={sucursal1}
            alt="Sucursal 1"
            className="w-full h-64 object-cover rounded-md mb-4"          />

            </div>
        </div>
<div className="m-5">
      <button
            onClick={() => showProduct()}
            className="bg-gray-200 font-semibold text-black py-2 px-4 rounded-lg text-lg hover:text-purple-600 hover:border-purple-600"
          >
            Contáctanos
          </button>
        </div>
      </div>
    </div>
  );
};
