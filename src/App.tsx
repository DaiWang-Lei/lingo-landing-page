import React, { useState, useMemo, useRef, useCallback } from "react";
import Title from "./pages/Title";
import WhyUs from "./pages/WhyUs";
import Founders from "./pages/Founders";
import CoreCourses from "./pages/CoreCourses";
import AdvancedCourses from "./pages/AdvancedCourses";
import CoursePreview from "./pages/CoursePreview";
import WhyCode from "./pages/WhyCode";
import AppBarNav from "./components/AppBarNav";
import VisibilityDetector from "./components/VisibilityDetecor";
import store from "./utils/store";
import Faq from "./pages/Faq";

export const useIsLoaded = store(false);

const App: React.FC = () => {
  const visiblePagesSet = useMemo(() => new Set<number>(), []);

  const [visiblePages, setVisiblePages] = useState([] as Array<number>);

  const titleRef = useRef<any>();
  const whyCodeRef = useRef<any>();
  const whyChooseUsRef = useRef<any>();
  const coreCoursesRef = useRef<any>();
  const coursePreviewRef = useRef<any>();
  const foundersRef = useRef<any>();

  const page = visiblePages.sort().pop() ?? 0;

  let tabIndex = 0;

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
  let appBarColor = "rgba(153,204,255, 0.75)";

  if (page === 1) {
    bgColor = "rgb(29,28,51)";
    textColor = "white";
    appBarColor = "rgba(29, 28, 51, 0.75)";
  }
  else if (page === 2) {
    bgColor = "rgb(47,37,93)";
    textColor = "white";
    appBarColor = "rgba(47, 37, 93, 0.75)";
  }
  else if (page === 3) {
    bgColor = "rgba(47,37,93,0.5)";
    textColor = "white";
    appBarColor = "rgba(44, 97, 147, 0.75)";
  }
  else if (page === 4) {
    bgColor = "rgba(0,0,0,0.5)";
    textColor = "white";
    appBarColor = "rgba(22, 22, 22, 0.75)";
  }
  else if (page === 5) {
    bgColor = "rgba(47,37,93,0.5)";
    textColor = "white";
    appBarColor = "rgba(45, 55, 88, 0.75)";
  }
  else if (page === 6) {
    bgColor = "rgba(0,0,0,0.25)";
    textColor = "white";
    appBarColor = "rgba(39, 52, 65, 0.75)";
  }
  else if (page === 7) {
    bgColor = "rgba(29,28,51,0.75)";
    textColor = "white";
    appBarColor = "rgba(39, 52, 65, 0.75)";
  }


  const scrollPage = useCallback((tabIndex: number) => {
    let top = 0;
  
    if (tabIndex === 1)
      top = whyCodeRef.current.offsetTop
    else if (tabIndex === 2)
      top = coreCoursesRef.current.offsetTop
    else if (tabIndex === 3)
      top = coursePreviewRef.current.offsetTop;
    else if (tabIndex === 4)
      top = foundersRef.current.offsetTop;
  
    window.scrollTo(0, top);

  }, []);

  const isLoaded = useIsLoaded()[0];

  return (
    <div className={`stylefix w-full absolute overflow-hidden ${isLoaded ? "h-auto" : "h-screen"}`}>

      <AppBarNav page={tabIndex} scrollPage={scrollPage} appBarColor={appBarColor} textColor={textColor} />

      {[
        <Title pageRef={titleRef} bgColor={bgColor} currentPage={page} />,
        ...(isLoaded ? [
          <WhyCode pageRef={whyCodeRef} bgColor={bgColor} textColor={textColor} />,
          <WhyUs bgColor={bgColor} pageRef={whyChooseUsRef} />,
          <CoreCourses textColor={textColor} pageRef={coreCoursesRef} bgColor={bgColor} />,
          <AdvancedCourses textColor={textColor} bgColor={bgColor} />,
          <CoursePreview bgColor={bgColor} textColor={textColor} pageRef={coursePreviewRef} />,
          <Founders pageRef={foundersRef} bgColor={bgColor} textColor={textColor} />,
          <Faq textColor={textColor} bgColor={bgColor} />
        ] : [])

      ].map((PageComponent, i) => (
        <VisibilityDetector key={i} topOffset={200} topOnly onChange={visible => {
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
