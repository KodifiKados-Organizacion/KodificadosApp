 export const request=async ()=>{
    const data =await fetch('./productos.json');
    return data.productos;
 }