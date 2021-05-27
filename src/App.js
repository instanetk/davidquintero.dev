import './App.css';
import Card from './components/card';
import Hero from './components/hero';
import Skills from './components/skills';
import Calc from './components/calc';
import Clock from './components/clock';
import Fullstack from './components/fullstack';

const App = () => {
  return (
    <div className="container">
      <Card />
      <main className="main">
        <div id="fullpage">
          <Hero />
          <Skills />
          <Calc />
          <Clock />
          <Fullstack />
        </div>
      </main>
    </div>
  );
};

export default App;
