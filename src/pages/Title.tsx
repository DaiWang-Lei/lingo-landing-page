import React from 'react'
import Page from '../components/Page'
import Mountain3D from '../components/Mountain3D'

const Title: React.FC<{ bgColor: string, pageRef: any, currentPage: number }> = props => { 
  return (
    <Page
     background2="linear-gradient(to bottom, rgb(127,183,207), rgb(127,183,207), rgb(66,147,255))"
     background={props.bgColor}
     pageRef={props.pageRef}
    >
      <div style={{ maxWidth: 640 }} className="text-left md:text-center mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-3 text-center">
          <span className="inline-block whitespace-no-wrap text-center">
            凌高编程 &nbsp;&nbsp;
          </span>
          <span className="inline-block whitespace-no-wrap text-center">
            赋能你的创造力
          </span>
        </h1>
        <h2 className="text-xl md:text-3xl opacity-75 mb-5 text-center">
          <span className="inline-block whitespace-no-wrap text-center">
            最适合中国青少年的
          </span>
          <span className="inline-block whitespace-no-wrap ">
            AI在线编程平台 (8-18岁)
          </span>
        </h2>
        <div className="text-sm opacity-75 text-center sm:text-left">
          <span className="block sm:inline-block">每个孩子天生都充满创造力，</span> 
          <span className="block sm:inline-block">他们的想象力与好奇心会，</span>
          <span className="block sm:inline-block">编绘出绚丽多彩的独特世界。</span>
          <span className="block sm:inline-block">凌高编程希望将孩子的奇思妙想，</span>
          <span className="block sm:inline-block">通过编程这一工具自由表达出来并分享。</span>
          <span className="block sm:inline-block">凌高希望滋养每一个孩子的探索力和创造力。</span>
          <span className="block sm:inline-block">以科技表达自我，将梦想编程现实，</span>
          <span className="block sm:inline-block">用想法改变世界。</span>
        </div>
      </div>
      <Mountain3D currentPage={props.currentPage} />
    </Page>
  )
}
export default Title