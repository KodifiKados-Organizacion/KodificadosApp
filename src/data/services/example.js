 export const request=async ()=>{
    const data =await fetch('./productos.json');
    console.log(data);
    return data.productos;
 }