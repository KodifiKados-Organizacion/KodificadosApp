import { useEffect, useState } from 'react';
import { useFetchyRef } from '../../data/hooks/useFethc';
import '../../styles/components/ventas.css'
 import { getSales } from "../../data/services/saleServices.js";

export const Ventas = () => {
 const [ventas,setventas]=useState([])
    const {data, loading, error} = useFetchyRef('http://localhost:5000/api/productsSales', 'GET');

    useEffect(()=>{
        getSales().then(resp=>{
            setventas(resp)
        
        })
    },[])

    
    async function  getInfoOwner(id){

         const  data = await fetch("http://localhost:5000/api/register/"+id,{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            }})
            
            const resp=await data.json()
            
             return resp.Nombre;

     }

 
    // console.log(data);
    // console.log(loading);
    // console.log(error);


  return (
    <div className='container_ventas'>
        <h1>Ventas</h1>

        <table className='table table-striped table-dark'>
            <thead>
                <tr>
                    <th>Cliente</th>
                    <th>Detalles del pedido</th>
                    <th>Valor de venta</th>
                    <th>Fecha</th>
                    
                </tr>
            </thead>
            <tbody> 

         

                    { ventas.map((venta)=>{
                        return(<tr><td>{()=>getInfoOwner(venta.userid)}</td><td>{ venta.ventas.map((d)=>{ return(<p>{d.Nombre} $ {d.Precio}</p>)})}</td><td>{venta.createdAt}</td><td>{venta.createdAt}</td></tr>)

                    })}
                    
                

            </tbody>
        </table>
        
        </div>
  )
}
