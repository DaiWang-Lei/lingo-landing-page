import React from 'react'

const Page: React.FC<{
  className?: string,
  background?: string,
  background2?: string,
  pageRef?: React.MutableRefObject<any>,
  insert?: any,
  onClick?: () => void

}> = props => {
  
  return (
    <div className={`w-full ${props.className ?? ""}`} ref={props.pageRef} onClick={props.onClick} style={{ 
      background: props.background2 ?? "none",
      backgroundSize: "cover",
      backgroundPosition: "center"
     }}>
      {props.insert}
      <div className="w-full flex justify-center pt-20" style={{
        background: props.background ?? "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-color 1000ms ease",
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