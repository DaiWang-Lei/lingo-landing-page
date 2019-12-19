import React, { useCallback } from 'react'
import Page from '../components/Page'
import RadarChart from '../components/RadarChart'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { withStyles, lighten, LinearProgress } from '@material-ui/core';
import tween from "ambients-tween";
import Visibility from '../components/Visibility'

const WhyCode: React.FC<{ pageRef: any, bgColor: string, textColor: string }> = props => {
  const [chartSize, setChartSize] = useState(300);
  const [longestWidth, setLongestWidth] = useState(0);
  const [centerChart, setCenterChart] = useState(false);

  const [p0, setP0] = useState(0);
  const [p1, setP1] = useState(0);
  const [p2, setP2] = useState(0);
  const [p3, setP3] = useState(0);
  const [p4, setP4] = useState(0);

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

  // bar
  const BorderLinearProgress = withStyles({
    root: {
      height: 10,
      backgroundColor: lighten('#ff6c5c', 0.5),
    },
    bar: {
      borderRadius: 20,
      backgroundColor: '#ff6c5c',
    },
  })(LinearProgress);

  const onProgress1Visible = useCallback(() => {
    tween({
      from: 0, to: 65, duration: 2000,
      step: setP0
    })
    tween({
      from: 0, to: 70, duration: 2000,
      step: setP1
    })
    tween({
      from: 0, to: 70, duration: 2000,
      step: setP2
    })
    tween({
      from: 0, to: 90, duration: 2000,
      step: setP3
    })
    tween({
      from: 0, to: 85, duration: 2000,
      step: setP4
    })
  }, []);

  return (
    <Page
      pageRef={props.pageRef}
      background={props.bgColor}
      background2="linear-gradient(180deg, rgb(66,147,255) 0%, rgb(29,28,51) 100%)"
    >
      <div className="lg:flex items-center lg:mt-32 xl:mt-20">
        <div className='lg:w-1/2 w-full mb-10 '>
          <h2 className="text-3xl sm:text-5xl opacity-75 mb-10 text-white font-bold lg:text-right text-center " style={{
            color: props.textColor,
            transition: "color 1000ms ease"
          }}>
            为什么要编程
          </h2>
          
          <div className="flex items-center text-white mb-2 opacity-50">
            <div style={{ width: longestWidth }} className="text-right">
              激发旺盛的好奇心
            </div>
            <Visibility onVisible={onProgress1Visible}>
              <div className="flex-grow pl-3">
                <BorderLinearProgress variant="determinate" value={p0} />
              </div>
            </Visibility>
          </div>

          <div className="flex items-center text-white mb-2 opacity-50">
            <div style={{ width: longestWidth }} className="text-right">
              保持持续的专注力
            </div>
            <div className="flex-grow pl-3">
              <BorderLinearProgress variant="determinate" value={p1} />
            </div>
          </div>
          
          <div className="flex items-center text-white mb-2 opacity-50">
            <div style={{ width: longestWidth }} className="text-right">
              训练纯粹的自驱力
            </div>
            <div className="flex-grow pl-3 text-white mb-2">
              <BorderLinearProgress variant="determinate" value={p2} />
            </div>
          </div>

          <div className="flex items-center text-white mb-2 opacity-50">
            <div style={{ width: longestWidth }} className="text-right">
              锻炼严谨的逻辑思维能力
            </div>
            <div className="flex-grow pl-3">
              <BorderLinearProgress variant="determinate" value={p3} />
            </div>
          </div>

          <div className="flex items-center text-white mb-2 opacity-50">
            <div className="flex-shrink" ref={longestRef}>
             培养整理信息、解决问题的能力
            </div>
            <div className="flex-grow pl-3">
              <BorderLinearProgress variant="determinate" value={p4} />
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