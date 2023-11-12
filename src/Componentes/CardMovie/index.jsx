/* eslint-disable react/prop-types */

export const CartMovie = ({ card1, card2, card3 }) => {
  return (
    <div className="">
      <div className="bg-neutral-800/80 w-full h-52 gap-4 flex justify-center items-center mb-1">
        <div className="w-40 h-40">
          <img className="h-36 w-full" src={card1} alt="card1" />
        </div>
        <div className="">
          <p className="text-gray-100 text-left text-sm p-1">
            <strong>Tipo:</strong>12x72
          </p>
          <p className="text-gray-100 text-left text-sm p-1">
            <strong>Voltaje:</strong> 12 V
          </p>
          <p className="text-gray-100 text-left text-sm p-1">
            <strong>Capacidad:</strong> 72 Amper / 20 Hs.
          </p>
          <p className="text-gray-100 text-left text-sm p-1">
            <strong>Medidas:</strong> 27.5x17.5x19 cm
          </p>
          <p className="text-gray-100 text-left text-sm p-1">
            <strong>Lado:</strong> Polo Positivo: Derecho
          </p>
        </div>
      </div>

      <div className="bg-neutral-800/80 w-full h-48 gap-4 flex justify-center items-center mb-1">
        <div className="w-40 h-40">
          <img className="h-36 w-full" src={card2} alt="card1" />
        </div>
        <div className="">
          <p className="text-gray-100 text-left text-sm p-1">
            <strong>Tipo:</strong>12x65
          </p>
          <p className="text-gray-100 text-left text-sm p-1">
            <strong>Voltaje:</strong> 12 V
          </p>
          <p className="text-gray-100 text-left text-sm p-1">
            <strong>Capacidad:</strong> 65 Amper / 20 Hs.
          </p>
          <p className="text-gray-100 text-left text-sm p-1">
            <strong>Medidas:</strong> 24x17.5x17.5 cm
          </p>
          <p className="text-gray-100 text-left text-sm p-1">
            <strong>Lado:</strong> Polo Positivo: Izquierdo
          </p>
        </div>
      </div>

      <div className="bg-neutral-800/80 w-full h-48 gap-4 flex justify-center items-center">
        <div className="w-40 h-40">
          <img className="h-36 w-full" src={card3} alt="card1" />
        </div>
        <div className="">
          <p className="text-gray-100 text-left text-sm p-1">
            <strong>Tipo:</strong>12x72
          </p>
          <p className="text-gray-100 text-left text-sm p-1">
            <strong>Voltaje:</strong> 12 V
          </p>
          <p className="text-gray-100 text-left text-sm p-1">
            <strong>Capacidad:</strong> 72 Amper / 20 Hs.
          </p>
          <p className="text-gray-100 text-left text-sm p-1">
            <strong>Medidas:</strong> 28x17.5x17.5 cm
          </p>

          <p className="text-gray-100 text-left text-sm p-1">
            <strong>Lado:</strong> Polo Positivo: Derecho
          </p>
        </div>
      </div>
    </div>
  );
};
