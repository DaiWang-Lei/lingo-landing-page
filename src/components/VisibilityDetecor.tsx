import React, { useCallback } from "react";
import DOMElementExtractor from "./DOMElementExtractor";

const VisibilityDetector: React.FC<{
    onChange?: (visible: boolean) => void,
    topOffset?: number

}> = (props) => {

    const onMount = useCallback((el: HTMLElement) => {
        let visibleOld = false;

        const scrollCB = () => {
            const bounds = el.getBoundingClientRect();
            
            const visible = bounds.top < (window.innerHeight - (props.topOffset ?? 0)) && bounds.bottom > 0;

            if (visible !== visibleOld)
                props.onChange?.(visible);

            visibleOld = visible;
        };
        scrollCB();
    
        window.addEventListener("scroll", scrollCB);
    
        return () => {
            window.removeEventListener("scroll", scrollCB);
        };
    }, []);

    return (
        <DOMElementExtractor onMount={onMount}>
            {props.children}
        </DOMElementExtractor>
    )
};
export default VisibilityDetector;