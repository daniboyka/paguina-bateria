import { useState } from "react";
import bateria1 from "../utiles/IMG/baterias/cc.jpg";
import bateria2 from "../utiles/IMG/baterias/bateria_1.png";
import bateria3 from "../utiles/IMG/baterias/bateria_3.jpg";

export const Carrusel = (props) => {
  const img = [bateria1, bateria2, bateria3];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [seletedImg, setSeletedImg] = useState(img[0]);

  const selectNewImage = (index, imaguen, next = true) => {
    const condition = next ? selectedIndex < img.length : seletedImg > 0;
    const nextIndex = next
      ? condition
        ? condition + 1
        : 0
      : condition
      ? condition - 1
      : condition.length - 1;
    setSeletedImg(img[nextIndex]);
    setSelectedIndex(nextIndex);
  };

  const previus = () => {
    selectNewImage(selectedIndex, img, false);
  };

  const next = () => {
    selectNewImage(selectedIndex, img);
  };

  return (
    <>
      <img src={seletedImg} alt="daniel" />
      <button onClick={previus}>{"<"}</button>
      <button onClick={next}>{">"}</button>
    </>
  );
};
