import React from 'react';

import { Link, useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import Info from './Info';

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
        {data && (
        <div>
            <h2>{data.name}</h2>
            <p>price: R$ {data.price},00</p>
            {/* 6 - nested routes */}
            <Link to={`/products/${id}/info`} element={Info}>Mais informações...</Link>
        </div>)}
    </>
  )
}

export default Product