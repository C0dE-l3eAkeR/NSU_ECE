"use client"
import Sidebar from './components/offcanvasmenu';
import React from 'react';

const Home = ({isOpen, updateVariable}) => {

 
  return (
    <>
              
    
              <Sidebar isOpen={isOpen} updateVariable={updateVariable}/>

      {/* Back to top button */}
      <div className="progress-wrap">
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" style={{transition: 'stroke-dashoffset 10ms linear 0s', strokeDasharray: '307.919, 307.919', strokeDashoffset: '307.919'}}></path>
        </svg>
      </div>

      {/* Your content goes here */}
      <div id="anywhere-home" className={`${isOpen ? 'bgshow' : ''}`}>
        {/* Content here */}
      </div>

     
    </>
  );
};

export default Home;
