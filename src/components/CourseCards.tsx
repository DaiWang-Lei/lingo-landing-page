import React, { useState, useEffect, useLayoutEffect, useRef } from 'react'
import { Fab } from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import tween from "ambients-tween";
import tossable from "tossable";
import { mapRange } from '@lincode/math';



function mapX(x: number): number {
  if (x < 0) return x * mapRange(x, 0, -250, 1, 6)
  return x
}

function mapZ(z: number): number {
  return mapRange(z, -60, -120, 0, 100)
}

export default function CourseCards(props:any) {
  
  
  const [stackX, setStackX] = useState(-50)
  const [currentCard, setCurrentCard] = useState(0)

  const touchDivRef = useRef<any>();

  useLayoutEffect(() => {
    const handle = tossable({
      target: touchDivRef.current,
      step: ({ x }) => {
        setStackX(x - 50)
        setCurrentCard(Math.max(Math.floor(x / 40 * -0.8), 0))
      },
      xMin: -160,
      xMax: 0,
      speed: 0.2
    })

    return () => {
      handle.stop();
    };
  }, [])

const nextCard = () => {
  tween({
    from: stackX,
    to: (currentCard + 2) * -52.2,
    step: setStackX,
    easing: "ease",
    duration: 500
  })
  setCurrentCard(currentCard + 1)
}

const previousCard = () => {
  tween({
    from: stackX,
    to: currentCard * -52.2,
    step: setStackX,
    easing: "ease",
    duration: 500
  })
  setCurrentCard(currentCard - 1)
}

  return (
    <div className="flex justify-center w-full">
      <div style={{ width: 295, height: 400 }}>
        <div style={{
          height: 300,
          perspective: "1000px",
          perspectiveOrigin: "500% 50%",
          marginLeft: 85

        }} ref={touchDivRef}>
          {props.courses.data.map((c:any, i:number) => (
            <div key={i} style={{
              position: "absolute",
              transform: `translate3d(${mapX(stackX + i * 50)}px, 0px, ${mapZ(stackX) - i * 100}px)`,
              zIndex: -i 
            }}>
              <div className="shadow-2xl bg-white" style={{ width: 295, height: 400 }}></div>
            </div>
          ))}
        </div>
      </div>
      <Fab color="primary" aria-label="add" onClick={nextCard} style={{
        position: "absolute",
        right: '5%',
        top: '45%'
      }}>
        <ArrowForwardIcon />
      </Fab>
      <Fab color="primary" aria-label="add" onClick={previousCard} style={{
        position: "absolute",
        left: '5%',
        top: '45%'
      }} >
        <ArrowBackIcon />
      </Fab>
    </div>
  )
}



