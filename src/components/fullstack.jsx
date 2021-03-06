import TypeWriter from './Typewriter';

const Fullstack = ({ state }) => {
  let playTypeWriter;

  if (state.destination === undefined) {
    playTypeWriter = false;
  } else if (state.destination.index === 4) {
    playTypeWriter = true;
  }
  return (
    <section className="section">
      <div className="section__fullstack">
        <div className="section__fullstack--middle">
          <div className="section__fullstack--text">
            <h2>{playTypeWriter ? <TypeWriter text="Let's kick it up a notch" /> : null}</h2>
            <p>
              So far the previous projects fall strictly in the realm of Front-end development, as they stay within the
              confines of React and the browser.
            </p>
            <p>
              Now, let's explore a full stack application that brings Node.js into the picture for Back-end
              development...
            </p>
          </div>
          <div className="launch"></div>
        </div>
      </div>
    </section>
  );
};

export default Fullstack;
