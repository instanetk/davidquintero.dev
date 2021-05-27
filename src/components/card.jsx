import Avatar from '../images/nasa.jpg';
import dev from '../svg/dev.svg';
import github from '../svg/github.svg';
import linkedin from '../svg/linkedin.svg';
import NetworkParticles from './Network';

const Card = () => {
  return (
    <div className="card">
      <NetworkParticles />
      <div className="profile">
        <div className="picture">
          <img src={Avatar} alt="NASA avatar of David's reflection" />
        </div>
        <h1 className="card__heading">
          <span className="card__heading--light">david</span>
          <span className="card__heading--bold">quintero</span>
        </h1>
        <div className="social">
          <span>
            <a href="https://dev.to/netk" target="_blank" rel="noreferrer">
              <img className="svg" src={dev} alt="dev.to logo" />
            </a>
          </span>
          <span>
            <a href="https://github.com/instanetk" target="_blank" rel="noreferrer">
              <img className="svg" src={github} alt="github logo" />
            </a>
          </span>
          <span>
            <a href="https://www.linkedin.com/in/davidquintero/" target="_blank" rel="noreferrer">
              <img className="svg" src={linkedin} alt="linkedin logo" />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
