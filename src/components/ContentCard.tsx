import React, { Component, ReactElement } from 'react'

export default class ContentCard extends Component<{ icon: ReactElement }> {
  render() {
    return (
      <div className="sm:flex justify-center items-center p-6">
        <div className="w-full sm:w-auto flex justify-center items-center">
          <div className="rounded-full w-32 h-32 bg-yellow-200 flex justify-center items-center sm:mr-10 mb-6 sm:mb-0">
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
