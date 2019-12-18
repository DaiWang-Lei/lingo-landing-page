import React, { useRef, useEffect, useCallback, useState } from "react";
import { AppBar, Tabs, Tab, Toolbar } from "@material-ui/core";
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
//@ts-ignore
import logoSrc from "./assets/logo.png";
import Title from "./pages/Title";
import WhyChooseUs from "./pages/WhyChooseUs";
import Founders from "./pages/Founders";
import CoreCourses from "./pages/CoreCourses";
import Advancedourses from "./pages/AdvancedCourses";
import CoursePreview from "./pages/CoursePreview";
import WhyCode from "./pages/WhyCode";

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

const App: React.FC = () => {
  const [page, setPage] = useState(0);
  const [bgColor, setBgColor] = useState("none");
  const [colorBlack, setColorBlack] = useState("black");
  const [appBarColor, setAppBarColor] = useState("transparent");

  const titleRef = useRef<any>();
  const whyCodeRef = useRef<any>();
  const whyChooseUsRef = useRef<any>();
  const coreCoursesRef = useRef<any>();

  const scrollPage = useCallback((page: number) => {
    let top = 0;

    if (page === 1)
      top = titleRef.current.clientHeight;
    else if (page === 2)
      top = titleRef.current.clientHeight + whyChooseUsRef.current.clientHeight;

    tween({
      from: window.pageYOffset,
      to: top,
      step: val => window.scrollTo(0, val),
      duration: 1000
    });
  }, []);

  useEffect(() => {
    const player = new Plyr('#player');

    const scrollCb = () => {
      setAppBarColor(window.pageYOffset > 0 ? "rgba(255,255,255,0.5)" : "transparent");

      const whyChooseUsTop = whyChooseUsRef.current.getBoundingClientRect().top;
      const whyCodeTop = whyCodeRef.current.getBoundingClientRect().top;
      const coreCoursesTop = coreCoursesRef.current.getBoundingClientRect().top;

      let page: number;

      if (coreCoursesTop < window.innerHeight)
        page = 3;
      else if (whyChooseUsTop < window.innerHeight)
        page = 2;
      else if (whyCodeTop < window.innerHeight)
        page = 1;
      else
        page = 0;

      setPage(page);

      if (page === 0) {
        setBgColor("transparent");
        setColorBlack("black");
      }
      else if (page === 1) {
        setBgColor("rgba(29,28,51)");
        setColorBlack("white");
      }
      else if (page === 3) {
        setBgColor("white");
        setColorBlack("black");
      }
    };

    window.addEventListener("scroll", scrollCb);

    return () => {
      window.removeEventListener("scroll", scrollCb);
    };
  }, []);

  return (
    <div className="stylefix w-full absolute overflow-hidden">
      <AppBar
        position="fixed"
        elevation={0}
        className="px-10 sm:px-15 md:px-20 bg-blur"
        style={{
          backgroundColor: appBarColor,
          color: "black",
          transition: "background-color 250ms ease"
        }}
      >
        <div className="w-full flex justify-center">
          <Toolbar variant="dense" style={{ maxWidth: 1000 }}>
            {/* <div style={{ height: 48, width: 80 }}>
              <img src={logoSrc} height="100%" />
            </div>
            <div className="flex-grow" /> */}
            <Tabs
              value={page}
              onChange={(ev, val) => scrollPage(val)}
            >
              <Tab label="凌高编程" />
              <Tab label="六大优势" />
              <Tab label="课程体系" />
              <Tab label="课程预览" />
              <Tab label="创始团队" />
            </Tabs>
          </Toolbar>
        </div>

      </AppBar>
      {/* 第一页  */}
      <Title pageRef={titleRef} bgColor={bgColor} />

      <WhyCode pageRef={whyCodeRef} bgColor={bgColor} />

      {/* 为什么选择我们 */}
      <WhyChooseUs bgColor={bgColor} pageRef={whyChooseUsRef} />

      {/* 核心课程 */}
      <CoreCourses courses={courses[0]} colorBlack={colorBlack} pageRef={coreCoursesRef} bgColor={bgColor} />

      {/* 高级课程 */}
      <Advancedourses bgColor={bgColor} colorBlack={colorBlack} courses={courses[1]} />

      {/* 课程展示 */}
      <CoursePreview videoSrc={videoSrc} />

      {/* 创始人 */}
      <Founders />
    </div>
  );
};
export default App;
