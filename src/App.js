import logo from './logo.svg';
import cats, {meow} from './cats'
import {add, multiply} from './helpers'
import './App.css';

function App() {
  console.log(multiply(4,9))
  console.log(cats)
  console.log(meow())
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
