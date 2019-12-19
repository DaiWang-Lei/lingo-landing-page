import React from 'react'
import Page from '../components/Page'
import CourseCards from '../components/CourseCards'

const Advancedourses: React.FC<{courses: any, bgColor: any, textColor:any}> = props => {
  return (
    <Page className="bg-white select-none" background={props.bgColor}>
      <h2 className="text-3xl sm:text-5xl opacity-75 mb-10 mt-10 text-center font-bold" style={{
        color: props.textColor,
        transition: "color 1000ms ease"
      }}>
        高级应用课程 <br /><span className='text-2xl sm:text-3xl'>ADVANCE 1 - ADVANCE 5</span>
      </h2>
      <CourseCards courses={props.courses} />
    </Page>
  )
}

export default Advancedourses