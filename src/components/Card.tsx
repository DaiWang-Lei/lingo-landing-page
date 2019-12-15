//@ts-ignore
import  cardSrc from '../assets/Card.png'

import React, { Component } from 'react'

export default class Card extends Component<{ className?: string }> {
  render() {
    return (
      <div
       className={`w-full sm:w-1/2 lg:w-1/3 p-5 flex sm:flex-none justify-center items-center text-white `}
      >
        <div className={`w-full rounded h-full overflow-hidden ${this.props.className}`} style={{ maxWidth: 300 }}>
          <div className="w-full flex justify-end">
            <img src={cardSrc} width="75%" />
          </div>
          <div className="w-full p-6">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

