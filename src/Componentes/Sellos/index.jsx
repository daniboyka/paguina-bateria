import sello1 from "../../utiles/IMG/sellos/envio_1.png";
import sello2 from "../../utiles/IMG/sellos/garantia_1.png";
import sello3 from "../../utiles/IMG/sellos/verificacion_1.png";
import sello4 from "../../utiles/IMG/sellos/garantia_2.png";

export const Sellos = () => {
  return (
    <section className="h-auto sm:h-96 w-full">
      <div className="h-auto sm:h-96 p-1">
        <div className=" w-full h-full flex flex-col sm:grid sm:grid-cols-3 sm:gap-4">
          <div className=" flex flex-col items-center p-2">
            <div className="w-48 h-48">
              <img className="w-56 h-56" src={sello1} alt={sello1} />
            </div>
            <div className="p-2">
              <p className="text-gray-100 text-center text-xl font-sans antialiased font-semibold">
                Contamos con envio sin cargo a todo Entre Rios!!!*
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center p-2">
            <img className="w-48 h-48" src={sello4} alt={sello2} />
            <div className="p-2">
              <p className="text-gray-100 text-center text-xl font-sans antialiased font-semibold">
                Garantia de hasta 18 meses!!!*
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center p-2">
            <img className="w-48 h-48" src={sello3} alt={sello3} />
            <div className="p-2">
              <p className="text-gray-100 text-center text-xl font-sans antialiased font-semibold">
                Ofreciendo baterías verificadas y con la máxima calidad del
                mercado para su automóvil.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
