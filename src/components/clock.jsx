import Pomodoro from './apps/Pomodoro';
import TypeWriter from './Typewriter';
import { BrowserView, MobileView } from 'react-device-detect';

const Clock = ({ state }) => {
  let playTypeWriter;

  if (state.destination === undefined) {
    playTypeWriter = false;
  } else if (state.destination.index === 3) {
    playTypeWriter = true;
  }

  const PomodoroText = () => {
    return (
      <div>
        <h2>{playTypeWriter ? <TypeWriter text="Pomodoro Clock" /> : null}</h2>
        <p>
          A 25 minutes timer that rings a bell when it reaches zero to announce the beginning of a 5 minute break. This
          clock allows the user to adjust the settings both for the Session and Break length. User is able to start,
          pause and reset the timer to its initial state.
        </p>
      </div>
    );
  };
  return (
    <section className="section">
      <BrowserView>
        <div className="section__pomodoro">
          <div className="section__pomodoro--middle">
            <PomodoroText />
            <div className="clock">
              <Pomodoro />
            </div>
          </div>
        </div>
      </BrowserView>
      <MobileView>
        <div className="slide">
          <div className="section__pomodoro">
            <div className="section__pomodoro--middle">
              <PomodoroText />
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="section__pomodoro">
            <div className="clock">
              <Pomodoro />
            </div>
          </div>
        </div>
      </MobileView>
    </section>
  );
};

export default Clock;
