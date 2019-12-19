import { useState, useEffect } from "react";

export default function () {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const resizeCB = () => {
      setWindowWidth(window.innerWidth);
    };
    resizeCB();

    window.addEventListener("resize", resizeCB);

    return () => {
      window.removeEventListener("resize", resizeCB);
    };
  }, []);

  return windowWidth;
}