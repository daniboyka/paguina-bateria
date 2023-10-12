import { useEffect, useState } from "react";
import styled from "styled-components";

const CarruselImg = styled.img`


  opacity: 0;
  transition: 1s;
  &.loaded {
    opacity: 1;
  }
`;

export const Carrusel = ({ images, autoplay, showButtons }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImg, setSelectedImg] = useState(images[0]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (autoplay || !showButtons) {
      const interval = setInterval(() => {
        selectNewImage(selectedIndex, images);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [autoplay, showButtons, images, selectedIndex]);

  const selectNewImage = (index, images, next = true) => {
    setLoaded(false);
    setTimeout(() => {
      const condition = next
        ? selectedIndex < images.length - 1
        : selectedIndex > 0;
      const nextIndex = next
        ? condition
          ? selectedIndex + 1
          : 0
        : condition
        ? selectedIndex - 1
        : images.length - 1;
      setSelectedImg(images[nextIndex]);
      setSelectedIndex(nextIndex);
    }, 500);
  };

  const previus = () => {
    selectNewImage(selectedIndex, images, false);
  };

  const next = () => {
    selectNewImage(selectedIndex, images);
  };

  return (
    <div className="w-full h-80 flex flex-col items-center">
      <div className="w-full h-full">
        <CarruselImg
          src={selectedImg}
          alt="daniel"
          className={`w-full h-80 md:h-80 object-cover ${loaded ? "loaded" : ""}`}
          onLoad={() => setLoaded(true)} // Establecemos "loaded" como verdadero cuando se carga la imagen
        />
      </div>
      <div className="">
        {showButtons ? (
          <>
            <button onClick={previus}>{"<"}</button>
            <button onClick={next}>{">"}</button>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
