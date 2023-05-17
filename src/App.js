import minhaImagem from './Assests/capa.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={minhaImagem} className="App-logo" alt="capa" />
        <p>
          Hollow Knight o melhor game já feito
        </p>
        <a
          className="App-link"
          href="https://store.steampowered.com/app/367520/Hollow_Knight/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jogue Agora
        </a>
      </header>
    </div>
  );
}

export default App;
