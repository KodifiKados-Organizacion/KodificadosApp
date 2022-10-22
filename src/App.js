import './styles/App.css';
import {Header} from './components/Header/Header';
import { Footer } from './components/Footer/Footer'
import { Router } from './routers/Router';
function App() {
  return (
    <div className="App">
        <Header />
        <Router />
        <Footer />
    </div>
  );
}

export default App;
