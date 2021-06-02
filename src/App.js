import Card from './components/Card';
import Fullpage from './components/Fullpage';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <Card />
      <main className="main">
        <Fullpage />
      </main>
    </div>
  );
};

export default App;
