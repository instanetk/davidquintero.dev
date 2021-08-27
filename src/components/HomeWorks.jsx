import { BrowserView, MobileView } from 'react-device-detect';
import TypeWriter from './Typewriter';
import ReactJS from '../svg/stack/icons8-react-native.svg';
import Node from '../svg/stack/icons8-nodejs.svg';
import Tippy from '@tippyjs/react';

const HomeWorks = ({ state }) => {
  let isLoaded;

  if (state.destination === undefined) {
    isLoaded = false;
  } else if (state.destination.index === 5) {
    isLoaded = true;
  }

  const HomeWorksDesc = () => {
    return (
      <div className="homeworks__description">
        <h2>{isLoaded ? <TypeWriter text="HomeWorks" /> : null}</h2>
        <p>This app serves as a lead adquisition and Customer Relationship Management (CRM).</p>
        <p>
          It features use of the <span className="text--bold">Google Maps API</span> to pinpoint and validate service
          addresses.
        </p>
        <p>
          On the backend it is powered by <span className="text--bold">Express</span> and <span className="text--bold">MongoDB</span>. It features an admin dashboard providing real-time count
          of online users and other events by leveraging <span className="text--bold">Socket.IO</span> and MongoDB's{' '}
          <span className="text--bold">ChangeStream</span> access to real-time data changes.
        </p>
        <p>Detailed description of user stories are available in its GitHub repositories.</p>
        <div className="launch-container">
          <a href="https://homeworks.davidquintero.dev" className="launch-app" target="_blank" rel="noreferrer">
            Launch App <span className="launch-app-rocket"></span>
          </a> 
        </div>
        <div className="homeworks-repos">
          <Tippy content="GitHub Repo" placement="bottom">
            <a href="https://github.com/instanetk/homeworks" target="_blank" rel="noreferrer">
              <img src={ReactJS} alt="React Repo" />
            </a>
          </Tippy>
          <Tippy content="GitHub Repo" placement="bottom">
            <a href="https://github.com/instanetk/homeworks-api" target="_blank" rel="noreferrer">
              <img src={Node} alt="Node Repo" />
            </a>
          </Tippy>
        </div>
      </div>
    );
  };
  const HomeWorksApp = () => {
    return (
      <div className="homeworks__image">
        {isLoaded ? (
          <iframe title="HomeWorks" src="https://homeworks.davidquintero.dev/" className="homeworks__iframe" />
        ) : null}
      </div>
    );
  };
  return (
    <section className="section">
      <BrowserView>
        <div className="section__homeworks">
          <div className="section__homeworks--middle">
            <HomeWorksDesc />
            <HomeWorksApp />
          </div>
        </div>
      </BrowserView>
      <MobileView>
        <div className="slide">
          <div className="section__homeworks">
            <div className="section__homeworks--middle">
              <HomeWorksDesc />
            </div>
          </div>
        </div>
        {/* <div className="slide">
          <div className="section__homeworks">
            <div className="section__homeworks--middle">
              <HomeWorksApp />
            </div>
          </div>
        </div> */}
      </MobileView>
    </section>
  );
};

export default HomeWorks;
