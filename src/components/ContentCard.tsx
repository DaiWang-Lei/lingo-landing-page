import React, { ReactElement } from 'react'

const ContentCard: React.FC<{ icon: ReactElement }> = props => {
  return (
    <div className="sm:flex justify-center items-center p-6">
      <div className="w-full sm:w-auto flex justify-center items-center">
        <div className="rounded-full w-32 h-32 bg-yellow-200 flex justify-center items-center sm:mr-10 mb-6 sm:mb-0">
          {props.icon}
        </div>
      </div>
      <p>
        {props.children}
      </p>
    </div>
  )
};
export default ContentCard;