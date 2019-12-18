import React from 'react'
import Page from '../components/Page'
import ContentCard from '../components/ContentCard'
import GearSvg from '../components/GearsSvg'
import AiSvg from '../components/AiSvg'
import RobotSvg from '../components/RobotSvg'
import RadarChart from '../components/RadarChart'

const WhyCode: React.FC<{ pageRef: any, bgColor: string }> = props => {
  return (
    <Page pageRef={props.pageRef} background={props.bgColor}>
      <h2 className="text-3xl sm:text-5xl opacity-75 mb-10 mt-10 text-white text-center font-bold text-blue-200">
        孩子为什么要编程？
      </h2>
      {/* <h2>激发旺盛的好奇心</h2>
      <h2>保持持续的专注力</h2>
      <h2>训练纯粹的自驱力</h2>
      <h2>锻炼严谨的逻辑思维能力</h2>
      <h2>培养整理信息、解决问题的能力</h2> */}

      {/* <div className="w-full flex justify-center">
        <div style={{ maxWidth: 640, transition: "color 1000ms ease" }}>
          <ContentCard icon={<GearSvg />}>
            激发旺盛的好奇心,培养持续的专注力
          </ContentCard>

          <ContentCard icon={<AiSvg />}>
            锻炼严谨的逻辑思维能力, 训练纯粹的自驱力
          </ContentCard>

          <ContentCard icon={<RobotSvg />}>
            培养整理信息、解决问题的能力
          </ContentCard>
        </div>
      </div> */}

      <RadarChart />

    </Page>
  )
}
export default WhyCode