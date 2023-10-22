
import { Link } from 'react-router-dom';
import Logo from "../../utiles/IMG/Logo.png";
// import Error404 from "./Error404";
// import App from "../App";

const Footer = () => {
 

  return (
    
      <footer id="footer" className=" bg-slate-50 h-64 w-full z-50 dark:bg-gray-900 ">
        <div className="border-t border-b border-gray-200 dark:border-gray-700 py-16">
          <div className="mx-auto container px-4 xl:px-12 2xl:px-4">
            <div className="flex flex-col items-center lg:items-start sm:justify-between sm:flex-row">
                <div className='flex sm:justify-center object-cover cursor-pointer h-40 w-1/2 px-6'>
                    <img className='h-28 w-40' src={Logo} alt="logo" />
                </div>
              <div className="sm:w-full lg:w-1/2 px-6">
                <h4 className="font-bold mb-4 text-lg">Compañia</h4>
                <ul>                  
                  <li className="mt-2">
                    <Link to="/Nuestros_servicios"                     
                      className="text-xs lg:text-sm leading-none hover:font-medium hover:text-base hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50"
                    >
                      Servicios
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      to="/sucursales"
                      className="text-xs lg:text-sm leading-none hover:font-medium hover:text-base dark:hover:text-brand text-gray-800 dark:text-gray-50"
                    >
                      Sucursales
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      to="/sucursales"
                      className="text-xs lg:text-sm leading-none hover:font-medium hover:text-base dark:hover:text-brand text-gray-800 dark:text-gray-50"
                    >
                      Consultas
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="sm:w-full lg:w-1/2 px-6">
                <h4 className="font-bold mb-4 text-lg">Poductos</h4>
                <ul>
                  <li>
                    <Link
                      to="/preguntas"
                      className="text-xs lg:text-sm leading-none transform transition-transform duration-100 hover:scale-110 hover:font-medium hover:text-base dark:hover:text-brand text-gray-800 dark:text-gray-50"
                    >
                      Informacion
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="sm:w-full lg:w-1/2 flex flex-col sm:items-center ">
                <h4 className="font-bold mb-4 text-lg">Seguinos</h4>
                <div className="flex">
                  
                  <Link to="https://twitter.com/"
                   target="_blank"
                  >
                    <div className="pl-4 flex">
                      <svg
                        className="footer-icon feather feather-twitter text-gray-800 dark:text-gray-50 cursor-pointer transition-transform hover:scale-110"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                      </svg>
                    </div>
                  </Link>
                  <Link to="https://www.instagram.com/autocentrocdelu/?igshid=MzRlODBiNWFlZA%3D%3D"
                  target="_blank"
                  >
                    <div className="pl-4 flex text-gray-800 dark:text-gray-50 cursor-pointer transition-transform hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </div>
                  </Link>
                  <Link to="https://www.facebook.com/"
                   target="_blank"
                  >
                    
                    <div className="pl-4 flex text-gray-800 dark:text-gray-50 cursor-pointer transition-transform hover:scale-110">
                      <svg
                        // eslint-disable-next-line react/no-unknown-property
                        class="w-6 h-6 text-gray-800 fill-current dark:text-gray-50 cursor-pointer transition-transform hover:scale-110"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>    
  );
};

export default Footer;
