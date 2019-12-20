import React, { useEffect, useState, createRef } from "react";
import "tailwindcss/dist/components";
import "tailwindcss/dist/base";
import "tailwindcss/dist/utilities";
import "./App.css";
// 导入自己的组件
import "plyr/dist/plyr.css";
import tween from "ambients-tween";
import Title from "./pages/Title";
import WhyUs from "./pages/WhyUs";
import Founders from "./pages/Founders";
import CoreCourses from "./pages/CoreCourses";
import AdvancedCourses from "./pages/AdvancedCourses";
import CoursePreview from "./pages/CoursePreview";
import WhyCode from "./pages/WhyCode";
import AppBarNav from "./components/AppBarNav";
import VisibilityDetector from "./components/VisibilityDetecor";
import useZeroScrollTop from "./hooks/useZeroScrollTop";

const titleRef = createRef<any>();
const whyCodeRef = createRef<any>();
const whyChooseUsRef = createRef<any>();
const coreCoursesRef = createRef<any>();
const coursePreviewRef = createRef<any>();
const foundersRef = createRef<any>();

function scrollPage(tabIndex: number) {
  let top = 0;

  if (tabIndex === 1)
    top = whyCodeRef.current.offsetTop
  else if (tabIndex === 2)
    top = coreCoursesRef.current.offsetTop
  else if (tabIndex === 3)
    top = coursePreviewRef.current.offsetTop;
  else if (tabIndex === 4)
    top = foundersRef.current.offsetTop;

  tween({
    from: window.pageYOffset,
    to: top,
    step: val => window.scrollTo(0, val),
    duration: 1000
  });
};

let tabIndex = 0;
const visiblePagesSet = new Set<number>();

const App: React.FC = () => {
  const [visiblePages, setVisiblePages] = useState([] as Array<number>);

  const page = visiblePages.sort().pop();

  if (page === 0)
    tabIndex = 0;
  else if (page === 1 || page === 2)
    tabIndex = 1;
  else if (page === 3 || page === 4)
    tabIndex = 2;
  else if (page === 5)
    tabIndex = 3;
  else if (page === 6)
    tabIndex = 4;

  let bgColor = "transparent";
  let textColor = "black";
  let appBarColor = "rgba(255, 255, 255, 0.9)";

  if (useZeroScrollTop())
    appBarColor = "transparent";

  if (tabIndex === 1) {
    bgColor = "rgb(29,28,51)";
    textColor = "white";
    appBarColor = "rgba(0, 0, 0, 0.75)";
  }
  else if (tabIndex === 2) {
    bgColor = "white";
    textColor = "black";
    appBarColor = "rgba(255, 255, 255, 0.75)";
  }
  else if (tabIndex === 3) {
    textColor = "white";
    appBarColor = "rgba(0, 0, 0, 0.75)";
  }
  else if (tabIndex === 4) {
    textColor = "white"
    appBarColor = "rgba(0, 0, 0, 0.75)";
  }

  return (
    <div className="stylefix w-full absolute overflow-hidden">

      <AppBarNav page={tabIndex} scrollPage={scrollPage} appBarColor={appBarColor} textColor={textColor} />

      {[
        <Title pageRef={titleRef} bgColor={bgColor} />,
        <WhyCode pageRef={whyCodeRef} bgColor={bgColor} textColor={textColor} />,
        <WhyUs bgColor={bgColor} pageRef={whyChooseUsRef} />,
        <CoreCourses textColor={textColor} pageRef={coreCoursesRef} bgColor={bgColor} />,
        <AdvancedCourses textColor={textColor} bgColor={bgColor} />,
        <CoursePreview bgColor={bgColor} textColor={textColor} pageRef={coursePreviewRef} />,
        <Founders pageRef={foundersRef} bgColor={bgColor} textColor={textColor} />

      ].map((PageComponent, i) => (
        
        <VisibilityDetector key={i} topOffset={300} onChange={visible => {
          if (visible)
            visiblePagesSet.add(i);
          else
            visiblePagesSet.delete(i);

          setVisiblePages([...visiblePagesSet])
        }}>
          {PageComponent}
        </VisibilityDetector>
      ))}
    </div>
  );
};
export default App;
