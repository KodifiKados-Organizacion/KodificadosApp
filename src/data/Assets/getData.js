
const getData = ( url, datos ) => {
    const data = fetch(url, {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then( res => res.json() )
    .then( data => data )
    .catch( err => console.log(err) )
    console.log(data);
    return data;
}

export default getData;