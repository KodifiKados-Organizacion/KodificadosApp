export const getCategoriesAll = async () => {
  const data = await fetch("http://localhost:5000/api/categorys");
  const resp = await data.json();
  return resp;
};


