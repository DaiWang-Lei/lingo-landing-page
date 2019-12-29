import React from 'react'
import Page from '../components/Page'
//@ts-ignore
import backgroundSrc from "../assets/lingo-ipad.jpg"
import { IconButton, Dialog, Slide } from '@material-ui/core'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import CloseIcon from '@material-ui/icons/Close';

import { TransitionProps } from '@material-ui/core/transitions/transition';
import { useState } from 'react';
//@ts-ignore
import videoSrc from "../assets/preview.mp4"
import { useCallback } from 'react';

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

    //@ts-ignore
    const jsPromise = import("plyr");
    //@ts-ignore
    const cssPromise = import("plyr/dist/plyr.css");
    const timeoutPromise = new Promise(resolve => setTimeout(resolve, 500));

    Promise.all([jsPromise, cssPromise, timeoutPromise]).then(result => {
      const module: any = result[0];
      const Plyr = module.default;
      el.src = videoSrc;
      new Plyr(el);
    });
    
  }, [])

  return (
    <Page
     pageRef={props.pageRef}
     background={props.bgColor}
     background2={`url(${backgroundSrc})`}
     useFooter
     useHeader
     insert={(
       <div className="w-full h-full absolute" style={{
         background: "linear-gradient(to bottom, rgba(145,234,228,0.25), rgba(134,168,231,0.25), rgba(127,127,213,0.25))"
       }}>
         <div className="w-full h-20 absolute" style={{
           background: "linear-gradient(to bottom, rgb(49,83,82), rgba(49,83,82,0))"
         }} />
         <div className="w-full h-20 absolute bottom-0" style={{
           background: "linear-gradient(to bottom, rgba(53,54,77,0), rgb(51,50,74))"
         }} />
       </div>
     )}
    >
      <div className="flex items-center w-full h-screen" onClick={handleClickOpen}>
        <div className="mx-auto" style={{ width: 640, maxWidth: "100%" }}>
          <h1 className="text-2xl sm:text-4xl text-left opacity-75 font-bold mb-3 text-white">
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
        <div className="bg-black w-full h-full absolute flex justify-center items-center">
          <video ref={initPlyr} style={{ maxWidth: "100vw", maxHeight: "100vh" }} />
        </div>
        <IconButton className='absolute' onClick={handleClose} style={{ border: "1px solid white", color: "white", margin: 20 }}>
          <CloseIcon />
        </IconButton>
      </Dialog>

    </Page>
  )
}

export default CoursePreview