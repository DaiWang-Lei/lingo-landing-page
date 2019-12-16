import React, { useRef, useEffect, useCallback, useState } from "react";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import "tailwindcss/dist/components";
import "tailwindcss/dist/base";
import "tailwindcss/dist/utilities";
import "./App.css";
import ReactDOM from "react-dom";
// 导入自己的组件
import Page from "./components/Page";
import RobotSvg from "./components/RobotSvg";
import GearsSvg from "./components/GearsSvg";
import AiSvg from "./components/AiSvg";
import ContentCard from "./components/ContentCard";
import Card from "./components/Card";
import Mountain3D from "./components/Mountain3D";
import tween from "ambients-tween";
import CourseCards from "./components/CourseCards";

const courses = [{
  title: "Level 1-2",
  data: [
    { course: "变量和函数", title: "太空堡垒" },
    { course: "流程控制", title: "愤怒小鸟" },
    { course: "变量和函数", title: "计算器" },
    { course: "流程控制", title: "单位换算" }
  ]
}, {
  title: "Level 3-4",
  data: [
    { course: "类型和API", title: "多人吃鸡" },
    { course: "对接Python", title: "多人吃鸡Python版" },
    { course: "类型和API", title: "在线聊天" },
    { course: "对接Python", title: "在线聊天Python版" }
  ]
}, {
  title: "进阶课程",
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

  const page0Ref = useRef<any>();
  const page1Ref = useRef<any>();
  const page2Ref = useRef<any>();

  const scrollPage = useCallback((page: number) => {
    let top = 0;
  
    if (page === 1)
      top = page0Ref.current.clientHeight;
    else if (page === 2)
      top = page0Ref.current.clientHeight + page1Ref.current.clientHeight;
  
    tween({
      from: window.pageYOffset,
      to: top,
      step: val => window.scrollTo(0, val),
      duration: 1000
    });
  }, []);

  useEffect(() => {
    const scrollCb = () => {
      setAppBarColor(window.pageYOffset > 0 ? "rgba(255,255,255,0.5)" : "transparent");
    
      const page1BoundsTop = page1Ref.current.getBoundingClientRect().top;
      const page2BoundsTop = page2Ref.current.getBoundingClientRect().top;
    
      let page = 0;
    
      if (page2BoundsTop < window.innerHeight - 300)
        page = 2;
      else if (page1BoundsTop < window.innerHeight - 300)
        page = 1;
    
      setPage(page);
    
      if (page === 0) {
        setBgColor("transparent");
        setColorBlack("black");
      }
      else if (page === 1) {
        setBgColor("rgba(29,28,51)");
        setColorBlack("white");
      }
      else if (page === 2) {
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
          transition: "all 250ms ease"
        }}
      >
        <Tabs
          value={page}
          onChange={(ev, val) => scrollPage(val)}
        >
          <Tab label="凌高编程" />
          <Tab label="六大优势" />
          <Tab label="课程体系" />
        </Tabs>
      </AppBar>

      {/* 第一页 */}
      <Page className="bg-gradient-1" bgColor={bgColor} pageRef={page0Ref}>
        <div className="mt-32 sm:mt-32" />
        <h1 className="text-4xl sm:text-6xl font-bold opacity-75 mb-3">
          凌高编程
        </h1>
        <h2 className="text-xl sm:text-5xl opacity-75 mb-10">
          <span className="inline-block whitespace-no-wrap">
            最适合中国青少年的
          </span>
          <span className="inline-block whitespace-no-wrap">
            AI在线编程平台
          </span>
        </h2>

        <Mountain3D />

        <div className="w-full flex justify-center">
          <div style={{ maxWidth: 640, color: colorBlack, transition: "all 1000ms ease" }}>
            <ContentCard icon={<GearsSvg />}>
              凌高编程是由计算机科学家、天才程序员薛来历经三年潜心钻研，自主研发的编程语言LingoScript和编程平台LingoCode，是面向9-18岁青少年的AI在线编程教育平台。
            </ContentCard>

            <ContentCard icon={<AiSvg />}>
              核心技术全球首创利用拼音作为编程入门工具，使用Ambient AI辅助教学，降低中国学生的学习门槛，用智慧的解决方案和适合中国人的硬核科技，帮助中国青少年快速掌握编程。
            </ContentCard>

            <ContentCard icon={<RobotSvg />}>
              更有独立开发独一无二的高级应用课程，AR与空间编程，AI算法入门，智能机器人等，培养更多的青少年创客创造未来。
            </ContentCard>
          </div>
        </div>
      </Page>

      <Page
        className="flex justify-center items-center bg-gradient-9"
        bgColor={bgColor}
        pageRef={page1Ref}
      >
        <h2 className="text-3xl sm:text-5xl opacity-75 mb-10 mt-10 text-white text-center font-bold">
          凌高的六大优势
        </h2>
        <div className="flex flex-wrap">
          <Card className="bg-gradient-2">
            <p className="text-xl font-bold mb-3">拼音编程降低学习门槛</p>
            <span className="opacity-75">
              中国青少年学习编程最大的障碍是记不住复杂的英文指令，凌高编程全球首创拼音编程，基于现代汉语,更接近自然语言，降低中国学生的学习门槛；
            </span>
          </Card>
          <Card className="bg-gradient-3 ">
            <p className="text-xl font-bold mb-3">天才程序员独家秘方</p>
            <span className="opacity-75">
              中国青少年学习编程最大的障碍是记不住复杂的英文指令，凌高编程全球首创拼音编程，基于现代汉语,更接近自然语言，降低中国学生的学习门槛；
            </span>
          </Card>
          <Card className="bg-gradient-4">
            <p className="text-xl font-bold mb-3">快速学成，所见即所得</p>
            <span className="opacity-75">
              中国青少年学习编程最大的障碍是记不住复杂的英文指令，凌高编程全球首创拼音编程，基于现代汉语,更接近自然语言，降低中国学生的学习门槛；
            </span>
          </Card>
          <Card className="bg-gradient-5">
            <p className="text-xl font-bold mb-3">实用性大于理论性</p>
            <span className="opacity-75">
              中国青少年学习编程最大的障碍是记不住复杂的英文指令，凌高编程全球首创拼音编程，基于现代汉语,更接近自然语言，降低中国学生的学习门槛；
            </span>
          </Card>
          <Card className="bg-gradient-7">
            <p className="text-xl font-bold mb-3">网上授课，时间灵活</p>
            <span className="opacity-75">
              中国青少年学习编程最大的障碍是记不住复杂的英文指令，凌高编程全球首创拼音编程，基于现代汉语,更接近自然语言，降低中国学生的学习门槛；
            </span>
          </Card>
          <Card className="bg-gradient-6">
            <p className="text-xl font-bold mb-3">Hello World</p>
            <span className="opacity-75">
              中国青少年学习编程最大的障碍是记不住复杂的英文指令，凌高编程全球首创拼音编程，基于现代汉语,更接近自然语言，降低中国学生的学习门槛；
            </span>
          </Card>
        </div>
      </Page>

      <Page className="bg-white select-none bg-gradient-10" pageRef={page2Ref} bgColor={bgColor}>
        <h2 className="text-3xl sm:text-5xl opacity-75 mb-10 mt-10 text-center font-bold" style={{
          color: colorBlack,
          transition: "all 1000ms ease"
        }}>
          我们的课程体系
        </h2>
        <CourseCards courses={courses[0]} />
      </Page>
    </div>
  );
};
export default App;