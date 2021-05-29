import TypeWriter from './Typewriter';
import ReactJS from '../svg/stack/icons8-react-native.svg';
import Node from '../svg/stack/icons8-nodejs.svg';
import Tippy from '@tippyjs/react';

const HomeWorks = () => {
  return (
    <section className="section">
      <div className="section__homeworks">
        <div className="section__homeworks--middle">
          <div className="homeworks__description">
            <h2>
              <TypeWriter text="HomeWorks" />
            </h2>
            <p>This app serves as a lead adquisition and Customer Relationship Management (CRM).</p>
            <p>
              It features use of the <span className="text--bold">Google Maps API</span> to pinpoint and validate
              service addresses.
            </p>
            <p>
              On the backend it is powered by Express and MongoDB. It features an admin dashboard providing real-time
              count of online users and other events by leveraging <span className="text--bold">Socket.IO</span> and
              MongoDB's <span className="text--bold">ChangeStream</span> access to real-time data changes.
            </p>
            <p>Detailed description of user stories are available in its GitHub repositories.</p>
            <div className="launch-container">
              <a href="https://homeworks.davidquintero.dev" className="launch-app" target="_blank" rel="noreferrer">
                Launch App <span class="launch-app-rocket">🚀</span>
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
          <div className="homeworks__image">
            <iframe title="HomeWorks" src="https://homeworks.davidquintero.dev/" className="homeworks__iframe" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeWorks;
