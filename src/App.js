import logo from './logo.svg';
import Documentation from './Documentation';
import './App.css';


function App() {
  const headerText = "Hello YouTube from my variable";
  

  return (
    <div className="App">
      <header className="App-header">
      <Documentation />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {headerText}
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click this link to learn about React
        </a>
      </header>
    </div>
  );
}

export default App;
