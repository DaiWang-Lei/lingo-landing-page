import React from 'react'
import Page from '../components/Page'
import CourseCards from '../components/CourseCards'
//@ts-ignore
import vrSrc from "../assets/vr.jpg";
//@ts-ignore
import aiSrc from "../assets/ai.jpg";
//@ts-ignore
import bionicSrc from "../assets/bionic.jpg";
//@ts-ignore
import networkSrc from "../assets/network.jpg";
//@ts-ignore
import iotSrc from "../assets/iot.jpg";
//@ts-ignore
import fuiSrc from "../assets/fui.jpg";

const courses = [
  { title: "ADVANCED 1", subtitle: "VR与空间编程", imgSrc: vrSrc  },
  { title: "ADVANCED 2", subtitle: "AI算法入门", imgSrc: aiSrc },
  { title: "ADVANCED 3", subtitle: "智能机器人课程", imgSrc: bionicSrc },
  { title: "ADVANCED 4", subtitle: "网络编程", imgSrc: networkSrc },
  { title: "ADVANCED 5", subtitle: "物联网", imgSrc: iotSrc },
];

const AdvancedCourses: React.FC<{bgColor: any, textColor:any}> = props => {
  return (
    <Page
     className="bg-white z-10"
     background={props.bgColor}
     background2={`url(${fuiSrc})`}
     insert={(
       <div className="w-full h-full absolute" style={{
         background: "linear-gradient(to bottom, rgb(45,45,45), rgba(29,28,51,0.75), rgb(49,83,82))"
       }} />
     )}
    >
      <h2
       className="text-2xl sm:text-4xl opacity-75 mb-10 text-center font-bold transition-1000 change-opacity"
       style={{ color: props.textColor }}
      >
        高级应用课程
        <br />
        <span className='text-xl sm:text-3xl'>
          ADVANCED 1 - 5
        </span>
      </h2>
      <CourseCards courses={courses} dark />
    </Page>
  )
}

export default AdvancedCourses