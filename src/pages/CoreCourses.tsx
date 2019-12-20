import React from 'react'
import Page from '../components/Page'
import CourseCards from '../components/CourseCards'

const courses = {
  title: "核心基础课程",
  data: [
    { title: "Level 0（4节）", subtitle: "零基础入门课", content: "从编程最基础的概念开始学起，通过简单的代码来完成漂亮复杂的视觉效果，并在这个过程中培养孩子的美感和空间想象力。", time: '学时：共4小时', suit: '适合三年级以上零基础学生' },
    { title: "Level 1（12-20节）", subtitle: "函数与变量", content: "在孩子成长的过程中，使用工具解决问题的能力至关重要，而编程恰好是培养这种能力的绝佳途径。在level1的课程中，孩子能学会如何使用平台提供的编程接口来操纵“程序”这一极其复杂的工具，来解决现实生活和游戏世界里的种种问题。", time: '学时：3-6个月', suit: '适合三年级以上完成L0课程的学生' },
    { title: "Level 2 （12-20节）", subtitle: "事件与流程控制", content: "编程是逻辑、数学、工程、与艺术的完美结合体。在level2里，孩子会强化训练自己的逻辑推导能力，学会如何将问题分解成可递归解决的步骤，并结合自己的美感用算法创造出令人惊讶的数字艺术", time: '学时：3-6个月', suit: '适合三年级以上完成L1课程的学生' },
    { title: "Level 3 （12-20节）", subtitle: "类型", content: "拥有工程思维的孩子面对任何困难都不会慌，因为工程思维的本质就是如何将大到无法解决的问题分解成可以各个击破的小目标。Level 3 的课程将教会孩子工程的最佳实践 – 如何最大化代码和资源的可重复利用性，如何组织一个复杂的系统，以及如何使用正确的工具来解决正确的问题。", time: '学时：3-6个月', suit: '适合三年级以上完成L2课程的学生' },
    { title: "Level 4 (20-40节)", subtitle: "对接英文和Python", content: "要想成为出色的工程师，必须掌握和团队沟通的核心能力，因为世界上绝大多数伟大事物都是团队协作的成果。在level4中，孩子会将自己在前面的课程中学会的编程知识应用到python – 全球使用人数最多的程序语言，并学会如何用正确的英语词汇来描述这些概念，以便达到和全球编程达人交流协作的目的。", time: '学时：3-6个月', suit: '适合三年级以上完成L1-L3课程的学生' }
  ]
};

const CoreCourses: React.FC<{ pageRef: any, bgColor: any, textColor: any }> = (props) => {
  return (
    <Page className="select-none z-20"
      pageRef={props.pageRef}
      background={props.bgColor}
    >
      <h2 className="text-3xl sm:text-5xl opacity-75 mb-10 mt-10 text-center font-bold" style={{
        color: props.textColor,
        transition: "color 1000ms ease"
      }}>
        核心基础课程 <br /><span className='text-2xl sm:text-3xl'>LEVEL0-LEVEL4 </span>
      </h2>
      <CourseCards courses={courses} />
    </Page>
  )
}
export default CoreCourses