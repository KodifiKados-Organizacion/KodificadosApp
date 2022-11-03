import './styles/App.css';
import {Header} from './components/Header/Header';
import { Footer } from './components/Footer/Footer'

import { useSearchParams } from 'react-router-dom';
import { RouterAuth } from './Routers/RouterAuth';

function App() {
  const [ searchParams ] = useSearchParams();
  const isAuth = searchParams.get('auth');
  let Nombre = searchParams.get('Nombre');
  let Admin = searchParams.get('Admin');
  console.log(isAuth);
  return (
    <div className="App">
        <Header name= {Nombre} Admin= {Admin} auth={isAuth} />
        <RouterAuth />
        <Footer />
    </div>
  );
}

export default App;
