import React from 'react'

const Page: React.FC<{
  className?: string,
  background?: string,
  background2?: string,
  pageRef?: React.MutableRefObject<any>

}> = props => {
  
  return (
    <div className={`w-full overflow-hidden ${props.className ?? ""}`} ref={props.pageRef} style={{ 
      background: props.background2 ?? "none",
      backgroundSize: "cover",
     }}>
      <div className="w-full flex justify-center pt-20" style={{
        background: props.background ?? "none",
        backgroundSize: "cover",
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