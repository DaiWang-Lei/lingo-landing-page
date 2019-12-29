import { useState, useEffect } from "react";

export default function () {
    const [zeroScrollTop, setZeroScrollTop] = useState(true);

    useEffect(() => {
        const scrollCB = () => {
            setZeroScrollTop(window.pageYOffset <= 0);
        };
        scrollCB();

        window.addEventListener("scroll", scrollCB);

        return () => {
            window.removeEventListener("scroll", scrollCB);
        };
    }, []);

    return zeroScrollTop;
}