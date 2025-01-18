import logo from './image/GIDEO.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Sorry...</h1>
        <h3>The demo for this project is currently unavailable. <br/> Please consider cloning it from my GitHub repository and running it locally</h3>
        <div className='links'>
          <a className="App-link" href="https://github.com/Codedecblackmoon" target="_blank"> My Github </a>
          <a className="App-link" href="https://my-portfolio-ten-psi-47.vercel.app/" target="_blank"> Back to Portfolio </a>
        </div>
      </header>
    </div>
  );
}

export default App;
