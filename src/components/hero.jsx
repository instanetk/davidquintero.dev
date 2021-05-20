import astronaut from '../svg/astronaut.svg';

const Hero = () => {
  return (
    <section class="section hero">
      <div class="arrow arrow-first"></div>
      <div class="arrow arrow-second"></div>
      <canvas id="canvas"></canvas>
      <img
        class="astronaut"
        src={astronaut}
        alt="Scene of an astronaut floating in space with the earth below and a satellite to their right and a moon and an asteroid in the background. Scene is superimposed on a field of purple stars that twinkle and slowly rotate counterclockwise in the background."
      />
    </section>
  );
};

export default Hero;
