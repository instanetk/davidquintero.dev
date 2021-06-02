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
    render={({ state, fullpageApi }) => {
      console.log(state, fullpageApi);
      return (
        <ReactFullpage.Wrapper>
          <Hero />
          <Skills />
          <Calc />
          <Clock />
          <Fullstack />
          <HomeWorks />
          <MissionControl />
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Fullpage;
