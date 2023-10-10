import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (

    <div className="bg-gray-100 font-sans min-h-screen">
      <div className="bg-white shadow w-1/4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div>
              {/* ... Contenido de Navbar */}
            </div>
            <div className="hidden sm:flex sm:items-center">
              <NavLink
                href="#"
                className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4"
                >
                Products
              </NavLink>
              {/* ... Otras opciones del menú */}
            </div>
            <div className="hidden sm:flex sm:items-center">
              <NavLink
                href="#"
                className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4"
              >
                Sign in
              </NavLink>
              <NavLink
                href="#"
                className="text-gray-800 text-sm font-semibold border px-4 py-2 rounded-lg hover:text-purple-600 hover:border-purple-600"
              >
                Sign up
              </NavLink>
            </div>
          </div>
          <div className="block sm:hidden bg-white border-t-2 py-2">
            <div className="flex flex-col">
              {/* ... Contenido del menú para pantallas pequeñas */}
            </div>
          </div>
        </div>
      </div>
    </div>
                
  );
};
