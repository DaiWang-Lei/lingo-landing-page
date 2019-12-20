import React from 'react'
import Page from '../components/Page'
import Card from '../components/Card'

const WhyUs: React.FC<{bgColor:any,pageRef:any}> = props => {
  return(
    <Page
    className="flex justify-center items-center"
    background={props.bgColor}
    background2="linear-gradient(180deg, rgb(29,28,51) 0%, rgb(255,255,255) 100%)"
    pageRef={props.pageRef}
    >
      <h2 className="text-3xl sm:text-5xl opacity-75 mb-10 text-white text-center font-bold">
        为什么选择凌高编程？
      </h2>
      <div className="flex flex-wrap">
        <Card className="bg-gradient-2">
          <p className="text-xl font-bold mb-3">首创拼音编程 降低学习门槛</p>
          <span className="opacity-75">
            中国青少年学习编程最大的障碍是记不住复杂的英文指令。凌高编程全球首创拼音编程，基于现代汉语,更接近自然语言，降低中国学生的学习门槛。
          </span>
        </Card>
        <Card className="bg-gradient-3 ">
          <p className="text-xl font-bold mb-3">计算机科学家 独家学习秘方</p>
          <span className="opacity-75">
            创始人薛来10岁开始自学编程，是拥有17年编程经验的全球顶级计算机开发者和“天才学霸”，多次获得国际计算机比赛冠军，比赛经验丰富。被誉为“影响世界华人盛典——希望之星”。跟随天才程序员学习独家秘籍，成为下一个“全球小极客”。
          </span>
        </Card>
        <Card className="bg-gradient-4">
          <p className="text-xl font-bold mb-3">国际水平作品 即学即编即会</p>
          <span className="opacity-75">
            强大编程工具，与现代编程语言通用，辅助学生快速学习，从拼音入门渐进学习，熟练后进阶英文编程，最短时间创作作品参加国际大赛，为了让孩子获得一张未来世界的“通行证”
          </span>
        </Card>
        <Card className="bg-gradient-5">
          <p className="text-xl font-bold mb-3">注重实际操作 真实编程环境</p>
          <span className="opacity-75">
            核心课程可视化呈现，课程安排注重实际运用，为孩子创造真实编程环境，使用真实代码编程。用智慧的解决方案和适合中国人的硬核科技，帮助中国青少年快速掌握编程。
          </span>
        </Card>
        <Card className="bg-gradient-7">
          <p className="text-xl font-bold mb-3">在线STEM教育 学习时间灵活</p>
          <span className="opacity-75">
            中国青少年学习编程最大的障碍是记不住复杂的英文指令，凌高编程全球首创拼音编程，基于现代汉语,更接近自然语言，降低中国学生的学习门槛；
          </span>
        </Card>
        <Card className="bg-gradient-6">
          <p className="text-xl font-bold mb-3">多元课程体系 锻炼严谨思维</p>
          <span className="opacity-75">
            课程体系设计板块多元，趣味与实用性兼顾，更有独立开发的高级应用课程，AR与空间编程、AI算法入门、智能机器人等。培养真正具备创新能力、动手能力、团队合作能力的严谨思考者。
          </span>
        </Card>
      </div>
    </Page>
  )
}
export default WhyUs