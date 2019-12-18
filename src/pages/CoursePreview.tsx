import React from 'react'
import Page from '../components/Page'
const CoursePreview: React.FC<{videoSrc: any}>= props => {
  return (
    <Page className='bg-blue-300'>
      <video src={props.videoSrc} id="player" controls />
    </Page>
  )
}

export default CoursePreview