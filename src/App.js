import './App.css';
import Card from './components/card';
import Hero from './components/hero';
import Skills from './components/skills';
import Calc from './components/calc';
import Clock from './components/clock';

const App = () => {
  return (
    <div class="container">
      <Card />
      <main class="main">
        <div id="fullpage">
          <Hero />
          <Skills />
          <Calc />
          <Clock />
        </div>
      </main>
    </div>
  );
};

export default App;
