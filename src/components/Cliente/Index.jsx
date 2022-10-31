import React, { useEffect } from 'react'
import { findAllInRenderedTree } from 'react-dom/test-utils'
import { request } from '../../data/services/example'

const Index = () => {

     const loadProducts=()=>{
        debugger
        alert()

      console.log(request); 

     }


    useEffect(()=>{

        loadProducts()

    },[])
  return (
    <div>Index</div>
  )
}

export default Index