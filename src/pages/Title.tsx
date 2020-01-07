import React from 'react'
import Page from '../components/Page'
import Mountain3D from '../components/Mountain3D'
import useWindowWidth from '../utils/useWindowWidth'

const Title: React.FC<{ bgColor: string, pageRef: any, currentPage: number }> = props => { 
  const windowWidth = useWindowWidth();

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
        {windowWidth > 640 ? (
          <div className="text-sm opacity-75 text-left">
            <span>每个孩子天生都充满创造力，</span> 
            <span>他们的想象力与好奇心，</span>
            <span>会编绘出绚丽多彩的世界。</span>
            <span>LINGO希望将孩子的奇思妙想，</span>
            <span>通过编程自由表达出来并分享。</span>
            <span>以科技表达自我，将梦想编程现实，</span>
            <span>用想法改变世界。</span>
          </div>
        ) : (
          <div className="text-sm opacity-75 text-center">
            <span className="block">每个孩子天生都充满创造力，</span> 
            <span className="block">他们的想象力与好奇心，</span>
            <span className="block">会编绘出绚丽多彩的世界。</span>
            <span className="block">LINGO希望将孩子的奇思妙想，</span>
            <span className="block">通过编程自由表达出来并分享。</span>
            <span className="block">以科技表达自我，将梦想编程现实，</span>
            <span className="block">用想法改变世界。</span>
          </div>
        )}
      </div>
      <Mountain3D currentPage={props.currentPage} />
    </Page>
  )
}
export default Title