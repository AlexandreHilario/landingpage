import logo from './Assests/SS_Cover_Art.webp';
import imageBackground from './Assests/maxresdefault.jpg'
import titulo from './Assests/pngegg.png'
import './App.css';

function App() {
  return (
    <div className="App">

      <header class='Card-header'>
        <img class='Icon' src={logo} alt='Logo'/>
        <h1 class='title'>TEAM CHERRY HUB</h1>
        <ul class='list'>
          <li>News</li>
          <li>Reviews</li>
          <li>Contact</li>
        </ul>
      </header>
      <div class='main'>
        <img class='backgroud-main' src={imageBackground} alt='imagem background'/>
        <img class='main-title' src={titulo} alt='imagem titulo'/>
        <p class='apresentation'>
          A Team Cherry é um pequeno estúdio de desenvolvimento de jogos independentes sediado em Adelaide, na Austrália.
          Composto pelos talentosos desenvolvedores William Pellen, Ari Gibson e David Kazi, o 
          estúdio ganhou reconhecimento mundial com o lançamento do aclamado jogo Hollow Knight em 2017. 
          Esse hub foi feito na intenção de trazer notícias e algumas reviews sobre a Team Cherry.</p>

      </div>

    </div>
  );
}

export default App;
