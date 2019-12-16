import React, { Component } from 'react'

export default class Page extends Component<{
  className?: string,
  style?: React.CSSProperties,
  bgColor?: string
}> {
  render() {
    return (
      <div
       className={`w-full overflow-hidden ${this.props.className}`}
      >
        <div className="w-full flex justify-center pt-20" style={{
          background: this.props.bgColor ?? "none",
          transition: "all 1000ms ease",
          minHeight: "100vh"
        }}>
          <div className='container px-10 sm:px-15 md:px-20'>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}