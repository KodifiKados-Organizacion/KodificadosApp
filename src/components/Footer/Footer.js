import '../../styles/components/Footer.css'
import logo  from '../../assets/imgs/logo10_22_162944.png'


export const Footer = () => {
  return (
    <div className='footer'>
       <div className='container-contacto'>
        <span>
          <img src={logo} alt="logo KodifiKados" className='logo-footer' />
        </span>
        <span className='containers-contacto'>
          <h3>Quienes somos?</h3>
          <p>somos una empresa que provee todo tipo de productos tecnologicos</p>
        </span>
        <span className='containers-contacto'>
          <h3>Contactanos</h3>
          <h6>Tel: 3213019261 </h6>
          <h6>Dir: Cll 123 # 45 - 67</h6>
        </span>
       </div>
       <div className='container-redes'>
          <span>
            <a href="#">
            <ion-icon name="logo-facebook" size='large'>Facebook</ion-icon>
            </a>
          </span>
          <span>
            <a href="#">
            <ion-icon name="logo-twitter" size='large'>Twitter</ion-icon>
            </a>
          </span>
          <span>
            <a href="#">
            <ion-icon name="logo-instagram" size='large'>Instagram</ion-icon>
            </a>
          </span>
          <span>
            <a href="#">
            <ion-icon name="logo-youtube" size='large'>YouTube</ion-icon>
            </a>
          </span>
       </div>
    </div>
  )
}
