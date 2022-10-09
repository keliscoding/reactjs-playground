import './App.css';

import { useEffect, useState } from 'react';

const url = "http://localhost:3000/products"

function App() {

  const [products, setProducts] = useState([]);

  // 1 - resgatando dados

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(url)
        .then((res) => res.json());

      setProducts(data);
    }

    fetchData().catch(console.error);

  }, []);

  console.log(products);

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - R${product.price}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
