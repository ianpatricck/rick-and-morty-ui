import { useEffect, useState } from "react";

type DimensionsType = {
  height: number;
  width: number;
};

// Hook para resgatar o valor atual das dimensões da tela
export const useWindowScreen = () => {
  const [windowDimensions, setWindowDimensions] = useState<DimensionsType>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};
