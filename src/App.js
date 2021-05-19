import './App.css';
import Card from './components/card';
import Hero from './components/hero';
import Skills from './components/skills';

const App = () => {
  return (
    <div class="container">
      <Card />
      <main class="main">
        <div id="fullpage">
          <Hero />
          <Skills />
          <section class="section">
            <div className="section__content">
              <p>
                Hello 👋🏻
                <div class="slide">
                  I am a designer and full stack web developer. As an emerging system thinker, I develop problem solving
                  skills through a method of goal analysis, observation, improvement and replication.
                </div>
                <div class="slide">
                  In this portfolio, I present proof of work of this process as well as actual implementation of these
                  concepts in commercial products.
                </div>
                <div class="slide">Scroll down to learn more...</div>
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default App;
