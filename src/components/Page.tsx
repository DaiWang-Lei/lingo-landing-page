import React from 'react';

const Page: React.FC<{
  className?: string,
  background?: string,
  background2?: string,
  pageRef?: React.MutableRefObject<any>,
  insert?: any,
  onClick?: () => void,
  useFooter?: boolean,
  useHeader?: boolean

}> = props => {
  
  return (
    <div
     className={`w-full select-none ${props.className ?? ""}`}
     ref={props.pageRef}
     onClick={props.onClick}
     style={{ 
      background: props.background2 ?? "none",
      backgroundSize: "cover",
      backgroundPosition: "center"
     }}>
      {props.insert}
      <div className="w-full transition-1000 change-opacity sm:py-32 py-20 " style={{
        background: props.background ?? "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        paddingBottom: props.useFooter ? 0 : undefined,
        paddingTop: props.useHeader ? 0 : undefined
      }}>
        <div className='container px-10 sm:px-15 md:px-20 mx-auto'>
          {props.children}
        </div>
      </div>
    </div>
  )
};
export default Page;