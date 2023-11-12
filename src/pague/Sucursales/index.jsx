import { useContext } from "react";
import { BateriatContext } from "../../Contex";
import fondo11 from "../../utiles/IMG/Fondos/fondo11.jpg";
import { Contactanos } from "../../Componentes/Contactanos";
import fondo01 from "../../utiles/IMG//local/img_00.jpg";

export const Sucursales = () => {
  const Context = useContext(BateriatContext);

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
        <Contactanos />
      </div>
      <h2 className="text-3xl text-white font-semibold p-3 mb-4">
        Nuestras Sucursales
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Sucursal 1 */}
        <div className="bg-white bg-opacity-60 rounded-lg p-4 shadow flex flex-col">
          <div className="text-lg mb-4">
            <div className="flex items-center justify-around">
              <div>
                <iframe
                  width="100%"
                  height="250"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3365.2411215908537!2d-58.26158101693432!3d-32.49298398150577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95afdbb609a4fe4f%3A0x2090c255092bab9d!2sIng.%20Henry%20%26%20Cno.%20al%20Matadero%20Municipal%2C%20Concepci%C3%B3n%20del%20Uruguay%2C%20Entre%20R%C3%ADos!5e0!3m2!1ses-419!2sar!4v1698544961709!5m2!1ses-419!2sar"
                  allowFullScreen=""
                  loading="lazy"
                  title="Sucursal 1 Map"
                ></iframe>
              </div>
              <div className="flex flex-col gap-3 justify-center items-start">
                <p className="text-lg sm:text-2xl subpixel-antialiased lining-nums">
                  <strong>Sucursal I</strong>
                </p>
                <br></br>
                <p className="text-lg sm:text-xl subpixel-antialiased lining-nums ">
                  <strong>Provincia:</strong> Buenos Aires
                </p>
                <p className="text-lg sm:text-xl subpixel-antialiased lining-nums ">
                  <strong>Localidad:</strong>  -
                </p>
                <p className="text-lg sm:text-xl subpixel-antialiased lining-nums ">
                  <strong>Dirección:</strong>  -
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              src={fondo01}
              alt="Sucursal 1"
              className="w-full h-64 object-cover rounded-md mb-4"
            />
          </div>
        </div>

        {/* Sucursal 2 */}
        <div className="bg-white bg-opacity-60 rounded-lg p-4 shadow flex flex-col">
          <div className="text-lg mb-4">
            <div className="flex items-center justify-around">
              <div>
              <iframe
                  width="100%"
                  height="250"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3365.2411215908537!2d-58.26158101693432!3d-32.49298398150577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95afdbb609a4fe4f%3A0x2090c255092bab9d!2sIng.%20Henry%20%26%20Cno.%20al%20Matadero%20Municipal%2C%20Concepci%C3%B3n%20del%20Uruguay%2C%20Entre%20R%C3%ADos!5e0!3m2!1ses-419!2sar!4v1698544961709!5m2!1ses-419!2sar"
                  allowFullScreen=""
                  loading="lazy"
                  title="Sucursal 1 Map"
                ></iframe>
              </div>
              <div className="flex flex-col gap-3 justify-center items-start">
                <p className="text-lg sm:text-2xl subpixel-antialiased lining-nums ">
                  <strong>Sucursal II</strong>
                </p>
                <br></br>
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
              src={fondo01}
              alt="Sucursal 1"
              className="w-full h-64 object-cover rounded-md mb-4"
            />
          </div>
        </div>
      </div>
        <div className="flex justify-center p-5">
          <button
            onClick={() => showProduct()}
            className="bg-gray-200 font-semibold text-black py-2 px-4 rounded-lg text-lg hover:text-red-600 hover:border-red-600"
          >
            Contáctanos
          </button>
        </div>
    </div>
  );
};
