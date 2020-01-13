import React from 'react'
import Page from '../components/Page'
//@ts-ignore
import fuiSrc from "../assets/fui.jpg";
//@ts-ignore
import map from '../assets/map.svg';
//@ts-ignore
import email from '../assets/email.svg';
//@ts-ignore
import phone from '../assets/phone.svg';
//@ts-ignore
import QR from '../assets/QR.jpg';


const faq = [{
  id: 0,
  question: '凌高编程与Scratch编程有什么不同?',
  anwser: 'Scratch图形化编程侧重低幼龄的儿童编程思维和逻辑的起步学习，功能单一，并非真正的代码编程，对于孩子日后学习Python，C++等编程语言帮助有限；',
  anwser1: '相比之下，Scratch如同“编程模拟舱”，而凌高编程推出的LingoScript语言则更像一架操作环境真实的“编程教练机”。我们采用的代码编程和语法更加接近现代程序语言，并且可以无缝对接Python和Javascript的生态系统，是孩子更容易学会的“真编程”。'
}, {
  id: 1,
  question: '我孩子上幼儿园大班，可以来学习吗？',
  anwser: '凌高编程的学习过程需要基于孩子的基础拼音能力与数学概念之上，为了孩子能够充分理解学习内容，有效展示学习成果，我们建议学习者的年龄在三年级及以上。'
}, {
  id: 2,
  question: '学了凌高编程，可以参加什么比赛？',
  anwser: '凌高编程非常注重编程学习的“应用性”，每个学员在融会贯通核心基础课后所创作的作品即可达到国际竞赛级水平，如果愿意往编程方向进行更加深远的探索与发展，作品可以投入国家级竞赛《全国青少年科技创新大赛》，《全国青少年电子信息智能创新大赛》以及国际级的全球青少年科学竞赛ISEF(国际科学与工程大奖赛)等的选拔。希望我们的孩子能在编程学习这条路上走得更远，在学习、竞技的过程中遇到更多志同道合的伙伴。'
},
{
  id: 3,
  question: '课前需要做哪些准备？',
  anwser: '1. 设备：需准备Windows7及以上版本的电脑，要求4GB运行内存，1GB以上硬盘空间，或者Mac OS X10.10及以上版本的苹果电脑。',
  anwser1: '2.辅助设备：建议配备头戴式耳机，辅助隔音自主学习。',
  anwser2:'3.关注微信公众号“LINGO凌高编程创造营”，注册成为用户后即可获得一节免费体验课。'
}]


const Faq: React.FC<{ bgColor: any, textColor: any }> = props => {
  return (
    <>
      <Page
        className="bg-white z-10"
        background={props.bgColor}
        background2={`url(${fuiSrc})`}
        insert={(
          <div className="w-full h-full absolute" style={{
            background: "linear-gradient(to bottom, rgb(0,178,166) 0%, rgba(0,0,0,0) 100%)"
          }} />
        )}
      >
        <div style={{ color: "rgba(255,255,255,0.75)" }}>
          <div className='text-white'>
            <h1 className='font-bold text-2xl my-4'>常见问题</h1>
            {faq.map((v, i) => (
              <div className='my-10' key={v.id}>
                <h3 className='text-xl mb-4 font-extrabold' >{i + 1}.{v.question}
                </h3>
                <h4 className='mb-1 text-sm opacity-75'>{v.anwser}</h4>
                <h4 className='text-sm opacity-75'>{v.anwser1}</h4>
                <h4 className='text-sm opacity-75'>{v.anwser2}</h4>
              </div>
            ))}
          </div>
        </div>
      </Page >
      {/* bar */}
      <div className='bg-gray-900'>
        <div className='flex flex-wrap  text-white container px-10 sm:px-15 md:px-20 mx-auto'>
          <div className='my-5 sm:w-2/3'>
            <div>
              <h1>关于我们</h1>
              <div className="border border-blue-300 w-5  mt-1 mb-2 rounded-lg"></div>
              <div className='opacity-75 font-light text-xs'>
                <h3 >LINGO凌高编程是由计算机科学家、天才程序员薛来历经三年潜心钻研，自主研发的编程语言LingoScript和编程平台LingoCode， 是面向8-18岁青少年的AI在线编程教育平台。
                </h3>
                <h3>
                  其核心技术是全球首创利用拼音作为编程入门工具，使用Ambient AI辅助教学，降低中国学生的学习门槛，用智慧的解决方案和适合中国人的硬核科技，帮助中国青少年快速掌握编程。更有独一无二的高级应用课程，AR与空间编程，AI人工智能算法入门，智能机器人等，并与现代程序语言 (Python,JavaScript等)通用，培养更多的青少年创客创造未来。
                </h3>
              </div>
            </div>
            <div>
              <h1 className='mt-5'>联系我们</h1>
              <div className=" border border-blue-300 w-5  mt-1 mb-2 rounded-lg"></div>
              <div className='flex flex-wrap opacity-75 font-light text-xs'>
                <div className='flex  mr-4 mb-2'>
                  <img src={map} className='w-5 mr-2 h-5' />
                  <h3>上海闵行区先锋街66号阿拉城2号楼302-303</h3>
                </div>
                <div className='flex  mr-4 mb-2'>
                  <img src={email} className='w-5 mr-2 h-5 ' />
                  <h3>candy@lingocode.cn</h3>
                </div>
                <div className='flex  mr-4 mb-2'>
                  <img src={phone} className='w-5 mr-2 h-5 ' />
                  <h3>客服电话：+86-173-1115-5836(周一至周日 8:00-21:00)</h3>
                </div>
              </div>
            </div>
          </div>
          <div className='flex sm:justify-center items-center sm:w-1/3  mb-5  '>
            <div>
              <div>关注我们</div>
              <div className="border border-blue-300 w-5   mt-1 mb-2 rounded-lg"></div>
              <img src={QR} className='w-32' />
              <div className='text-xs opacity-50 text-center block sm:hidden'>(微信长按,扫描二维码)</div>
            </div>
          </div>
        </div>
        {/* </div> */}

        <div className='text-xs text-center text-white  pb-5 bg-gray-900 font-light opacity-25'>
          <p className=" mb-1 pt-4">
            上海薛来网络科技有限公司  © 2020 版权所有
        </p>
          <p>
            沪 ICP 备 19039915 号
        </p>
        </div>
      </div>
    </>
  )
}

export default Faq