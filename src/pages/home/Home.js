import logo from '../../assets/imgs/logo10_22_162944.png';
import computador from '../../assets/imgs/Computador1.jpg';
import telefono from '../../assets/imgs/Telefono.jpg';
import pcgamer from '../../assets/imgs/pcgamer.jpg';
import accesorios from '../../assets/imgs/Accesorios.jpg';
import '../../styles/pages/Home.css'
export const Home = () => {
  return (
    <div className="App-header">
        <span className='container-logo'>
        <img src={ logo } alt="logo" className='logo' />
        </span>
      

        <div className='titlecarousel'><h2>PRODUCTOS MAS BUSCADOS</h2></div>
        <section className='carousel'>
        <div className='carousel__container'>
            <div className='carousel-item'>
                <img className='carousel-item__img' src={computador} alt='computador' />
                <div className='info-item'>
                <h5> ASUS 14" </h5>
              </div>
            </div>
            <div className='carousel-item'>
              <img className='carousel-item__img' src={telefono} alt='Telefono' />
              <div className='info-item'>
                <h5> IPHONE 14X </h5>
              </div>
            </div>
            <div className='carousel-item'>
              <img className='carousel-item__img' src={pcgamer} alt='pcgamer'/>
              <div className='info-item'>
                <h5> PC GAMER  </h5>
              </div>
            </div>
            <div className='carousel-item'>
              <img className='carousel-item__img' src={accesorios} alt='accesorios' />
              <div className='info-item'>
                <h5> AUDIFONOS GAMER </h5>
              </div>
            </div>
          </div >
            </section >
        </div>
    )
}

export default Home;
