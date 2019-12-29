import React, { useRef, useEffect, useMemo } from 'react';
import { Fab } from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import tossable from "tossable";
import { mapRange } from '@lincode/math';
import { useCallback } from 'react';
import VisibilityDetector from './VisibilityDetecor';
//@ts-ignore
import { tween } from "shifty";
import useWindowWidth from '../utils/useWindowWidth';

function mapX(x: number): number {
  if (x < 0) return x * mapRange(x, 0, -250, 1, 6)
  return x
}

function mapZ(z: number): number {
  return mapRange(z, -60, -120, 0, 100)
}

function index2pos(x: number) {
  return -53.3 * x - 1;
}

function pos2index(x: number) {
  return Math.max(Math.round(-0.01875889 * x - 0.01845621), 0);
}

type Course = {
  title: string,
  subtitle: string,
  content?: string,
  time?: string,
  suit?: string,
  imgSrc?: string
};

const CourseCards: React.FC<{ dark?: boolean, courses: Array<Course> }> = props => {
  
  const containerRef = useRef<any>();
  const indexRef = useRef(0);
  const xRef = useRef(0);
  const cardElements = useMemo(() => new Array<HTMLElement>(), []);
  const windowWidth = useWindowWidth();
  const tossableHandleRef = useRef<any>();

  const nextCard = useCallback(() => {
    if (indexRef.current + 1 >= cardElements.length)
      return;

    tween({
      from: { val: xRef.current },
      to: { val: index2pos(indexRef.current + 1) },
      duration: 500,
      step: (state: any) => tossableHandleRef.current.set(state.val),
      easing: "easeInOutQuad"
    });
    
  }, []);

  const prevCard = useCallback(() => {
    if (indexRef.current - 1 < 0)
      return;
    
    tween({
      from: { val: xRef.current },
      to: { val: index2pos(indexRef.current - 1) },
      duration: 500,
      step: (state: any) => tossableHandleRef.current.set(state.val),
      easing: "easeInOutQuad"
    });

  }, []);

  const setCardElement = useCallback((el: HTMLDivElement | null) => {
    if (el) cardElements.push(el);
  }, []);

  useEffect(() => {
    const handle = tossable({
      touchTarget: containerRef.current,
      min: index2pos(props.courses.length - 1),
      max: 0,
      start: 0,
      current: () => xRef.current,
      speed: 0.2,
      bounceStiffness: 100,
      step: val => {
        xRef.current = val;
        indexRef.current = Math.min(pos2index(val), props.courses.length);
    
        const pos = val - 50;
        for (let i = 0; i < cardElements.length; ++i) {
          const cardEl = cardElements[i];
          cardEl.style.transform = `translate3d(${mapX(pos + i * 50)}px, 0px, ${mapZ(pos) - i * 100}px)`;
        }
      }
    });

    tossableHandleRef.current = handle;

    return () => {
      handle.cancel();
    };
  }, []);

  const cardHeight = 450;

  return (
    <VisibilityDetector>
      {visible => (
        <div className="w-full" ref={containerRef}>
          <div className="mx-auto" style={{ width: 295, height: cardHeight }}>
            <div className="transition-1000 change-opacity change-transform" style={{
              height: cardHeight - 100,
              perspective: "1000px",
              perspectiveOrigin: "500% 50%",
              marginLeft: 85,
              transform: visible ? "scale(1)" : "scale(0.75)",
              opacity: visible ? 1 : 0
            }}>
              {props.courses.map((c, i) => (
                <div key={i} ref={setCardElement} style={{
                  position: "absolute",
                  zIndex: props.courses.length - i
                }}>
                  <div className="shadow-2xl p-10 bg-cover bg-center rounded overflow-hidden text-white" style={{
                    width: 295,
                    height: cardHeight,
                    backgroundImage: c.imgSrc ? `url(${c.imgSrc})` : ""
                  }}>
                    <div className="absolute w-full h-full bg-black inset-0" style={{
                      opacity: props.dark ? 0.5 : 0.1
                    }} />
                    <div className="font-bold">{c.title}</div>
                    <div className='font-bold text-2xl my-4'>{c.subtitle}</div>
                    <div className="text-sm">{c.content}</div>
                    <div className='absolute bottom-0 mb-10'  >
                      <div className="text-sm mb-1">{c.time}</div>
                      <div className="text-sm ">{c.suit}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="font-normal text-sm opacity-25 text-center text-white mt-5 sm:mt-10">
            （左右滑动查看）
          </div>
          {windowWidth > 640 && (
            <>
              <Fab color="primary" onClick={nextCard} style={{
                position: "absolute",
                right: '5%',
                top: '45%'
              }}>
                <ArrowForwardIcon />
              </Fab>
              <Fab color="primary" onClick={prevCard} style={{
                position: "absolute",
                left: '5%',
                top: '45%'
              }} >
                <ArrowBackIcon />
              </Fab>
            </>
          )}
        </div>
      )}
    </VisibilityDetector>
  )
};
export default CourseCards;