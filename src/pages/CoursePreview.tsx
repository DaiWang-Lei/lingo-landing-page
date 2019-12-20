import React from 'react'
import Page from '../components/Page'
const CoursePreview: React.FC<{videoSrc: any, pageRef: any}>= props => {
  return (
    <Page className='bg-blue-300' pageRef={props.pageRef}>
      <video src={props.videoSrc} id="player" controls />
    </Page>
  )
}

export default CoursePreview