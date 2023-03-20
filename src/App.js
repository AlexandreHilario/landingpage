import './style.css';

function App() {
  return (
    <div className='container'>
      <h1 className="tittle">Alexandre Hilário</h1>
      <p className="subTittle">Desenvolvedor indie (Game designer / Reader Vagabound)</p>

      <nav className="navegationTab">
        <a href="https://github.com/AlexandreHilario" target={"_blank"}>Github | </a>
        <a href="https://docs.google.com/document/d/1wsv4Fo0dIx1DZfiyyZqzX4L0nPNVE1tgZXFAn3q62n4/edit?usp=sharing" target={"_blank"}>Resume</a>
      </nav>

      <main className="main">
        <p>Tenho 19 anos e estou começando na área de game design. Meu foco são games em 2D, principalmente em pixel art.<br>
        </br> <span>Alone</span> é meu primeiro projeto feito de forma independente, utilizando a engine <a href="https://godotengine.org/" target={"_blank"}>Godot</a>
        com o suporte a C#.</p>
      </main>
      
    </div>
   
  );
}

export default App;
