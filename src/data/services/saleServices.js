var URL = "http://localhost:5000/api/productsSales";

 export const createsale=async(sale)=>{

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