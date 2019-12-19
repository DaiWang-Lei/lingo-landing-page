import React from 'react'
import Page from '../components/Page'
import Mountain3D from '../components/Mountain3D'

const Title: React.FC<{bgColor:any,pageRef:any}> = props => { 
  return (
    <Page
     background2="linear-gradient(180deg, rgb(255,177,145) 0%, rgb(255,153,111) 49%, rgb(66,147,255) 100%)"
     background={props.bgColor}
     pageRef={props.pageRef}
    >
      <div className="flex justify-center my-16">
        <div style={{ maxWidth: 640 }} className="text-center">
          <h1 className="text-3xl sm:text-5xl font-bold opacity-75 mb-3">
            凌高编程  赋能你的创造力
          </h1>
          <h2 className="text-xl sm:text-3xl opacity-75 mb-5">
            <span className="inline-block whitespace-no-wrap">
              最适合中国青少年的
            </span>
            <span className="inline-block whitespace-no-wrap">
              AI在线编程平台 (9-18岁)
            </span>
          </h2>
          <div className="text-sm opacity-75 text-left">
            每个孩子天生都充满创造力，他们的想象力与好奇心会编绘出绚丽多彩的独特世界。凌高编程希望将孩子的奇思妙想通过编程这一工具自由表达出来，并分享给大家。凌高希望滋养每一个孩子的探索力和创造力，以科技表达自我，将梦想编程现实，用想法改变世界。
          </div>
        </div>
      </div>
      <Mountain3D />
      {/* <div className="w-full flex justify-center">
        <div style={{ maxWidth: 640, color: textColor, transition: "color 1000ms ease" }}>
          <ContentCard icon={<GearsSvg />}>
            凌高编程是由计算机科学家、天才程序员薛来历经三年潜心钻研，自主研发的编程语言LingoScript和编程平台LingoCode，是面向9-18岁青少年的AI在线编程教育平台。
          </ContentCard>

          <ContentCard icon={<AiSvg />}>
            核心技术全球首创利用拼音作为编程入门工具，使用Ambient AI辅助教学，降低中国学生的学习门槛，用智慧的解决方案和适合中国人的硬核科技，帮助中国青少年快速掌握编程。
          </ContentCard>

          <ContentCard icon={<RobotSvg />}>
            独一无二的高级应用课程，AR与空间编程，AI人工智能算法入门，智能机器人等，并与现代程序语言(Python,JavaScript等)通用，培养更多的青少年创客创造未来。
          </ContentCard>
        </div>
      </div> */}
    </Page>
  )
}
export default Title