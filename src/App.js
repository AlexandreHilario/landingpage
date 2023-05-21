import minhaImagem from './Assests/capa.jpg';
import './App.css';
import ReactPlayer from 'react-player';

function App() {
  return (
    <div className="App">
      <img src={minhaImagem} className="App-logo" alt="capa" />
      <a
        className="App-link"
        href="https://store.steampowered.com/app/367520/Hollow_Knight/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Jogue Agora
      </a>

      <ReactPlayer url='https://www.youtube.com/embed/UAO2urG23S4' />

    </div>
  );
}

export default App;
