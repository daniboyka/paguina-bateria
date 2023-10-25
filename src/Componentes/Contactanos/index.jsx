import { useContext } from "react";
import { BateriatContext } from "../../Contex/";
import { XMarkIcon } from "@heroicons/react/24/solid";

//Poruct Detail- Abrir y cerrar detail

export const Contactanos = () => {
  const Context = useContext(BateriatContext);

  return (
    <aside
      className={`${
        Context.estadoContacto
          ? "fixed flex inset-x-0 inset-y-16 sm:inset-y-32 sm:inset-x-72 items-center justify-center border-2 rounded-xl border-orange-700/50 bg-zinc-300 z-50"
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
      <div className="absolute mt-44 flex flex-col gap-10">        
        <div>
          <p>Correo: damiancaseres@gmail.com</p>
        </div>
        <div>
          <p>Telefono: 3442-578816</p>
        </div>
        <div>
          <p>Telefono 2: 3442-578816</p>
        </div>
      </div>

      </div>
    </aside>
  );
};
