import React from 'react'
import Page from '../components/Page'
import Card from '../components/Card'
import NB from '../components/nb'

const WhyUs: React.FC<{ bgColor: any, pageRef: any }> = props => {


    const cardInfo =[
      {
        id:0,
        title:'首创拼音输入 降低学习门槛',
        info: ' 自主研发编程语言LingoScript和编程平台LingoCode，全球首创利用拼音作为编程入门工具，更接近自然语言，降低中国学生的学习门槛。'
      },
      {
        id:1,
        title:'计算机科学家 独家学习秘方',
        info: '创始人薛来10岁自学编程，是拥有17年编程经验的全球顶级计算机开发者和“天才程序员”，多次获得世界冠军，比赛经验丰富。跟随天才学习成为下一个“全球小极客”。'
      },
      {
        id:2,
        title:'国际水平作品 即学即编即会',
        info: '使用Ambient AI辅助教学，帮助学生快速掌握编程，最短时间创作作品参加国际大赛，为了让孩子获得一张未来世界的“通行证”。'
      }
    ]
  return (
    <Page
      background={props.bgColor}
      background2="linear-gradient(to bottom, rgb(29,28,51), rgb(65,172,205))"
      pageRef={props.pageRef}
    >
      <h2 className="text-2xl sm:text-4xl opacity-75 mb-10 text-white text-center font-bold">
        为什么选择凌高编程？
      </h2>
      <div className="flex flex-wrap">
        <Card
          title={cardInfo[0].title}
          background="linear-gradient(45deg, rgb(255,180,38) 0%, rgb(255,75,182) 100%)"
        >
          {cardInfo[0].info}
        </Card>
        <Card
          title={cardInfo[1].title}
          background="linear-gradient(45deg, rgb(100,78,212)0%, rgb(56, 6, 92) 100%)"
        >
         {cardInfo[1].info}
        </Card>
        <Card
          title={cardInfo[2].title}
          background="linear-gradient(45deg, rgb(0,227,168) 0%, rgb(96,134,235)   100%)"
        >
          {cardInfo[2].info}
        </Card>
      </div>
    </Page>
  )
}
export default WhyUs