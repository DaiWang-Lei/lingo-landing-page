import React from "react";
import VisibilityDetector from "./VisibilityDetecor";

const Progress: React.FC<{ value: string | number }> = props => {
    return (
        <VisibilityDetector>
            {visible => (
                <div className="w-full h-1 bg-white-025">
                    <div className="h-full transition-1000 bg-white-075" style={{
                        width: visible ? props.value : 0
                    }} />
                </div>
            )}
        </VisibilityDetector>
    );
};
export default Progress;