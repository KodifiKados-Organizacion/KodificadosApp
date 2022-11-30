var URL = "http://localhost:5000/api/products";

export const submitProduct = async (product) => {
  const data = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  }).catch((error) => {
    window.alert(error);
    return;
  });
  const resp = await data.json();
  return resp;
};

export const getProductoFindId = async(id) => {
  const data = await fetch(URL+"/"+id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }}).catch((error) => {
      window.alert(error);
      return;
    });
    const resp = await data.json();
    return resp;
}

 export const updateProduct=async(product)=>{
  alert(JSON.stringify(product))
   const  data =await fetch(URL+"/update",{
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },body: JSON.stringify(product),
  }).catch((error) => {
      window.alert(error);
      return;
    });
    const resp = await data.json();
    return alert(resp);

 }
