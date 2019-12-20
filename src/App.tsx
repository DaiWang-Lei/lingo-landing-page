import React, { useEffect, useState, createRef } from "react";
import "tailwindcss/dist/components";
import "tailwindcss/dist/base";
import "tailwindcss/dist/utilities";
import "./App.css";
// 导入自己的组件
import "plyr/dist/plyr.css";
//@ts-ignore
import Plyr from "plyr";
import tween from "ambients-tween";

//@ts-ignore
import videoSrc from "./assets/1.mp4";
import Title from "./pages/Title";
import WhyUs from "./pages/WhyUs";
import Founders from "./pages/Founders";
import CoreCourses from "./pages/CoreCourses";
import AdvancedCourses from "./pages/AdvancedCourses";
import CoursePreview from "./pages/CoursePreview";
import WhyCode from "./pages/WhyCode";
import AppBarNav from "./components/AppBarNav";
import VisibilityDetector from "./components/VisibilityDetecor";
import useZeroScrollTop from "./hooks/useZeroScrollTop";

const course = {
  title: "Level 1-2",
  data: [
    { course: "变量和函数", title: "太空堡垒" },
    { course: "流程控制", title: "愤怒小鸟" },
    { course: "变量和函数", title: "计算器" },
    { course: "流程控制", title: "单位换算" }
  ]
};

export type CourseType = typeof course;

const courses = [{
  title: "核心进阶课程LEVEL1-LEVEL4",
  data: [
    { course: "变量和函数", title: "太空堡垒" },
    { course: "流程控制", title: "愤怒小鸟" },
    { course: "变量和函数", title: "计算器" },
    { course: "流程控制", title: "单位换算" },
    { course: "类型和API", title: "多人吃鸡" },
    { course: "对接Python", title: "多人吃鸡Python版" },
    { course: "类型和API", title: "在线聊天" },
    { course: "对接Python", title: "在线聊天Python版" }
  ]
}, {
  title: "高级应用课程ADVANCE 1- ADVANCE 5",
  data: [
    { course: "人工智能", title: "姿态识别，人脸识别，算法写歌，算法写诗" },
    { course: "机器人与物联网", title: "寻线小车，机器手臂，遥控开关" },
    { course: "虚拟现实", title: "VR过山车，虚拟手术" },
    { course: "网络编程", title: "大型多人软件编写与维护" }
  ]
}];

const titleRef = createRef<any>();
const whyCodeRef = createRef<any>();
const whyChooseUsRef = createRef<any>();
const coreCoursesRef = createRef<any>();
const coursePreviewRef = createRef<any>();
const foundersRef = createRef<any>();

function scrollPage(tabIndex: number) {
  let top = 0;

  if (tabIndex === 1)
    top = whyCodeRef.current.offsetTop
  else if (tabIndex === 2)
    top = coreCoursesRef.current.offsetTop
  else if (tabIndex === 3)
    top = coursePreviewRef.current.offsetTop;
  else if (tabIndex === 4)
    top = foundersRef.current.offsetTop;

  tween({
    from: window.pageYOffset,
    to: top,
    step: val => window.scrollTo(0, val),
    duration: 1000
  });
};

let tabIndex = 0;
const visiblePagesSet = new Set<number>();

const App: React.FC = () => {
  const [visiblePages, setVisiblePages] = useState([] as Array<number>);

  const page = visiblePages.sort().pop();

  if (page === 0)
    tabIndex = 0;
  else if (page === 1 || page === 2)
    tabIndex = 1;
  else if (page === 3 || page === 4)
    tabIndex = 2;
  else if (page === 5)
    tabIndex = 3;
  else if (page === 6)
    tabIndex = 4;

  let bgColor = "transparent";
  let textColor = "black";
  let appBarColor = "rgba(255, 255, 255, 0.9)";

  if (useZeroScrollTop())
    appBarColor = "transparent";

  if (tabIndex === 1) {
    bgColor = "rgb(29,28,51)";
    textColor = "white";
    appBarColor = "rgba(0, 0, 0, 0.75)";
  }
  else if (tabIndex === 2 || tabIndex === 3) {
    bgColor = "white";
    textColor = "black";
    appBarColor = "rgba(255, 255, 255, 0.75)";
  }

  useEffect(() => {
    new Plyr('#player');
  }, []);

  return (
    <div className="stylefix w-full absolute overflow-hidden">

      <AppBarNav page={tabIndex} scrollPage={scrollPage} appBarColor={appBarColor} textColor={textColor} />

      {[
        <Title pageRef={titleRef} bgColor={bgColor} />,
        <WhyCode pageRef={whyCodeRef} bgColor={bgColor} textColor={textColor} />,
        <WhyUs bgColor={bgColor} pageRef={whyChooseUsRef} />,
        <CoreCourses courses={courses[0]} textColor={textColor} pageRef={coreCoursesRef} bgColor={bgColor} />,
        <AdvancedCourses courses={courses[1]} textColor={textColor} bgColor={bgColor} />,
        <CoursePreview videoSrc={videoSrc} pageRef={coursePreviewRef} />,
        <Founders pageRef={foundersRef} />

      ].map((PageComponent, i) => (
        
        <VisibilityDetector key={i} topOffset={300} onChange={visible => {
          if (visible)
            visiblePagesSet.add(i);
          else
            visiblePagesSet.delete(i);

          setVisiblePages([...visiblePagesSet])
        }}>
          {PageComponent}
        </VisibilityDetector>
      ))}
    </div>
  );
};
export default App;
