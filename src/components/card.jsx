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
          <img src={Avatar} alt="" />
        </div>
        <h1 class="card__heading">
          <span class="card__heading--light">david</span>
          <span class="card__heading--bold">quintero</span>
        </h1>
        <div class="social">
          <span>
            <a href="https://dev.to/netk" target="_blank">
              <img class="svg" src={dev} />
            </a>
          </span>
          <span>
            <a href="https://github.com/instanetk" target="_blank">
              <img class="svg" src={github} />
            </a>
          </span>
          <span>
            <a href="https://www.linkedin.com/in/davidquintero/" target="_blank">
              <img class="svg" src={linkedin} />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
