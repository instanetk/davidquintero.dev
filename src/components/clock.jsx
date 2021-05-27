import Pomodoro from './apps/Pomodoro';
import TypeWriter from './Typewriter';

const Clock = () => {
  return (
    <section className="section">
      <div className="section__pomodoro">
        <div className="section__pomodoro--middle">
          <div>
            <h2>
              <TypeWriter text="Pomodoro Clock" />
            </h2>
            <p>
              A 25 minutes timer that rings a bell when it reaches zero to announce the beginning of a 5 minute break.
              This clock allows the user to adjust the settings both for the Session and Break length. User is able to
              start, pause and reset the timer to its initial state.
            </p>
          </div>
          <div className="clock">
            <Pomodoro />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clock;
