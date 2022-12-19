import logo from './logo.svg';
import './App.css';
//import Mycomponent from './components/Greet';
import { Greet } from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import  Greet1  from './components/Greet1';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Mycomponent/> */}
      <Greet/>
      <Greet1 name="Bruce" heroName="Batman">
        <p>This is children props</p>
      </Greet1>
      <Greet1 name="Clark" heroName="Superman">
        <button>Action</button>
      </Greet1>
      <Welcome/>
      <Hello/>
    </div>
  );
}

export default App;
