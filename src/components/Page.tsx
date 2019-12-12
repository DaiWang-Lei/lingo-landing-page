import React, { Component } from 'react'
import zIndex from '@material-ui/core/styles/zIndex'

export default class Page extends Component<{className?: string, style?: any}> {
  render() {
    return (
      <div className={`flex justify-center w-screen bg-cover bg-center ${this.props.className}`} style={this.props.style}>
        <div className='container px-10 sm:px-15 md:px-20'>
          {this.props.children}
        </div>
      </div>
    )
  }
}