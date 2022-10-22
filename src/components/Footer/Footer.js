import React from 'react'
import '../../styles/components/Footer.css'
import logo  from '../../assets/imgs/logo10_19_20826.png'


export const Footer = () => {
  return (
    <div className='footer'>
       <div className='container-contacto'>
        <span>
          <img src={logo} alt="logo KodifiKados" className='logo-footer' />
        </span>
        <span className='containers-contacto'>
          <h3>Quienes somos?</h3>
          <p>somos una empresa creada para solucionar los problemas de pequeñas empresas para entrar en la web, ofrecemos soluciones de diseño, creacion y mantenimiento de plataformas web y movil.</p>
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
