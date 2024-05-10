import { useEffect } from 'react';

const useResizeSensor = (elementRef, callback) => {
  useEffect(() => {
    const resizedAttached = [];

    const addResizeListener = (element, listener) => {
      if (resizedAttached[element]) return;
      
      resizedAttached[element] = true;
      element.resizeSensor = document.createElement('div');
      element.resizeSensor.className = 'resize-sensor';

      const style = `
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;
        z-index: -1;
        visibility: hidden;
      `;

      const innerStyle = `
        position: absolute;
        left: 0;
        top: 0;
        transition: 0s;
      `;

      element.resizeSensor.innerHTML = `
        <div class="resize-sensor-expand" style="${style}">
          <div style="${innerStyle}"></div>
        </div>
        <div class="resize-sensor-shrink" style="${style}">
          <div style="${innerStyle} width: 200%; height: 200%"></div>
        </div>
      `;

      element.appendChild(element.resizeSensor);

      const expand = element.resizeSensor.childNodes[0];
      const expandChild = expand.childNodes[0];
      const shrink = element.resizeSensor.childNodes[1];
      const shrinkChild = shrink.childNodes[0];

      const update = () => {
        expandChild.style.width = expand.offsetWidth + 10 + 'px';
        expandChild.style.height = expand.offsetHeight + 10 + 'px';
        expand.scrollLeft = expand.scrollWidth;
        expand.scrollTop = expand.scrollHeight;
        shrink.scrollLeft = shrink.scrollWidth;
        shrink.scrollTop = shrink.scrollHeight;

        const width = element.offsetWidth;
        const height = element.offsetHeight;

        if (width !== element.__resizeLast__.width || height !== element.__resizeLast__.height) {
          callback();
        }

        element.__resizeLast__.width = width;
        element.__resizeLast__.height = height;
      };

      element.__resizeLast__ = {};

      const onScroll = () => {
        if (element.__resizeRAF__) {
          cancelAnimationFrame(element.__resizeRAF__);
        }
        element.__resizeRAF__ = requestAnimationFrame(update);
      };

      const addScrollListener = (parent) => {
        parent.addEventListener('scroll', onScroll);
      };

      addScrollListener(expand);
      addScrollListener(shrink);

      update();
    };

    addResizeListener(elementRef.current, callback);

    return () => {
      const element = elementRef.current;
      if (element && element.resizeSensor) {
        element.removeChild(element.resizeSensor);
        delete element.resizeSensor;
        delete element.resizedAttached;
        delete element.__resizeLast__;
        delete resizedAttached[element];
      }
    };
  }, [elementRef, callback]);
};

export default useResizeSensor;

/*

import React, { useRef } from 'react';
import useResizeSensor from '../utils/useResizeSensor';

const MyComponent = () => {
  const elementRef = useRef(null);

  useResizeSensor(elementRef, () => {
    console.log('Element resized!');
  });

  return (
    <div ref={elementRef}>
      {/* Content }
      </div>
    );
  };
  
  export default MyComponent;
  */