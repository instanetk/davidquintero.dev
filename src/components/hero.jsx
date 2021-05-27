import astronaut from '../svg/astronaut.svg';

const Hero = () => {
  return (
    <section className="section hero">
      <div className="arrow arrow-first"></div>
      <div className="arrow arrow-second"></div>
      <canvas id="canvas"></canvas>
      <img
        className="astronaut"
        src={astronaut}
        alt="Scene of an astronaut floating in space with the earth below and a satellite to their right and a moon and an asteroid in the background. Scene is superimposed on a field of purple stars that twinkle and slowly rotate counterclockwise in the background."
      />
    </section>
  );
};

export default Hero;
