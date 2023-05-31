import logo from './Assests/SS_Cover_Art.webp';
import imageBackground from './Assests/maxresdefault.jpg'
import titulo from './Assests/pngegg.png'
import './App.css';

function App() {
  return (
    <div className="App">

      <header class='Card-header'>
        <img class='Icon' src={logo} alt='Logo' />
        <h1 class='title'>TEAM CHERRY HUB</h1>
        <ul class='list'>
          <li>News</li>
          <li>Reviews</li>
          <li>Contact</li>
        </ul>
      </header>

      <section class='section1'>
        <img class='background-main' src={imageBackground} alt='imagem background' />
        <div class="title-container">
          <img class='main-title' src={titulo} alt='imagem titulo' />
        </div>

        <p class='apresentation'>
          A Team Cherry é um pequeno estúdio de desenvolvimento de jogos independentes sediado em Adelaide, na Austrália.
          Composto pelos talentosos desenvolvedores William Pellen, Ari Gibson e David Kazi, o
          estúdio ganhou reconhecimento mundial com o lançamento do aclamado jogo Hollow Knight em 2017.
          Esse hub foi feito na intenção de trazer notícias e algumas reviews sobre a Team Cherry.
        </p>
      </section>

      <section class='section2'>
        <iframe
          class="trailer-one"
          title="trailer silksong"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/yQxwbZsL14Y"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>

        <p class="comments1">
           Até a data de corte em setembro de 2021, Hollow Knight: Silksong ainda não havia sido lançado. Desde o anúncio oficial
           do jogo em fevereiro de 2019, a Team Cherry tem trabalhado no desenvolvimento do Silksong. No final de 2022, foi vazado 
           que no primeiro semestre de 2023, o game seria lançado, mas em maio, um dos desenvolvedores publicou no seu twitter que
           o game seria adiado novamente e apenas teriamos alguma notícia perto do seu lançamento oficial.<br></br><br></br>Única coisa que 
           temos é a gameplay e seu trailer. A nova protagonista que aparece no game anterior, a Honert, ira nos acompanhar na nova 
           aventura em Hallownest, com novos inimigos, novos segredos e uma nova narrativa.
        </p>

        <div class="buttom1">
          <a href='https://store.steampowered.com/app/1030300/Hollow_Knight_Silksong/'
             target='_blank'
             rel="noreferrer"
             class="link1">
            LINK PARA ADICIONAR NA STEAM
          </a>
        </div>
      </section>

      <section class="section3">
        <iframe
          class="trailer-two"
          title="trailer silksong"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/UAO2urG23S4"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>

        <p class="comments2">Hollow Knight é um jogo de plataforma e aventura que transporta os jogadores para um mundo sombrio 
        e misterioso, onde assumem o papel de um pequeno cavaleiro em busca de respostas e aventuras em um reino em ruínas chamado 
        Hallownest. Com uma narrativa envolvente, jogabilidade desafiadora, personagens fascinantes, exploração meticulosa, belo 
        design de arte e uma atmosfera única, o jogo oferece uma experiência memorável que cativa os jogadores desde o seu 
        lançamento em 2017.<br></br><br></br>Ao jogarmos, assumimos o controle sobre um pequeno guerreiro sem nome, que visita a cidade 
        de Hallownets e descobrimos os seus terríveis segredos, enquanto exploramos e adquirimos habilidades novas.
        </p>

        <div class="buttom2">
          <a href='https://store.steampowered.com/app/367520/Hollow_Knight/'
             target='_blank'
             rel="noreferrer"
             class="link2">
            LINK PARA ADICIONAR NA STEAM
          </a>
        </div>
      </section>

    </div>
  );
}

export default App;
