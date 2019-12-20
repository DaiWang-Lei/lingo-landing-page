import React from 'react'
import Page from '../components/Page'
//@ts-ignore
import backgroundSrc from "../assets/lingo-ipad.png"
import { IconButton, Dialog, Slide } from '@material-ui/core'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import CloseIcon from '@material-ui/icons/Close';

import { TransitionProps } from '@material-ui/core/transitions/transition';
import { useState } from 'react';
//@ts-ignore
import videoSrc from "../assets/preview.mp4"
import { useCallback } from 'react';
//@ts-ignore
import Plyr from "plyr";

const Transition = React.forwardRef<unknown, TransitionProps>(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
})

const CoursePreview: React.FC<{ pageRef: any, bgColor: any, textColor: any }> = props => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const initPlyr = useCallback((el: HTMLVideoElement | null) => {
    if (!el) return;

    setTimeout(() => {
      el.src = videoSrc;
      new Plyr(el);
    }, 500);
    
  }, [])

  return (
    <Page
      pageRef={props.pageRef}
      background={props.bgColor}
      background2={`url(${backgroundSrc})`}
      insert={(
        <div className="bg-gradient-9 w-full h-full opacity-75 absolute">
          <div className="w-full h-full absolute" style={{
            background: "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(35,44,56,1) 100%)"
          }} />
        </div>
      )}
    >
      <div className="w-full h-full absolute" onClick={handleClickOpen}>

        <div className="mt-56">
          <h1 className="text-3xl text-left sm:text-5xl opacity-75 font-bold mb-3 " style={{
            color: props.textColor,
            transition: "color 1000ms ease"
          }}>
            观看我们的课程预览
          </h1>
          <div className="text-white">
            <IconButton style={{ border: "1px solid white", color: "white" }}>
              <PlayArrowIcon />
            </IconButton>
            <span className="ml-3">点击这里播放</span>
          </div>
        </div>
      </div>

      <Dialog fullScreen open={open} TransitionComponent={Transition}>
        <div className="bg-black w-full h-full absolute" />
        <video ref={initPlyr} style={{ maxWidth: "100vw", maxHeight: "100vh" }} />
        <IconButton className='absolute' onClick={handleClose} style={{ border: "1px solid white", color: "white", margin: 20 }}>
          <CloseIcon />
        </IconButton>
      </Dialog>

    </Page>
  )
}

export default CoursePreview