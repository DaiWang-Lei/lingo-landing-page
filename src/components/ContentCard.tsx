import React, { Component } from 'react'
import AiSvg from "./AiSvg";

export default class ContentCard extends Component<{ icon: any }> {
  render() {
    return (
      <div className="sm:flex justify-center items-center p-6">
        <div className="w-full sm:w-auto  flex justify-center items-center">
          <div className="rounded-full sm:h-32 sm:w-32 w-32 h-32 bg-yellow-300 flex justify-center items-center sm:mr-10 mb-6 sm:mb-0" >
            {this.props.icon}
          </div>
        </div>
        <p>
          {this.props.children}
        </p>
      </div>
    )
  }
}
