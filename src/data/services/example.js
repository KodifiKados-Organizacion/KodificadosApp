

export const exampleFetch =  (email) => {
      return fetch('http://localhost:5000/api/registers')
         .then(res => res.json())
         .then(data => {
                console.log(data)
               let dato =  data.filter(param => param.Email === email);
               console.log(dato)
         })
}

export const exampleFetch2 = (id) => {
      return fetch(`http://localhost:5000/api/registers/${id}`)
         .then(res => res.json())
         .then(data => {
               console.log(data)
         })
}




