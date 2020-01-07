import React from 'react'
import Page from '../components/Page'
//@ts-ignore
import candySrc from '../assets/candy.jpg'
//@ts-ignore
import xuelaiSrc from '../assets/xuelai.jpg'
//@ts-ignore
import hyunkiSrc from '../assets/li.jpg'
//@ts-ignore
import boySrc from '../assets/voxel.jpg'
import NameCard from '../components/NameCard'
import NB from '../components/nb'

const Founders: React.FC<{ pageRef: any, bgColor: string, textColor: string }> = (props) => {
  return (
    <Page
      pageRef={props.pageRef}
      background={props.bgColor}
      background2={`url(${boySrc})`}
      useFooter
      insert={(
        <div className="w-full h-full absolute" style={{
          background: "linear-gradient(to bottom, rgb(51,50,74), rgba(51,50,74, 0))"
        }} />
      )}
    >
      <div style={{ maxWidth: 640 }} className='text-white mx-auto mb-20 sm:mb-10'>
        <h1 className="text-2xl sm:text-4xl text-center sm:text-left font-bold mb-4">
          真编程，学得会
        </h1>
        <span className="text-2xl sm:text-4xl text-center sm:text-left font-bold mb-4">“</span>
        对于中国的孩子们来说，初学编程最大的挑战是识别和回忆复杂的英文关键词。我们曾多次见到许多原本很喜欢图形化编程的孩子，在进阶到Python等文字化“真编程”之后，由于总是拼写不出（或回忆不起）正确的英文指令而产生强烈挫败感，从而放弃学习编程。经过在多所机构和学校中面对着真实的孩子长时间反复试错和打磨，凌高编程的在线教育平台可以很大程度解决这个痛点：通过使用汉语拼音学会文字编程的操作方式、调试最佳实践、和思维模型，并在课程的最后再学习如何用英文编写同样的程序，孩子们学习编程的难度曲线会变得平缓。希望在我们的平台上，每个孩子都能学有所得，学以致用。<span className="text-2xl sm:text-4xl text-center sm:text-left font-bold mb-4">”</span>
      </div>

      <NameCard name="刘乐" position="CEO & 联合创始人" imgSrc={candySrc}>
        <div className="mt-2 sm:mt-0">就读于牛津大学赛德商学院</div>
        <div className="mt-2 sm:mt-0">拥有12年的市场营销经验，<NB>曾在LVMH集团、</NB>Pepsi、L'Oréal等500强外企<NB>担任高级市场经理</NB></div>
        <div className="mt-2 sm:mt-0">擅长品牌策略、整合品牌营销等，成功上线’Pepsi Challenge’等品牌活动</div>
      </NameCard>

      <NameCard name="薛来" position="CTO & 联合创始人" imgSrc={xuelaiSrc}>
        <div className="mt-2 sm:mt-0">曾就职于英特尔亚太研发中心<NB>系统优化工程师</NB></div>
        <div className="mt-2 sm:mt-0">全球顶级科创竞赛，因特尔国际科学与工程大赛<NB>(Intel ISEF)一等奖，</NB><NB>计算机类别最佳奖得主</NB></div>
        <div className="mt-2 sm:mt-0">ISEF欧盟青年科学家奖(European Union Contest for Young Scientists)得主</div>
        <div className="mt-2 sm:mt-0">2009-2010凤凰卫视影响世界华人盛典<NB>希望之星奖得主</NB></div>
        <div className="mt-2 sm:mt-0">2016年起研发Lingo编程语言和平台</div>
      </NameCard>

      <NameCard name="Hyunki LEE 李贤基" position="产品总监" imgSrc={hyunkiSrc}>
        <div className="mt-2 sm:mt-0">就读于佐治亚理工大学航天工程硕士</div>
        <div className="mt-2 sm:mt-0">
          佐治亚理工大学航天工程设计实验室（Aerospace Systems Design Laboratory）<NB>研究员</NB>
        </div>
      </NameCard>
      <div className='mt-24 pb-10'/>
      
    </Page>
  )
}

export default Founders