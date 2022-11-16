var URL="http://localhost:5000/api/products";

export const submitProduct=async(product)=>{
    
    debugger
    const  data= await fetch(URL,{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
          body:JSON.stringify({
            Nombre:"Prueba de funcionamiento de api",
            Descripcion:"Hola desde el  formulario de gregar ",
            Precio:"5222222",
            PrevioVenta:"500000",
            Categoria:"12"
    
    
           } )
    })


   const  resp= await data.json()
    alert(JSON.stringify(resp))


}