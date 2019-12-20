import React from 'react'
import Page from '../components/Page'
//@ts-ignore
import CandySrc from '../assets/candy.jpg'
//@ts-ignore
import XuelaiSrc from '../assets/xuelai.jpg'
//@ts-ignore
import Li from '../assets/li.jpg'

const Founders: React.FC<{ pageRef: any }> = (props) => {
  return (
    <Page className="bg-black" pageRef={props.pageRef}>
      <div className="md:flex bg-white rounded-lg p-6 m-6">
        <img className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6" src={XuelaiSrc} />
        <div className="text-center md:text-left">
          <h2 className="text-lg">薛来</h2>
          <div className="text-purple-500">CTO & 联合创始人</div>
          <div className="text-gray-600">曾就读卡耐基梅隆大学计算机专业（已辍学）</div>
          <div className="text-gray-600">2011-2012年就职于英特尔亚太研发中心系统优化工程师</div>
          <div className="text-gray-600">2013年在新加坡创立Rativ科技公司，研发AR人机交互系统</div>
          <div className="text-gray-600">2016年起研发Lingo编程语言和平台</div>
        </div>
      </div>

      <div className="md:flex bg-white rounded-lg p-6 m-6">
        <img className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6" src={Li} />
        <div className="text-center md:text-left">
          <h2 className="text-lg">Hyunki LEE 李贤基</h2>
          <div className="text-purple-500">产品总监</div>
          <div className="text-gray-600">就读于佐治亚理工大学航天工程硕士</div>
          <div className="text-gray-600">2013年就职于Rativ科技公司产品经理一职</div>
          <div className="text-gray-600">佐治亚理工大学航天工程设计实验室(Aerospace Systems Design Laboratory )研究员</div>
        </div>
      </div>

      <div className="md:flex bg-white rounded-lg p-6 m-6">
        <img className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6" src={CandySrc} />
        <div className="text-center md:text-left">
          <h2 className="text-lg">Candy LIU 刘乐</h2>
          <div className="text-purple-500">CEO & 联合创始人</div>
          <div className="text-gray-600">就读于牛津大学赛德商学院EMBA</div>
          <div className="text-gray-600">拥有超过12年的市场营销经验，曾在LVMH集团、Pepsi、L'Oréal等500强外企担任高级市场经理职位</div>
          <div className="text-gray-600">擅长品牌策略、整合品牌营销等，成功上线’Pepsi Challenge’等品牌活动</div>
        </div>
      </div>
    </Page>
  )
}

export default Founders