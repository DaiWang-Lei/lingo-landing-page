import React from 'react'
import Page from '../components/Page'
import RadarChart from '../components/RadarChart'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import Progress from "../components/Progress"

const WhyCode: React.FC<{ pageRef: any, bgColor: string, textColor: string }> = props => {
  const [chartSize, setChartSize] = useState(300);
  const [longestWidth, setLongestWidth] = useState(0);
  const [centerChart, setCenterChart] = useState(false);

  const radarChartContainerRef = useRef<any>();
  const longestRef = useRef<any>();

  useEffect(() => {
    const resizeCB = () => {
      setChartSize(Math.max(radarChartContainerRef.current.clientWidth, 400));
      setLongestWidth(longestRef.current.clientWidth);
      setCenterChart(window.innerWidth < 1024);
    };
    resizeCB();

    window.addEventListener("resize", resizeCB);

    return () => {
      window.removeEventListener("resize", resizeCB);
    };
  }, []);

  return (
    <Page
      pageRef={props.pageRef}
      background={props.bgColor}
      background2="linear-gradient(to bottom, rgb(66,147,255), rgb(29,28,51))"
    >
      <div className="lg:flex items-center" style={{ color: "rgba(255,255,255,0.75)" }}>
        <div className='lg:w-1/2 w-full mb-10 '>
          <h2
           className="text-2xl sm:text-3xl xl:text-4xl mb-10 font-bold lg:text-right text-center transition-1000 change-opacity"
           style={{ color: props.textColor }}
          >
            学编程，构建核心竞争力
          </h2>
          
          <div className="sm:flex items-center mb-2">
            <div style={{ width: longestWidth }} className="sm:text-right mb-1 sm:mb-0">
              激发旺盛的好奇心
            </div>
            <div className="flex-grow sm:pl-3">
              <Progress value="85%" />
            </div>
          </div>

          <div className="sm:flex items-center mb-2">
            <div style={{ width: longestWidth }} className="sm:text-right mb-1 sm:mb-0">
              培养持续的专注度
            </div>
            <div className="flex-grow sm:pl-3">
              <Progress value="80%" />
            </div>
          </div>
          
          <div className="sm:flex items-center mb-2">
            <div style={{ width: longestWidth }} className="sm:text-right mb-1 sm:mb-0">
              训练纯粹的执行力
            </div>
            <div className="flex-grow sm:pl-3 mb-2">
              <Progress value="80%" />
            </div>
          </div>

          <div className="sm:flex items-center mb-2">
            <div style={{ width: longestWidth }} className="sm:text-right mb-1 sm:mb-0">
              强化灵活的表达力
            </div>
            <div className="flex-grow sm:pl-3">
              <Progress value="85%" />
            </div>
          </div>

          <div className="sm:flex items-center mb-2">
            <div style={{ width: longestWidth }} className="sm:text-right mb-1 sm:mb-0">
              锻炼严谨的逻辑思维
            </div>
            <div className="flex-grow sm:pl-3">
              <Progress value="100%" />
            </div>
          </div>

          <div className="sm:flex items-center mb-2">
            <div className="flex-shrink mb-1 sm:mb-0" ref={longestRef}>
              提升整合信息、解决问题的能力
            </div>
            <div className="flex-grow sm:pl-3">
              <Progress value="90%" />
            </div>
          </div>
        </div>
        <div className="w-10" />
        <div className='lg:w-1/2 w-full' ref={radarChartContainerRef} >
          <RadarChart chartSize={chartSize} padding={200} style={
            centerChart ? { marginLeft: "50%", transform: "translateX(-50%)" } : undefined
          } />
        </div>
      </div>
    </Page>
  )
}
export default WhyCode