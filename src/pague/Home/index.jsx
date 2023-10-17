import { Carrusel } from "../../Componentes/CarruselComun/Carrusel";
import { Sellos } from "../../Componentes/Sellos";
import bateria2 from "../../utiles/IMG/baterias/bateria_1.jpg";
import bateria1 from "../../utiles/IMG/baterias/bateria_2.jpg";
import bateria3 from "../../utiles/IMG/baterias/bateria_3.jpg";
import bateria4 from "../../utiles/IMG/baterias/bateria_4.jpg";
import fondo1 from "../../utiles/IMG/Fondos/fondo1.jpg";
import fondo2 from "../../utiles/IMG/Fondos/fondo2.jpg";
import fondo3 from "../../utiles/IMG/Fondos/fondo3.jpg";
import card1 from "../../utiles/IMG/cards/m1.png";
import card2 from "../../utiles/IMG/cards/w1.png";
import { LayoutP } from "../../utiles/LayoutP";

export const Home = () => {
  const images = [bateria1, bateria2, bateria3, bateria4];

  return (
    <div
      className="w-full min-h-screen"
      style={{
        backgroundImage: `url('${fondo3}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Carrusel images={images} autoplay={true} showButtons={true} />
      <section className="mt-20 w-full h-auto flex flex-col">
        <div className="relative">
        <div className="hidden sm:flex sm:flex-col">
          <div className="bg-neutral-800/80 w-1/2 h-96 flex items-center gap-20 rounded-lg md:w-1/2">
            <div style={{ width: "50%", padding: "20px" }}>
              <img className="h-60 w-60" src={card1} alt="card1" />
            </div>

            <div style={{ width: "50%", padding: "20px" }}>
              <LayoutP>
                <strong>Tipo:</strong>12x72
              </LayoutP>
              <LayoutP>
                <strong>Voltaje:</strong> 12 V
              </LayoutP>
              <LayoutP>
                <strong>Capacidad:</strong> 72 Amper / 20 Hs.
              </LayoutP>
              <LayoutP>
                <strong>Largo:</strong> 27.5 cm
              </LayoutP>
              <LayoutP>
                <strong>Ancho:</strong> 17.5 cm
              </LayoutP>
              <LayoutP>
                <strong>Alto:</strong> 19.0 cm
              </LayoutP>
              <LayoutP>
                <strong>Lado:</strong> Polo Positivo: Derecho
              </LayoutP>
            </div>
          </div>

          <div className="bg-neutral-800/80 w-1/2 h-96 flex items-center gap-20 rounded-lg md:w-1/2 md:ml-auto">
            <div style={{ width: "50%", padding: "20px" }}>
              <img className="h-60 w-60" src={card2} alt="card2" />
            </div>
            <div style={{ width: "50%", padding: "20px" }}>
              <LayoutP>
                <strong>Tipo:</strong>12×65
              </LayoutP>
              <LayoutP>
                <strong>Voltaje:</strong> 12 V
              </LayoutP>
              <LayoutP>
                <strong>Capacidad:</strong> 65 Amper / 20 Hs.
              </LayoutP>
              <LayoutP>
                <strong>Largo:</strong> 24.0 cm
              </LayoutP>
              <LayoutP>
                <strong>Ancho:</strong> 17.5 cm
              </LayoutP>
              <LayoutP>
                <strong>Alto:</strong> 17.5 cm
              </LayoutP>
              <LayoutP>
                <strong>Lado:</strong> Polo Positivo: Izquierdo
              </LayoutP>
            </div>
          </div>
        </div>

          </div>
        <div className="flex justify-center w-full h-16 sm:mt-10">
          <div className="bg-neutral-800 w-full h-auto sm:w-4/12 sm:h-20 flex items-center justify-center sm:rounded-2xl cursor-pointer">
            <p  className="text-gray-100 pb-1 text-center text-4xl font-semibold" >Mas productos!</p>
          </div>
        </div>
      </section>
      <section className="mt-20 mb-20">
        <div className="bg-neutral-800 pt-20 pb-20">
          <div>
            <h1 className="text-gray-100 text-center text-6xl">
              Quienes Somos?
            </h1>
          </div>
          <div className="mt-14 mb-5">
            <h2 className="text-gray-100 text-center text-2xl pl-5 pr-5">
              Somos Autocentro II, una empresa con sede en Concepción Del
              Uruguay, Entre Ríos, fundada el 11 de septiembre de 2023. Nuestra
              pasión es brindar a nuestros clientes productos de la más alta
              calidad en baterías y accesorios para automóviles. Lo que nos
              distingue es nuestra dedicación a la honestidad y un servicio
              excepcional. Valoramos la satisfacción de nuestros clientes por
              encima de todo, y es por eso que, si se encuentra en la misma
              región de Entre Ríos, ofrecemos envío y colocación gratuitos. En
              Autocentro II, no solo vendemos baterías y accesorios, sino que
              también ofrecemos confiabilidad y tranquilidad para su vehículo.
              Estamos comprometidos a asegurarnos de que su automóvil esté
              siempre en su mejor estado de funcionamiento. Gracias por confiar
              en nosotros.
            </h2>
          </div>
        </div>
      </section>
      <Sellos />
    </div>
  );
};
