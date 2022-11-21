import { useFetchyRef } from '../../data/hooks/useFethc';
import '../../styles/components/ventas.css'

export const Ventas = () => {
    const {data, loading, error} = useFetchyRef('http://localhost:5000/api/sales', 'GET');
    console.log(data);
    console.log(loading);
    console.log(error);


  return (
    <div className='container_ventas'>
        <h1>Ventas</h1>

        <table className='tabla-ventas'>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Correo</th>
                    <th>Fecha</th>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Total</th>
                    <th>Estado</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Juan</td>
                    <td>Perez</td>
                    <td>juanp@gmail.com </td>
                    <td>12/12/2021</td>
                    <td>Motorola edge 30</td>
                    <td>2</td>
                    <td>$ 3.000.000</td>
                    <td>Finalizado</td>
                </tr>
                <tr>
                    <td>Pedro</td>
                    <td>Sanchez</td>
                    <td>pedros@gmail.com </td>
                    <td>12/12/2021</td>
                    <td>Asus VivoBook 14"</td>
                    <td>1</td>
                    <td>$ 4.000.000</td>
                    <td>Finalizado</td>
                </tr>
                <tr>
                    <td>Carlos</td>
                    <td>Sanchez</td>
                    <td>carloss@gamil.com   </td>
                    <td>12/11/2022</td>
                    <td>Audifonos Sony </td>
                    <td>10</td>
                    <td>$ 2.000.000</td>
                    <td>Enviado</td>
                </tr>

            </tbody>
        </table>
        
        </div>
  )
}
