import React, { Component } from "react";
import {
  AppBar,
  Tabs,
  Tab
} from "@material-ui/core";
import { store, view } from "react-easy-state";
import "tailwindcss/dist/components";
import "tailwindcss/dist/base";
import "tailwindcss/dist/utilities";
import "./App.css";
//@ts-ignore
import ipadSrc from "./assets/ipad.jpg";
//@ts-ignore
import LevelSrc from './assets/App.png'
// 导入自己的组件
import Page from "./components/Page";
import RobotSvg from "./components/RobotSvg";
import GearsSvg from "./components/GearsSvg";
import AiSvg from "./components/AiSvg";
import ContentCard from "./components/ContentCard";
import Card from "./components/Card";
import tossable from "tossable";
import { mapRange } from "ambients-math";
import tween from "ambients-tween"

const state = store({
  value: 0,
  scrollTop: 0,
  stackX: -50
});

window.onscroll = () => {
  state.scrollTop = window.pageYOffset
}

function mapX(x: number): number {
  if (x < 0) return x * mapRange(x, 0, -250, 1, 6)
  return x
}

function mapZ(z: number): number {
  return mapRange(z, -60, -120, 0, 100)
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
    { course: "类型和API", title: "多人吃鸡"  },
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
  initTouch = (el: HTMLDivElement | null) => {
    if (!el) return;

    tossable({
      target: el,
      step: ({ x }) => {
        state.stackX = x - 50
      },
      xMin: -160,
      xMax: 0
    })
  }

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
      from: -50,
      to: -110,
      step: val => state.stackX = val,
      easing: "easeOutElastic",
      duration: 2000
    })
  }

  render() {
    return (
      <div className="stylefix w-screen h-screen absolute ">
        <AppBar
          position="fixed"
          elevation={0}
          className="px-10 sm:px-15 md:px-20"
          style={{
            backgroundColor: state.scrollTop > 0 ? "rgba(255,255,255,0.75)" : "transparent",
            color: "black",
            backdropFilter: "blur(10px)",
            transition: "all 250ms"
          }}
        >
          <Tabs
            value={state.value}
            onChange={(ev, val) => {
              state.value = val
              // console.log(ev.persist(),state.value);
            }}
          >
            <Tab label="关于我们" />
            <Tab label="独家优势" />
            <Tab label="课程体系" />
          </Tabs>
        </AppBar>

        {/* 第一页 */}
        <Page className="pb-20 z-10 bg-gradient-1">
          <div className="mt-40 sm:mt-64" />
          <h1 className="text-4xl sm:text-6xl font-bold opacity-75 mb-3">
            凌高编程
          </h1>
          <h2 className="text-xl sm:text-5xl opacity-75">
            <span className="whitespace-no-wrap">最适合中国青少年的</span>
            <span className="whitespace-no-wrap">AI在线编程平台</span>
          </h2>
          <img src={ipadSrc} className="my-20 sm:my-40" />
          <div className="w-full flex justify-center">
            <div style={{ maxWidth: 640 }}>
              <ContentCard icon={<GearsSvg />}>
                凌高编程是由计算机科学家、天才程序员薛来历经三年潜心钻研，自主研发的编程语言LingoScript和编程平台LingoCode，
                是面向9-18岁青少年的AI在线编程教育平台。
              </ContentCard>

              <ContentCard icon={<AiSvg />}>
                核心技术全球首创利用拼音作为编程入门工具，使用Ambient
                AI辅助教学，降低中国学生的学习门槛，用智慧的解决方案和适合中国人的硬核科技，帮助中国青少年快速掌握编程。
              </ContentCard>

              <ContentCard icon={<RobotSvg />}>
                更有独立开发独一无二的高级应用课程，AR与空间编程，AI算法入门，智能机器人等，培养更多的青少年创客创造未来。
              </ContentCard>
            </div>
          </div>
        </Page>

        <Page className="flex justify-center items-center py-20 bg-gradient-8">
          <div className="flex flex-wrap">
            <Card className="bg-gradient-2">
              <p className="text-xl font-bold mb-3">拼音编程降低学习门槛</p>
              <span className="opacity-75">
                中国青少年学习编程最大的障碍是记不住复杂的英文指令，凌高编程全球首创拼音编程，
                基于现代汉语,更接近自然语言，降低中国学生的学习门槛；
              </span>
            </Card>
            <Card className="bg-gradient-3 ">
              <p className="text-xl font-bold mb-3">天才程序员独家秘方</p>
              <span className="opacity-75">
                中国青少年学习编程最大的障碍是记不住复杂的英文指令，凌高编程全球首创拼音编程，
                基于现代汉语,更接近自然语言，降低中国学生的学习门槛；
              </span>
            </Card>
            <Card className="bg-gradient-4">
              <p className="text-xl font-bold mb-3">快速学成，所见即所得</p>
              <span className="opacity-75">
                中国青少年学习编程最大的障碍是记不住复杂的英文指令，凌高编程全球首创拼音编程，
                基于现代汉语,更接近自然语言，降低中国学生的学习门槛；
              </span>
            </Card>
            <Card className="bg-gradient-5">
              <p className="text-xl font-bold mb-3">实用性大于理论性</p>
              <span className="opacity-75">
                中国青少年学习编程最大的障碍是记不住复杂的英文指令，凌高编程全球首创拼音编程，
                基于现代汉语,更接近自然语言，降低中国学生的学习门槛；
              </span>
            </Card>
            <Card className="bg-gradient-7">
              <p className="text-xl font-bold mb-3">网上授课，时间灵活</p>
              <span className="opacity-75">
                中国青少年学习编程最大的障碍是记不住复杂的英文指令，凌高编程全球首创拼音编程，
                基于现代汉语,更接近自然语言，降低中国学生的学习门槛；
              </span>
            </Card>
            <Card className="bg-gradient-6">
              <p className="text-xl font-bold mb-3">Hello World</p>
              <span className="opacity-75">
                中国青少年学习编程最大的障碍是记不住复杂的英文指令，凌高编程全球首创拼音编程，
                基于现代汉语,更接近自然语言，降低中国学生的学习门槛；
              </span>
            </Card>
          </div>
        </Page> 

        <Page className="h-full bg-white select-none overflow-hidden">
          <div className="mt-20" style={{
            width: "100%",
            height: 300,
            perspective: "1000px",
            transform: "translateX(200px)",
            background: "transparent"
            
          }} ref={this.initTouch}>
            {courses[0].data.map((c, i) => (
              <div key={i} style={{
                position: "absolute",
                transform: `translate3d(${mapX(state.stackX + i * 50)}px, 0px, ${mapZ(state.stackX) - i * 100}px)`,
                zIndex: 3
              }}>
                <div className="shadow-2xl bg-white" style={{ width: 280, height: 400 }}></div>
              </div>
            ))}
          </div>
          <button onClick={this.nextCard}>next</button>
        </Page>
      </div>
    );
  }
}
