import React from 'react'
import Page from '../components/Page'
import Mountain3D from '../components/Mountain3D'

const Title: React.FC<{ bgColor: string, pageRef: any, currentPage: number }> = props => { 
  return (
    <Page
     background2="linear-gradient(to bottom, rgb(255,177,145), rgb(255,153,111), rgb(66,147,255))"
     background={props.bgColor}
     pageRef={props.pageRef}
    >
      <div style={{ maxWidth: 640 }} className="text-left md:text-center mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">
          <span className="inline-block whitespace-no-wrap">
            凌高编程，
          </span>
          <span className="inline-block whitespace-no-wrap">
            赋能你的创造力
          </span>
        </h1>
        <h2 className="text-xl md:text-3xl opacity-75 mb-5">
          <span className="inline-block whitespace-no-wrap">
            最适合中国青少年的
          </span>
          <span className="inline-block whitespace-no-wrap">
            AI在线编程平台 (8-18岁)
          </span>
        </h2>
        <div className="text-sm opacity-75 text-left">
          每个孩子天生都充满创造力，他们的想象力与好奇心会编绘出绚丽多彩的独特世界。凌高编程希望将孩子的奇思妙想通过编程这一工具自由表达出来，并分享给大家。凌高希望滋养每一个孩子的探索力和创造力，以科技表达自我，将梦想编程现实，用想法改变世界。
        </div>
      </div>
      <Mountain3D currentPage={props.currentPage} />
    </Page>
  )
}
export default Title