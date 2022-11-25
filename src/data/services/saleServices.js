var URL = "http://localhost:5000/api/sales";

 export const createsale=async(sale)=>{
alert(JSON.stringify(sale))
    const data= await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sale),
      }).catch((error) => {
        window.alert(error);
        return;
      });
      const resp = await data.json();
      return resp;

 }