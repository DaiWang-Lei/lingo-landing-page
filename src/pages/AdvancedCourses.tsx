import React from 'react'
import Page from '../components/Page'
import CourseCards from '../components/CourseCards'

const courses = {
  title: "核心基础课程",
  data: [
    { title: "ADVANCE 1", subtitle: "VR与空间编程"},
    { title: "ADVANCE 2", subtitle: "AI算法入门"},
    { title: "ADVANCE 3", subtitle: "智能机器人课程"},
    { title: "ADVANCE 4", subtitle: "网络编程"},
    { title: "ADVANCE 5", subtitle: "物联网"},
  ]
};

const Advancedourses: React.FC<{bgColor: any, textColor:any}> = props => {
  return (
    <Page className="bg-white select-none z-10" background={props.bgColor} background2="rgba(35,44,56,1)">
      <h2 className="text-3xl sm:text-5xl opacity-75 mb-10 mt-10 text-center font-bold" style={{
        color: props.textColor,
        transition: "color 1000ms ease"
      }}>
        高级应用课程 <br /><span className='text-2xl sm:text-3xl'>ADVANCE 1 - ADVANCE 5</span>
      </h2>
      <CourseCards courses={courses} />
    </Page>
  )
}

export default Advancedourses