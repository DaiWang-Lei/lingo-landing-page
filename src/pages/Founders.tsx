import React from 'react'
import Page from '../components/Page'
//@ts-ignore
import CandySrc from '../assets/candy.jpg'
//@ts-ignore
import XuelaiSrc from '../assets/xuelai.jpg'
//@ts-ignore
import Li from '../assets/li.jpg'
//@ts-ignore
import background from '../assets/lingo-mac.png'

const Founders: React.FC<{ pageRef: any, bgColor: string, textColor: string }> = (props) => {
  return (
    <Page
      className="bg-black"
      pageRef={props.pageRef}
      background={props.bgColor}
      background2={`url(${background})`}
      insert={(
        <div className="bg-gradient-9 w-full h-full opacity-75 absolute">
          <div className="w-full h-full bg-black opacity-75 absolute" />
          <div className="w-full h-full absolute" style={{
            background: "linear-gradient(0deg, rgba(35,44,56,1) 0%, rgba(0,0,0,1) 100%)"
          }} />
        </div>
      )}
    >
      <div className='w-full flex justify-center'>
        <p style={{ maxWidth: 640 }} className='text-white'>
          对于中国的孩子们来说，学习编程最大的挑战就是识别和回忆复杂的英文词汇。我们曾多次亲眼目睹很多原本很喜欢图形化编程的孩子，在进阶到Python等文字化“真编程”之后，由于总是拼写不出（或回忆不起）正确的英文指令而产生强烈挫败感，从而放弃学习编程。经过在多所机构和学校中面对着真实的孩子长时间反复试错和打磨，凌高编程的在线教育平台可以很大程度解决这个痛点。通过使用汉语拼音学会文字编程的操作方式、调试技能、和思维模型，并在课程的最后再学习如何用英文编写同样的程序，孩子学习编程的难度曲线会变得平缓。希望在凌高编程的平台上，每个孩子都能学有所得，学以致用。
        <br />
          此致，
      </p>
      </div>
      {/* <h1 className="text-3xl sm:text-5xl opacity-75 mb-10 text-white font-bold  text-center " >创始团队</h1>
      <div className=" md:flex rounded-lg p-6 m-6">
        <img className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6" src={XuelaiSrc} />
        <div className=" text-center md:text-left text-white  ">
          <h2 className="text-lg opacity-1"><b>薛来</b></h2>
          <div className='opacity-75 text-sm'>
            <div>CTO & 联合创始人</div>
            <div>曾就读卡耐基梅隆大学计算机专业（已辍学）</div>
            <div>2011-2012年就职于英特尔亚太研发中心系统优化工程师</div>
            <div>2013年在新加坡创立Rativ科技公司，研发AR人机交互系统</div>
            <div>2016年起研发Lingo编程语言和平台</div>
          </div>
        </div>
      </div>

      <div className=" md:flex rounded-lg p-6 m-6">
        <img className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6" src={Li} />
        <div className=" text-center md:text-left text-white  ">
          <h2 className="text-lg "><b className='opacity-1'>Hyunki LEE 李贤基</b></h2>
          <div className='opacity-75 text-sm'>
            <div>产品总监</div>
            <div>就读于佐治亚理工大学航天工程硕士</div>
            <div>2013年就职于Rativ科技公司产品经理一职</div>
            <div>佐治亚理工大学航天工程设计实验室(Aerospace Systems Design Laboratory )研究员</div>
          </div>
        </div>
      </div>

      <div className=" md:flex rounded-lg p-6 m-6">
        <img className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6" src={CandySrc} />
        <div className=" text-center md:text-left text-white">
          <h2 className="text-lg opacity-1"><b>Candy LIU 刘乐</b></h2>
          <div className='opacity-75 text-sm'>
            <div>CEO & 联合创始人</div>
            <div>就读于牛津大学赛德商学院EMBA</div>
            <div>拥有超过12年的市场营销经验，曾在LVMH集团、Pepsi、L'Oréal等500强外企担任高级市场经理职位</div>
            <div>擅长品牌策略、整合品牌营销等，成功上线’Pepsi Challenge’等品牌活动</div>
          </div>
        </div>
      </div> */}



      {/* icp */}
      <div className='  mt-20'>
        <p className='text-center text-gray-500  mb-4 text-sm'>上海薛来网络科技有限公司  © 2019 版权所有</p>
        <p className='text-center text-gray-600 mb-10 text-sm'> 沪 ICP 备 19039915 号</p>
      </div>
    </Page>
  )
}

export default Founders