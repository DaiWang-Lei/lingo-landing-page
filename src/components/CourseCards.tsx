import React, { useState } from 'react'
import { Fab } from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import tween from "ambients-tween";
import tossable from "tossable";
import { mapRange } from '@lincode/math';
import { useCallback } from 'react';

function mapX(x: number): number {
  if (x < 0) return x * mapRange(x, 0, -250, 1, 6)
  return x
}

function mapZ(z: number): number {
  return mapRange(z, -60, -120, 0, 100)
}

function mapXMin(x: number) {
  return -134469900 + (58.8383 + 134469900) / (1 + (x/5150293) ** 0.9473289);
}

const CourseCards: React.FC<{ courses: any }> = props => {
  const [stackX, setStackX] = useState(-50)
  const [currentCard, setCurrentCard] = useState(0)

  const initTouch = useCallback((el: HTMLDivElement | null) => {
    if (!el) return;

    const handle = tossable({
      target: el,
      step: ({ x }) => {
        setStackX(x - 50)
        setCurrentCard(Math.max(Math.floor(x / 40 * -0.8), 0))
      },
      xMin: mapXMin(props.courses.data.length),
      xMax: 0,
      speed: 0.2
    })
  }, []);

  //1:0 2:-55 3:108 4:-160 5: -210

  const nextCard = useCallback(() => {
    tween({
      from: stackX,
      to: (currentCard + 2) * -52.2,
      step: setStackX,
      easing: "ease",
      duration: 500
    })
    setCurrentCard(currentCard + 1)
  }, [])

  const previousCard = useCallback(() => {
    tween({
      from: stackX,
      to: currentCard * -52.2,
      step: setStackX,
      easing: "ease",
      duration: 500
    })
    setCurrentCard(currentCard - 1)
  }, [])

  const cardHeight = 450;

  return (
    <div className="flex justify-center w-full">
      <div style={{ width: 295, height: cardHeight }}>
        <div style={{
          height: cardHeight - 100,
          perspective: "1000px",
          perspectiveOrigin: "500% 50%",
          marginLeft: 85

        }} ref={initTouch}>
          {props.courses.data.map((c: any, i: number) => (
            <div key={i} style={{
              position: "absolute",
              transform: `translate3d(${mapX(stackX + i * 50)}px, 0px, ${mapZ(stackX) - i * 100}px)`,
              zIndex: -i
            }}>
              <div className="shadow-2xl bg-white p-10 " style={{ width: 295, height: cardHeight }}>
                <div className="font-bold opacity-50">{c.title}</div>
                <div className='font-bold text-2xl my-4'>{c.subtitle}</div>
                <div className="text-sm opacity-75">{c.content}</div>
                <div className='absolute bottom-0 mb-10 text-blue-700'  >
                  <div className="text-sm opacity-75  mb-1">{c.time}</div>
                  <div className="text-sm opacity-75  ">{c.suit}</div>
                </div>
              </div>
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
};
export default CourseCards;