import { useEffect, useState } from "react";
import styled from "styled-components";

const CarruselImg = styled.img`
  max-width: 500px;
  width: 100%;
  height: auto;
  opacity: 0;
  transition: 1s;
  &.loaded {
    opacity: 1;
  }
`;

interface Props {
  images: string[];
  autoplay?: boolean;
  showButtons?: boolean;
}

export const Carrusel = (props: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [seletedImg, setSeletedImg] = useState(props.images[0]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (props.autoplay || !props.showButtons) {
      const interval = setInterval(() => {
        selectNewImage(selectedIndex, props.images);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [props.autoplay, props.showButtons, props.images, selectedIndex]);

  const selectNewImage = (index: number, images: string[], next = true) => {
    setLoaded(false);
    setTimeout(() => {
      const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0;
      const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.length - 1;
      setSeletedImg(images[nextIndex]);
      setSelectedIndex(nextIndex);
    }, 500);
  };

  const previus = () => {
    selectNewImage(selectedIndex, props.images, false);
  };

  const next = () => {
    selectNewImage(selectedIndex, props.images);
  };

  return (
    <>
      <CarruselImg
        src={seletedImg}
        alt="daniel"
        className={loaded ? "loaded" : ""}
        onLoad={() => setLoaded(true)} // Establecemos "loaded" como verdadero cuando se carga la imagen
      />
      <div>
        {props.showButtons ? (
          <>
            <button onClick={previus}>{"<"}</button>
            <button onClick={next}>{">"}</button>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};