import React from 'react'
import Page from '../components/Page'
import ContentCard from '../components/ContentCard'
import GearSvg from '../components/GearsSvg'
import AiSvg from '../components/AiSvg'
import RobotSvg from '../components/RobotSvg'
import RadarChart from '../components/RadarChart'

const WhyCode: React.FC<{ pageRef: any, bgColor: string, textColor: string }> = props => {
  return (
    <Page
     pageRef={props.pageRef}
     background={props.bgColor}
     background2="linear-gradient(180deg, rgb(66,147,255) 0%, rgb(29,28,51) 100%)"
    >
      <h2 className="text-3xl sm:text-5xl opacity-75 mb-10 mt-10 text-white text-center font-bold" style={{
        color: props.textColor,
        transition: "color 1000ms ease"
      }}>
        孩子为什么要编程？
      </h2>

      <div className="w-full flex justify-center">
        <RadarChart />
      </div>

    </Page>
  )
}
export default WhyCode