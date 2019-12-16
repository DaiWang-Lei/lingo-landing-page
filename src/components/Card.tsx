//@ts-ignore
import  cardSrc from '../assets/Card.png'

import React from 'react'

const Card: React.FC<{ className?: string }> = props => {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 p-6 flex sm:flex-none justify-center items-center text-white">
      <div className={`w-full rounded h-full overflow-hidden ${props.className ?? ""}`} style={{ maxWidth: 300 }}>
        <div className="w-full text-right">
          <img src={cardSrc} width="75%" className="inline-block" />
        </div>
        <div className="w-full p-6">
          {props.children}
        </div>
      </div>
    </div>
  )
};
export default Card;