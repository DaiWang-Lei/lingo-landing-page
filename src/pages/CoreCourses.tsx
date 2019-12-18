import React from 'react'
import Page from '../components/Page'
import CourseCards from '../components/CourseCards'
const CoreCourses: React.FC<{ pageRef: any, bgColor: any, courses: any,colorBlack:any }> = (props) => {
  return (
    <Page className="bg-white select-none bg-gradient-10"
     pageRef={props.pageRef}
      background={props.bgColor}
      >
      <h2 className="text-3xl sm:text-5xl opacity-75 mb-10 mt-10 text-center font-bold" style={{
        color: props.colorBlack,
        transition: "color 1000ms ease"
      }}>
        核心进阶课程 <br /><span className='text-2xl sm:text-3xl'>LEVEL1-LEVEL4 </span>
      </h2>
      <CourseCards 
      courses={props.courses} 
      />
    </Page>
  )
}
export default CoreCourses