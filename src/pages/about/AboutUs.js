
import '../../styles/pages/AboutUs.css'
import work from '../../assets/imgs/Video Conference Presentation.gif'


export const AboutUs = () => {
  return (
    <div className="container-about-page" >
          <h1>Acerca de Nosotros</h1>


          <p> Fundada en 2022, Kodifikados comienza a vender componentes de PC ayudando a popularizar el movimiento de construcción de PC y, al hacerlo, busca desarrollar un culto entre los entusiastas de PC y bricolaje. Kodifikados. busca ser el minorista electrónico líder en tecnología en América, con un alcance global. Buscamos que millones de clientes recurran a Kodifikados para comprar los últimos componentes para PC, productos electrónicos de consumo, hogar inteligente y productos para juegos. Kodifikados se clasifica constantemente como uno de los mejores destinos de compras en línea, y la compañía funciona en pro de al servicio al cliente para que sea líder en la industria. Kodifikados tiene su sede en Colombia.</p>
          <img src={ work } alt="trabajando" />

      </div>
  )
}
