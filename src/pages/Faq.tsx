import React from 'react'
import Page from '../components/Page'
//@ts-ignore
import fuiSrc from "../assets/fui.jpg";

const faq = [{
  id: 0,
  question: '凌高编程与Scratch编程有什么不同?',
  anwser: 'Scratch图形化编程侧重低幼龄的儿童编程思维和逻辑的起步学习，功能单一，并非真正的代码编程，对于孩子日后学习Python，C++等编程语言帮助有限；',
  anwser1: '相比之下，Scratch如同“编程模拟舱”，而凌高编程推出的LingoScript语言则更像一架操作环境真实的“编程教练机”。我们采用的文字编程和语法更加接近现代程序语言，并且可以无缝对接Python和Javascript的生态系统，是孩子更容易学会的“真编程”。'
}, {
  id: 1,
  question: '为什么选择凌高编程？',
  anwser: '业界标杆'
}, {
  id: 2,
  question: '需要多久可以学会？',
  anwser: '很快也可以很慢'
}, {
  id: 3,
  question: '学会之后可以做什么？',
  anwser: '改变世界'
}]


const Faq: React.FC<{ bgColor: any, textColor: any }> = props => {
  return (
    <Page
      className="bg-white z-10"
      background={props.bgColor}
      background2={`url(${fuiSrc})`}
      insert={(
        <div className="w-full h-full absolute" style={{
          background: "linear-gradient(to bottom, rgb(0,178,166) 0%, rgba(0,0,0,0) 100%)"
        }} />
      )}
      useFooter
    >
      <div className="lg:flex items-center" style={{ color: "rgba(255,255,255,0.75)  text-white " }}>
        <div className=' w-full mb-10  text-white mt-12'>
          <h1 className='font-bold text-2xl my-4'>常见问题</h1>
          {faq.map((v, i) => (
            <div className='my-10' key={v.id}>
              <h3  className='text-white text-xl mb-4' >{i + 1}.{v.question}
              </h3>
              <h4 className='mb-3 text-base'>{v.anwser}</h4>
              <h4 className='text-base'>{v.anwser1}</h4>


            </div>
          ))}
        </div>
      </div>

      <div className='text-sm text-center text-white  pb-10'>
        <p className="opacity-50 mb-2">
          上海薛来网络科技有限公司  © 2020 版权所有
        </p>
        <p className="opacity-50">
          沪 ICP 备 19039915 号
        </p>
      </div>
    </Page >
  )
}

export default Faq