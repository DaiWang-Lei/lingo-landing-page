import React, { Component, ReactInstance } from "react";
import { AppBar, Tabs, Tab, Fab } from "@material-ui/core";
import { store, view } from "react-easy-state";
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
import tossable from "tossable";
import { mapRange } from "@lincode/math";
import Mountain3D from "./components/Mountain3D";
import tween from "ambients-tween";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const state = store({
  page: 0,
  scrollTop: 0,
  stackX: -50,
  bgColor: "none",
  colorBlack: "black",
  colorWhite: "white",

  currentCard: 0
});

let page0El: HTMLDivElement | undefined;
let page1El: HTMLDivElement | undefined;
let page2El: HTMLDivElement | undefined;


window.onscroll = () => {
  state.scrollTop = window.pageYOffset;

  const page1BoundsTop = page1El?.getBoundingClientRect().top ?? Infinity;
  const page2BoundsTop = page2El?.getBoundingClientRect().top ?? Infinity;

  let page = 0;

  if (page2BoundsTop < window.innerHeight - 300)
    page = 2;
  else if (page1BoundsTop < window.innerHeight - 300)
    page = 1;

  state.page = page;

  if (page === 0) {
    state.bgColor = "transparent";
    state.colorBlack = "black";
    state.colorWhite = "white";
  }
  else if (page === 1) {
    state.bgColor = "rgba(29,28,51)";
    state.colorBlack = "white";
    state.colorWhite = "black";
  }
  else if (page === 2) {
    state.bgColor = "white";
    state.colorBlack = "black";
    state.colorWhite = "white";
  }
};

function mapX(x: number): number {
  if (x < 0) return x * mapRange(x, 0, -250, 1, 6)
  return x
}

function mapZ(z: number): number {
  return mapRange(z, -60, -120, 0, 100)
}

function scrollPage(page: number) {
  let top = 0;

  if (page === 1 && page0El)
    top = page0El.clientHeight;
  else if (page === 2 && page1El && page0El)
    top = page0El.clientHeight + page1El.clientHeight;

  tween({
    from: window.pageYOffset,
    to: top,
    step: val => window.scrollTo(0, val),
    duration: 1000
  });
}

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

@view
export default class App extends Component {
  private setPage0El = (component: ReactInstance | null) => {
    page0El = ReactDOM.findDOMNode(component) as any;
  };

  private setPage1El = (component: ReactInstance | null) => {
    page1El = ReactDOM.findDOMNode(component) as any;
  };

  private setPage2El = (component: ReactInstance | null) => {
    page2El = ReactDOM.findDOMNode(component) as any;
  };

  private initTouch = (el: HTMLDivElement | null) => {
    if (!el) return;

    tossable({
      target: el,
      step: ({ x }) => {
        state.stackX = x - 50
        state.currentCard = Math.max(Math.floor(x / 40 * -0.8), 0)
      },
      xMin: -160,
      xMax: 0,
      speed: 0.2
    })
  }

  // jkj
  nextCard = () => {
    // easeInElastic,
    // easeOutElastic,
    // easeInOutElastic,
    // linear,
    // ease,
    // easeIn,
    // easeInOut,
    // easeOut

    tween({
      from: state.stackX,
      to: ((++state.currentCard) + 1) * -52.2,
      step: val => state.stackX = val,
      easing: "ease",
      duration: 500
    })
  }

  previousCard = () => {
    tween({
      from: state.stackX,
      to: ((--state.currentCard) + 1) * -52.2,
      step: val => state.stackX = val,
      easing: "ease",
      duration: 500
    })
  }

  public render() {
    return (
      <div className="stylefix w-full absolute overflow-hidden">
        <AppBar
          position="fixed"
          elevation={0}
          className="px-10 sm:px-15 md:px-20 bg-blur"
          style={{
            backgroundColor: state.scrollTop > 0 ? "rgba(255,255,255,0.5)" : "transparent",
            color: "black",
            transition: "all 250ms ease"
          }}
        >
          <Tabs
            value={state.page}
            onChange={(ev, val) => scrollPage(val)}
          >
            <Tab label="凌高编程" />
            <Tab label="六大优势" />
            <Tab label="课程体系" />
          </Tabs>
        </AppBar>

        {/* 第一页 */}
        <Page className="bg-gradient-1" bgColor={state.bgColor} ref={this.setPage0El}>
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
            <div style={{ maxWidth: 640, color: state.colorBlack, transition: "all 1000ms ease" }}>
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
          bgColor={state.bgColor}
          ref={this.setPage1El}
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

        <Page className="bg-white select-none bg-gradient-10" ref={this.setPage2El} bgColor={state.bgColor}>
          <h2 className="text-3xl sm:text-5xl opacity-75 mb-10 mt-10 text-center font-bold" style={{
            color: state.colorBlack,
            transition: "all 1000ms ease"
          }}>
            我们的课程体系
          </h2>
          <div className="flex justify-center w-full">
            <div style={{ width: 295, height: 400 }}>
              <div style={{
                height: 300,
                perspective: "1000px",
                perspectiveOrigin: "500% 50%",
                marginLeft: 85

              }} ref={this.initTouch}>
                {courses[0].data.map((c, i) => (
                  <div key={i} style={{
                    position: "absolute",
                    transform: `translate3d(${mapX(state.stackX + i * 50)}px, 0px, ${mapZ(state.stackX) - i * 100}px)`,
                    zIndex: -i //jkj
                  }}>
                    <div className="shadow-2xl bg-white" style={{ width: 295, height: 400 }}></div>
                  </div>
                ))}
              </div>
            </div>
            <Fab color="primary" aria-label="add" onClick={this.nextCard} style={{
              position: "absolute",
              right: '5%',
              top: '45%'
            }}>
              <ArrowForwardIcon />
            </Fab>
            <Fab color="primary" aria-label="add" onClick={this.previousCard}  style={{
              position: "absolute",
              left: '5%',
              top: '45%'
            }} >
              <ArrowBackIcon />
            </Fab>
          </div>

        </Page>
      </div>
    );
  }
}

// import React from 'react'

// export default function App() {
//   const [stackX, setStackX] = useState(-50);

//   return (
//     <div onClick={() => setStackX(stackX + 5)}>

//     </div>
//   )
// }
