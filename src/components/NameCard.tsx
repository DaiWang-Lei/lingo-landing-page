import React from "react";

const NameCard: React.FC<{ name: string, position: string, imgSrc: string }> = props => {
    return (
        <div className="md:flex mx-auto mt-24 sm:mt-10" style={{ maxWidth: 640 }}>
            <img
             className="w-24 h-24 rounded-full mx-auto md:mx-0 md:mr-6 border-2 border-white mb-3 md:mb-0 "
             src={props.imgSrc}
            />
            <div className="text-center md:text-left text-white">
                <h2 className="text-lg opacity-1 text-bold">
                    {props.name}
                </h2>
                <div className='text-sm'>
                    <div className="text-bold">
                        {props.position}
                    </div>
                    <div className="opacity-75 text-left">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default NameCard;