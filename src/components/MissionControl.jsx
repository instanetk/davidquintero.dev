import TypeWriter from './Typewriter';

const MissionControl = () => {
  return (
    <section className="section">
      <canvas id="canvas"></canvas>
      <div className="section__mission-control">
        <div className="section__mission-control--middle">
          <div className="mission-control"></div>
          <div className="mission-control--text">
            <h2>
              <TypeWriter text="It's one small step for man" />
            </h2>
            <p>
              We've reached the end of this presentation and the beginning of this journey. Thank you for taking the
              time to get acquainted with my work.{' '}
            </p>
            <a href="https://static.davidquintero.dev/resume.pdf">> Download Résumé</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionControl;
