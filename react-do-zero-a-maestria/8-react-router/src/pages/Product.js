import React from 'react';

import { useParams } from 'react-router-dom';

function Product() {
    //4 - rota dinamica
    const {id} = useParams();

  return (
    <>
        <p>Id do produto: {id}</p>
    </>
  )
}

export default Product