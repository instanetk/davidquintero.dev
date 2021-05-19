import astronaut from '../svg/astronaut.svg';

const Hero = () => {
  return (
    <section class="section hero">
      <div class="arrow arrow-first"></div>
      <div class="arrow arrow-second"></div>
      <canvas id="canvas"></canvas>
      <img class="astronaut" src={astronaut} />
    </section>
  );
};

export default Hero;
