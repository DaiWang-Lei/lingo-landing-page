import React, { useCallback, useState, ReactNode } from "react";
import DOMElementExtractor from "./DOMElementExtractor";
import { isFunction } from "@lincode/utils";

const VisibilityDetector: React.FC<{
    onChange?: (visible: boolean) => void,
    topOffset?: number,
    topOnly?: boolean,
    children?: ReactNode | ((visible: boolean) => ReactNode)

}> = props => {

    const [isVisible, setIsVisible] = useState(false);

    const onMount = useCallback((el: HTMLElement) => {
        let visibleOld = false;

        const scrollCB = () => {
            const bounds = el.getBoundingClientRect();
            
            const bottomVisible = props.topOnly || bounds.bottom > 0;
            const visible = bounds.top < (window.innerHeight - (props.topOffset ?? 0)) && bottomVisible;

            if (visible !== visibleOld) {
                props.onChange?.(visible);
                setIsVisible(visible);
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
        <DOMElementExtractor mountEffect={onMount}>
            {isFunction(props.children) ? props.children(isVisible) : props.children}
        </DOMElementExtractor>
    )
};
export default VisibilityDetector;