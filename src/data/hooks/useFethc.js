import  { useEffect, useRef, useState } from 'react'

export const useFetchyRef = ( url, method, Dato ) => {
   
    const isMounted = useRef(true);

    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect(() => {
        
        return () => {
            isMounted.current = false
        }
    }, [])

    useEffect( () => {
        const optionFetch={
            method: method,
            Headers:{
                "token": "ac6f92956339ea75ca3c2623a24870ea"
        },
        body:
        JSON.stringify(Dato)
   
        }
        setState({ data:null, loading:true, error:null })
        fetch( url, optionFetch )
            .then( resp => resp.json() )
            .then(data => {
                    if (isMounted.current ) {
                        setState({
                            loading: true,
                            error: null,
                            data
                    })    
                    }else{
                        console.log('setState no se llamo');
                    }
        });
    },[url, method, Dato])
    return state
}
