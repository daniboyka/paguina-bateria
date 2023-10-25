import { createContext, useState } from "react";

export const BateriatContext = createContext();

export const BateriaProvider = ({ children }) => {
  const [estadoContacto, setEstadoContacto] = useState(false);
  const abrirContactos = () => setEstadoContacto(true); //esta es la funcion q se encarga de abrir la ventanita de detalles.
  const cerrarContactos = () => setEstadoContacto(false);

  return (
    <BateriatContext.Provider
      value={{
        estadoContacto,
        setEstadoContacto,
        abrirContactos,
        cerrarContactos,
      }}
    >
      {children}
    </BateriatContext.Provider>
  );
};
