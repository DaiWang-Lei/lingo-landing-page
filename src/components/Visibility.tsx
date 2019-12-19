import { useRef } from "react";
import { useEffect } from "react";
import React from "react";

const Visibility: React.FC<{ onVisible: ((el?: HTMLElement) => void), repeat?: boolean }> = props => {
  const childRef = useRef<any>();
  const children = { ...(props.children || undefined), ref: childRef };

  useEffect(() => {
    let visibleOld = false;

    const scrollCB = () => {
      const visible = childRef.current.getBoundingClientRect().top < window.innerHeight;

      if (visible && !visibleOld) {
        if (!props.repeat)
          window.removeEventListener("scroll", scrollCB);

        props.onVisible(childRef.current);
      }

      visibleOld = visible;
    };
    scrollCB();

    window.addEventListener("scroll", scrollCB);

    return () => {
      window.removeEventListener("scroll", scrollCB);
    };
  }, []);

  return (
    <>
      {children}
    </>
  );
}
export default Visibility;