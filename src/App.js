import './App.css';
import Eli from './components/eli_components/Eli';
import BradyCounter from './components/brady_components/BradyCounter';

function App() {
  return (
    <div className="App">
      <div className='person'>
        <Eli />
      </div>
      <div className='person'>
        Max
      </div>
      <div className='person'>
        Jaen
      </div>
      <div className='person'>
        Kenny
      </div>
      <div className='person'>
        Laura
      </div>
      <div className='person'>
        Graham
      </div>
      <div className='person'>
        Eric
      </div>
      <div className='person'>
        Jasmine
      </div>
      <div className='person'>
        Dustin
      </div>
      <div className='person'>
        <BradyCounter></BradyCounter>
      </div>
    </div>
  );
}

export default App;
