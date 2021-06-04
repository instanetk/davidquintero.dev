import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import TypeWriter from './Typewriter';
import JS from '../svg/stack/icons8-javascript.svg';
import ReactJS from '../svg/stack/icons8-react-native.svg';
import Node from '../svg/stack/icons8-nodejs.svg';
import HTML5 from '../svg/stack/icons8-html-5.svg';
import CSS3 from '../svg/stack/icons8-css3.svg';
import GraphQL from '../svg/stack/icons8-graphql.svg';
import GitHub from '../svg/stack/icons8-github.svg';
import MongoDB from '../svg/stack/icons8-mongodb.svg';
import Figma from '../svg/stack/icons8-figma.svg';
import Docker from '../svg/stack/icons8-docker.svg';
import npm from '../svg/stack/icons8-npm.svg';
import TailwindCSS from '../svg/stack/tailwind-css-seeklogo.com.svg';

const Skills = ({ state }) => {
  let playTypeWriter;

  if (state.destination === undefined) {
    playTypeWriter = false;
  } else if (state.destination.index === 1) {
    playTypeWriter = true;
  }

  return (
    <section className="section">
      <div className="section__skills">
        <div className="section__skills--middle">
          <div className="text">
            <h2>
              Hello...<span className="wave">👋🏻</span>
            </h2>
            <p className="text--skills">
              {playTypeWriter ? <TypeWriter text="I am an emerging designer and full stack web developer" /> : null}
            </p>
            <p>
              These are some of the technologies I am able to leverage in engineering apps that deliver value to their
              intended audience and become important business assets.
            </p>
            <p>Below we explore the application of some of these technologies in a few case studies...</p>
          </div>
          <div className="stack">
            <Tippy content="ES6" placement="bottom">
              <img src={JS} alt="JavaScript" />
            </Tippy>
            <Tippy content="React" placement="bottom">
              <img src={ReactJS} alt="React" />
            </Tippy>
            <Tippy content="Node.js" placement="bottom">
              <img src={Node} alt="Node.js" />
            </Tippy>
            <Tippy content="MongoDB" placement="bottom">
              <img src={MongoDB} alt="MongoDB" />
            </Tippy>
            <Tippy content="HTML5" placement="bottom">
              <img src={HTML5} alt="HTML5" />
            </Tippy>
            <Tippy content="CSS3" placement="bottom">
              <img src={CSS3} alt="CSS3" />
            </Tippy>
            <Tippy content="Tailwind CSS" placement="bottom">
              <img src={TailwindCSS} alt="Tailwind CSS" />
            </Tippy>
            <Tippy content="GraphQL" placement="bottom">
              <img src={GraphQL} alt="GraphQL" />
            </Tippy>
            <Tippy content="GitHub" placement="bottom">
              <img src={GitHub} alt="GitHub" />
            </Tippy>
            <Tippy content="Docker" placement="bottom">
              <img src={Docker} alt="Docker" />
            </Tippy>
            <Tippy content="npm" placement="bottom">
              <img src={npm} alt="npm" />
            </Tippy>
            <Tippy content="Figma" placement="bottom">
              <img src={Figma} alt="Figma" />
            </Tippy>
            {/* <img src={GoogleWebDev} alt="WebDev" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
