import Particles from 'react-tsparticles';

const NetworkParticles = () => {
  return (
    <Particles
      // width={400}
      id="tsparticles"
      options={{
        fpsLimit: 24,
        interactivity: {
          detectsOn: 'canvas',
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: false,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 100,
              duration: 18,
              opacity: 1,
              size: 50,
            },
            push: {
              quantity: 1,
            },
            repulse: {
              distance: 200,
              duration: 5,
            },
          },
        },
        particles: {
          color: {
            value: '#FCD6FF',
          },
          links: {
            color: '#FCD6FF',
            distance: 150,
            enable: true,
            opacity: 0.1,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 0.4,
            straight: true,
          },
          number: {
            density: {
              enable: true,
              value_area: 100,
            },
            value: 20,
          },
          opacity: {
            value: 0,
          },
          shape: {
            type: 'circle',
          },
          size: {
            random: true,
            value: 10,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default NetworkParticles;
