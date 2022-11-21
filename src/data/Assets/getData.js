
const getData = ( url, user ) => {
    const data = fetch(url, {
        method: 'POST',
        body: JSON.stringify(user),
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