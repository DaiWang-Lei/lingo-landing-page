import React from "react";

const NB: React.FC = props => {
    return (
        <span className="inline-block whitespace-no-wrap">
            {props.children}
        </span>
    );
};
export default NB;