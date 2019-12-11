import React, { Component } from 'react'
import zIndex from '@material-ui/core/styles/zIndex'

export default class Page extends Component<{ bgImage?: string, zIndex?: number }> {
  render() {
    return (
      <div className='flex justify-center w-screen bg-cover bg-center bg-gradient-1' style={{
        backgroundImage: `url(${this.props.bgImage})`,
        zIndex: this.props.zIndex
      }}>
        <div className='container px-10 sm:px-15 md:px-20'>
          {this.props.children}
        </div>
      </div>
    )
  }
}