import TypeWriter from './Typewriter';

const MissionControl = ({ state, api }) => {
  // console.error(api);
  let playTypeWriter;

  if (state.destination === undefined) {
    playTypeWriter = false;
  } else if (state.destination.index === 6) {
    playTypeWriter = true;
  }
  return (
    <section className="section">
      <canvas id="canvas"></canvas>
      <div className="section__mission-control">
        <div className="section__mission-control--middle">
          <div className="mission-control"></div>
          <div className="mission-control--text">
            <h2>{playTypeWriter ? <TypeWriter text="It's one small step for man" /> : null}</h2>
            <p>
              We've reached the end of this presentation. Thank you for taking the time to get acquainted with my work.{' '}
            </p>
            <a href="https://static.davidquintero.dev/resume.pdf" target="_blank" rel="noreferrer" download>
              > Download résumé
            </a>
            {/* <button onClick={() => api.moveTo(1)}>Click me to move up</button> */}

            <p className="text--bold">
              >{' '}
              <a href="mailto:davidq@wavefunction.ai?subject=Ground Control to Major Tom... 🧑🏻‍🚀">
                davidq@wavefunction.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionControl;
