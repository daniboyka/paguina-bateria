import { useContext } from "react";
import { BateriatContext } from "../../Contex/";
import fondo8 from "../../utiles/IMG/Fondos/fondo8.avif";
import { XMarkIcon } from "@heroicons/react/24/solid";
//Poruct Detail- Abrir y cerrar detail

export const Contactanos = () => {
  const Context = useContext(BateriatContext);



  return (
    <aside
      style={{
        backgroundImage: `url('${fondo8}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={`${
        Context.estadoContacto
          ? "fixed inset-x-0 inset-y-16 sm:inset-y-32 sm:inset-x-72 items-center justify-center border-4 rounded-xl border-black z-50"
          : "hidden"
      }`}
    >
      <div className="h-full w-full relative flex flex-col items-center ">
        <div
          className="cursor-pointer absolute flex mt-3 mb-0"
          onClick={() => Context.cerrarContactos()}
        >
          <XMarkIcon className="h-8 w-8  hover:border-2 border-spacing-9 rounded-full" />
        </div>
        <div className="absolute h-40 w-full mt-32 sm:ml-40 flex flex-col justify-center sm:justify-center items-center sm:items-start gap-10">
          <div className=" sm:flex sn:flex-wrap">
            <h2 className="text-lg sm:text-5xl font-sans subpixel-antialiased font-semibold text-teal-600 sm:text-teal-600 pt-1">
              Contactate con nosotros!
            </h2>
          </div>
          <div className="flex flex-col flex-wrap">
            <p className="text-base sm:text-xl font-serif subpixel-antialiased"><strong>Correo:</strong><a href="mailto:caseresdami@gmail.com.ar"> damiancaceres539.@gmail.com</a></p><br></br>
            <p className="text-base sm:text-xl font-serif subpixel-antialiased lining-nums"><strong>Telefono:</strong>  <a href="tel:3442578816"> 3442-473758</a></p><br></br>
            <p className="text-base sm:text-xl font-serif subpixel-antialiased lining-nums"><strong>Telefono 2:</strong><a href="tel:3442578817"> 3442-458448</a></p>
          </div>
        </div>
      </div>
    </aside>
  );
};
