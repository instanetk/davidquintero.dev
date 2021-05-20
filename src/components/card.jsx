import Avatar from '../images/nasa.jpg';
import dev from '../svg/dev.svg';
import github from '../svg/github.svg';
import linkedin from '../svg/linkedin.svg';
import NetworkParticles from './network';

const Card = () => {
  return (
    <div class="card">
      <NetworkParticles />
      <div class="profile">
        <div class="picture">
          <img src={Avatar} alt="NASA avatar of David's reflection" />
        </div>
        <h1 class="card__heading">
          <span class="card__heading--light">david</span>
          <span class="card__heading--bold">quintero</span>
        </h1>
        <div class="social">
          <span>
            <a href="https://dev.to/netk" target="_blank" rel="noreferrer">
              <img class="svg" src={dev} alt="dev.to logo" />
            </a>
          </span>
          <span>
            <a href="https://github.com/instanetk" target="_blank" rel="noreferrer">
              <img class="svg" src={github} alt="github logo" />
            </a>
          </span>
          <span>
            <a href="https://www.linkedin.com/in/davidquintero/" target="_blank" rel="noreferrer">
              <img class="svg" src={linkedin} alt="linkedin logo" />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
