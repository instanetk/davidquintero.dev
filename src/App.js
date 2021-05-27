import './App.css';
import Card from './components/Card';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Calc from './components/Calc';
import Clock from './components/Clock';
import Fullstack from './components/Fullstack';

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
