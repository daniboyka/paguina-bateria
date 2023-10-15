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
      }, 1500);
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
    <div className="w-full sm:h-auto flex flex-col items-center relative">
    <div className="m-3 sm:h-14 sm:mt-2 sm:mb-">
      <p className="text-center text-base fuente-mono font-semibold md:text-4xl sm:text-2xl">
        Contamos con las mejores marcas del mercado!!!
      </p>
    </div>
    <div className="w-full h-40 sm:h-auto sm:p-1 relative">
  <div className="w-full h-40 sm:h-80">
    <CarruselImg
      src={selectedImg}
      alt="daniel"
      className={`w-full h-full sm:h-full object-cover object-center ${loaded ? "loaded" : ""}`}
      onLoad={() => setLoaded(true)}
    />
  </div>
</div>
    <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
      {showButtons ? (
        <>
          <button className="" onClick={previus}>
            {"<"}
          </button>
        </>
      ) : (
        <></>
      )}
    </div>
    <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
      {showButtons ? (
        <>
          <button className="" onClick={next}>
            {">"}
          </button>
        </>
      ) : (
        <></>
      )}
    </div>
  </div>
  );
};
