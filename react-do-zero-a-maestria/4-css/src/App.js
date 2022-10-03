import { useState } from 'react';
import './App.css';
import MyComponent from './components/MyComponent';

function App() {

  let [toggle, setToggle] = useState(false);

  return (
    <div className="App">
      {/* CSS global */}
      <h1>React com CSS</h1>
      {/* CSS de componente */}
      <MyComponent/>
      <p>O estilo está vazando pra fora do componente</p>
      {/* Inline Style, não é muito indicado pq zoa a manutenção */}
      <p style={{color: "blue", fontWeight: "bold"}}>Aqui é inline</p>
      {/* Inline Style dinâmico */}
      <p style={toggle ? ({color: "red"}) : ({color: "blue"})}>Esse aqui é inline dinâmico</p>
      <button onClick={() => setToggle(!toggle)}>Clique para mudar a cor</button>
      {/* Classes dinâmicas no CSS */}
      <h2 className={ toggle ? "red-title" : "title"}>Este título vai ter classe dinâmica</h2>
    </div>
  );
}

export default App;
