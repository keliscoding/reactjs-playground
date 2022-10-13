import React from 'react';

import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

function Product() {
    //4 - rota dinamica
    const {id} = useParams();

    //5- carregamento dinamico
    const url = "http://localhost:3000/products/" + id;
    const {data, loading, error} = useFetch(url);

    console.log(data);

  return (
    <>
        {error && <p>{error}</p>}
        {loading && <p>loading....</p>}
        {!loading && <div>
            <h2>{data.name}</h2>
            <p>price: R$ {data.price},00</p>
            </div>}
    </>
  )
}

export default Product