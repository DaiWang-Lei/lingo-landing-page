import React from 'react'

const Page: React.FC<{ className?: string, bgColor?: string, pageRef?: React.MutableRefObject<any> }> = props => {
  return (
    <div className={`w-full overflow-hidden ${props.className ?? ""}`} ref={props.pageRef}>
      <div className="w-full flex justify-center pt-20" style={{
        background: props.bgColor ?? "none",
        transition: "all 1000ms ease",
        minHeight: "100vh"
      }}>
        <div className='container px-10 sm:px-15 md:px-20'>
          {props.children}
        </div>
      </div>
    </div>
  )
};
export default Page;