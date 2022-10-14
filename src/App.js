import work from './assets/imgs/Video Conference Presentation.gif'
import './App.css';

function App() {
  let date = Date();
  return (
    <div className="App">
      <header className="App-header">
          <h1>Bienvenidos a la app de Kodifikados </h1>

          <p> ... en desarrollo <br></br> { date }</p>
          <img src={ work } alt="trabajando" />

      </header>
    </div>
  );
}

export default App;
