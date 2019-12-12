import React, { Component } from 'react'
import { AppBar, Tabs, Tab, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, Avatar } from "@material-ui/core"
import { store, view } from "react-easy-state";
import "tailwindcss/dist/components"
import "tailwindcss/dist/base"
import "tailwindcss/dist/utilities"
import "./App.css"
//@ts-ignore
import ipadSrc from "./assets/ipad.jpg";
//@ts-ignore
import CardSrc from './assets/Card.png'
// 导入自己的组件
import Page from './components/Page';
import RobotSvg from './components/RobotSvg';
import GearsSvg from './components/GearsSvg';
import AiSvg from './components/AiSvg';
import ContentCard from './components/ContentCard';
import Card from './components/Card';



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
        <Page className="pb-20 z-10 bg-gradient-1">
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
          <div className="w-full flex justify-center">
            <div style={{ maxWidth: 640 }}>

              <ContentCard icon={<GearsSvg />}>
                凌高编程是由计算机科学家、天才程序员薛来历经三年潜心钻研，自主研发的编程语言LingoScript和编程平台LingoCode， 是面向9-18岁青少年的AI在线编程教育平台。
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

        <Page className="flex justify-center items-center py-20 bg-gradient-8">
          <div className="flex flex-wrap">
            <Card className='bg-gradient-2'>
              <p className='text-xl font-bold mb-3'>
                拼音编程降低学习门槛
              </p>
              <span className='opacity-75'>
                中国青少年学习编程最大的障碍是记不住复杂的英文指令，凌高编程全球首创拼音编程， 基于现代汉语,更接近自然语言，降低中国学生的学习门槛；
              </span>
            </Card>
            <Card className='bg-gradient-3 '>
              <p className='text-xl font-bold mb-3'>
                天才程序员独家秘方
              </p>
              <span className='opacity-75'>
                中国青少年学习编程最大的障碍是记不住复杂的英文指令，凌高编程全球首创拼音编程， 基于现代汉语,更接近自然语言，降低中国学生的学习门槛；
              </span>
            </Card>
            <Card className='bg-gradient-4'>
              <p className='text-xl font-bold mb-3'>
                快速学成，所见即所得
              </p>
              <span className='opacity-75'>
                中国青少年学习编程最大的障碍是记不住复杂的英文指令，凌高编程全球首创拼音编程， 基于现代汉语,更接近自然语言，降低中国学生的学习门槛；
              </span>
            </Card>
            <Card  className='bg-gradient-5'>
              <p className='text-xl font-bold mb-3'>
                实用性大于理论性
              </p>
              <span className='opacity-75'>
                中国青少年学习编程最大的障碍是记不住复杂的英文指令，凌高编程全球首创拼音编程， 基于现代汉语,更接近自然语言，降低中国学生的学习门槛；
              </span>
            </Card>
            <Card className='bg-gradient-7'>
              <p className='text-xl font-bold mb-3'>
                网上授课，时间灵活
              </p>
              <span className='opacity-75'>
                中国青少年学习编程最大的障碍是记不住复杂的英文指令，凌高编程全球首创拼音编程， 基于现代汉语,更接近自然语言，降低中国学生的学习门槛；
              </span>
            </Card>
            <Card className='bg-gradient-6'>
              <p className='text-xl font-bold mb-3'>Hello World</p>
              <span className='opacity-75'>
                中国青少年学习编程最大的障碍是记不住复杂的英文指令，凌高编程全球首创拼音编程， 基于现代汉语,更接近自然语言，降低中国学生的学习门槛；
              </span>
            </Card>
          </div>
        </Page>



      </div>
    )
  }
}
