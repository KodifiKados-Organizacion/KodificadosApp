var URL = "http://localhost:5000/api/products";

export const submitProduct = async (product) => {
  const data = await fetch("http://localhost:5000/api/products", {
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
