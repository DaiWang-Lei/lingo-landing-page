import { useState, useEffect } from "react";

export default function () {
  const [windowScroll, setWindowScroll] = useState(0);

  useEffect(() => {
    const scrollCB = () => {
      setWindowScroll(window.pageYOffset);
    };
    scrollCB();

    window.addEventListener("scroll", scrollCB);

    return () => {
      window.removeEventListener("scroll", scrollCB);
    };
  }, []);

  return windowScroll;
}