import React, { useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Hero from './Hero';
import Skills from './Skills';
import Calc from './Calc';
import Clock from './Clock';
import Fullstack from './Fullstack';
import HomeWorks from './HomeWorks';
import MissionControl from './MissionControl';

const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey={'4A7E1BED-B4864D67-B8A332A7-96850BC9'}
    scrollingSpeed={1000} /* Options here */
    afterLoad={(origin, destination, direction) => {
      console.log('afterLoad event', { origin, destination, direction });
    }}
    controlArrows={false}
    render={({ state, fullpageApi }) => {
      console.log('state: ', state);
      console.warn(fullpageApi);
      // console.warn(fullpageApi.getActiveSlide());
      return (
        <ReactFullpage.Wrapper>
          <Hero />
          <Skills state={state} />
          <Calc state={state} />
          <Clock state={state} />
          <Fullstack state={state} />
          <HomeWorks state={state} />
          <MissionControl state={state} api={fullpageApi} />
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Fullpage;
