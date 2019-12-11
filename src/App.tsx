import React, { Component } from 'react'
import { AppBar, Tabs, Tab } from "@material-ui/core"
import { store, view } from "react-easy-state";
import "tailwindcss/dist/components"
import "tailwindcss/dist/base"
import "tailwindcss/dist/utilities"
import "./App.css"
//@ts-ignore
import ipadSrc from "./assets/ipad.jpg";
// 导入自己的组件
import Page from './components/Page';

const state = store({
  value: 0
});

@view
export default class App extends Component {
  render() {
    return (
      <div className="stylefix w-screen h-screen absolute ">
        <AppBar
         position="fixed" elevation={0} className="px-10 sm:px-15 md:px-20"
         style={{ backgroundColor: "transparent", color: "black" }}
        >
          <Tabs value={state.value} onChange={(ev, val) => {
            state.value = val
            // console.log(ev.persist(),state.value);

          }}>
            <Tab label="关于我们" />
            <Tab label="独家优势" />
            <Tab label="课程体系" />
          </Tabs>
        </AppBar>

        {/* 第一页 */}
        <Page zIndex={1}>
          <div className="mt-40 sm:mt-64" />
          <h1 className="text-4xl sm:text-6xl font-bold opacity-75 mb-3">
            凌高编程
          </h1>
          <h2 className="text-xl sm:text-5xl opacity-75">
            <span className="whitespace-no-wrap">
              最适合中国青少年的
            </span>
            <span className="whitespace-no-wrap">
              AI在线编程平台
            </span>
          </h2>
          <img src={ipadSrc} className='my-20 sm:my-40' />
          <div className="w-full h-screen flex justify-center">
            <div style={{ maxWidth: 640 }}>
              <div style={{width:40,height:40}} className='bg-yellow-300  justify-center'></div>
              <p>
                凌高编程是由计算机科学家、天才程序员薛来历经三年潜心钻研，自主研发的编程语言LingoScript和编程平台LingoCode， 是面向9-18岁青少年的AI在线编程教育平台。
              </p>
              <div style={{width:40,height:40}} className='bg-yellow-300 flex justify-center'></div>

              <p>
                核心技术全球首创利用拼音作为编程入门工具，使用Ambient AI辅助教学，降低中国学生的学习门槛，用智慧的解决方案和适合中国人的硬核科技，帮助中国青少年快速掌握编程。
              </p>
              <div style={{width:40,height:40}} className='bg-yellow-300 flex justify-center'></div>

              <p>
                更有独立开发独一无二的高级应用课程，AR与空间编程，AI算法入门，智能机器人等，培养更多的青少年创客创造未来。
              </p>
            </div>
          </div>
        </Page>
      </div>
    )
  }
}
