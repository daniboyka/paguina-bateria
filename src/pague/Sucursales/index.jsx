import { Link } from 'react-router-dom';

export const Sucursales = () => {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-4">Nuestras Sucursales</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Sucursal 1 */}
        <div className="bg-white rounded-lg p-4 shadow flex flex-col">
          <img
            src="URL_IMAGEN_SUCURSAL_1"
            alt="Sucursal 1"
            className="w-full h-64 object-cover rounded-md mb-4"
          />
          <div className="text-lg mb-4">
            <iframe
              width="100%"
              height="200"
              src="URL_GOOGLE_MAPS_SUCURSAL_1"
              allowFullScreen=""
              title="Sucursal 1 Map"
            ></iframe>
            <p><strong>Sucursal 1:</strong></p>
            <p><strong>Provincia:</strong> Entre Rios</p>
            <p><strong>Localidad:</strong> Concepción del Uruguay</p>
            <p><strong>Dirección:</strong> 25 de Agosto 932</p>
          </div>
        </div>
        
        {/* Sucursal 2 */}
        <div className="bg-white rounded-lg p-4 shadow flex flex-col">
          <img
            src="URL_IMAGEN_SUCURSAL_2"
            alt="Sucursal 2"
            className="w-full h-64 object-cover rounded-md mb-4"
          />
          <div className="text-lg mb-4">
            <iframe
              width="100%"
              height="200"
              src="URL_GOOGLE_MAPS_SUCURSAL_2"
              allowFullScreen=""
              title="Sucursal 2 Map"
            ></iframe>
            <p><strong>Sucursal 2:</strong></p>
            <p><strong>Provincia:</strong> Buenos Aires</p>
            <p><strong>Localidad:</strong> Olavarría</p>
            <p><strong>Dirección:</strong> Av. Colón 3843</p>
          </div>
        </div>
      </div>

      <Link to="/contacto">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Contacto
        </button>
      </Link>
    </div>
  );
};