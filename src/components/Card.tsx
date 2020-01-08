//@ts-ignore
import  cardSrc from '../assets/Card.png'

import React from 'react'
import VisibilityDetector from './VisibilityDetecor';

const Card: React.FC<{
  title: string,
  background: string

}> = ({ children, title, background }) => {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 py-6 sm:p-3 xl:p-6 text-white">
      <VisibilityDetector topOnly>
        {visible => (
          <div
           className={`w-full rounded-lg overflow-hidden h-full mx-auto transition-500 change-transform change-opacity`}
           style={{
            maxWidth: 300,
            minHeight: 400,
            transform: `scale(${ visible ? 1 : 0.75 })`,
            opacity: visible ? 1 : 0,
            background
          }}>
            <div className="w-full text-right">
              <img src={cardSrc} width="70%" className="inline-block" />
            </div>
            <div className="w-full p-6">
              <div className="text-base xl:text-lg font-bold mb-3 mt-7 text-center">
                {title}
              </div>
              <div className="opacity-75">
                {children}
              </div>
            </div>
          </div>
        )}
      </VisibilityDetector>
    </div>
  )
};
export default Card;