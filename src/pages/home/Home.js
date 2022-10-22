import logo from '../../assets/imgs/logo10_19_20826.png';
import work from '../../assets/imgs/Video Conference Presentation.gif'
import computador from '../../assets/imgs/Computador1.jpg';
import telefono from '../../assets/imgs/Telefono.jpg'
import pcgamer from '../../assets/imgs/pcgamer.jpg'
import accesorios from '../../assets/imgs/Accesorios.jpg'
import '../../styles/pages/Home.css'
export const Home = () => {
    let date = Date();
  return (
    <div className="App-header">
        <span className='container-logo'>
        <img src={ logo } alt="logo" className='logo' />
        <h1>Bienvenidos a la app de Kodifikados </h1>
        </span>
        <p> ... en desarrollo <br></br> { date }</p>
        <img src={ work } alt="trabajando" />

        <div className='titlecarousel'><h2>MAS POPULARES</h2></div>
        <section className='carousel'>
        <div className='carousel__container'>
            <div className='carousel-item'>
                <img className='carousel-item__img' src={computador} alt='computador' />
            </div>
            <div className='carousel-item'>
              <img className='carousel-item__img' src={telefono} alt='Telefono' />
            </div>
            <div className='carousel-item'>
              <img className='carousel-item__img' src={pcgamer} alt='pcgamer'/>
            </div>
            <div className='carousel-item'>
              <img className='carousel-item__img' src={accesorios} alt='accesorios' />
            </div>
          </div >
            </section >
        </div>
    )
}
