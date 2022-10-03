import './App.css';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <div className="App">
      {/* CSS global */}
      <h1>React com CSS</h1>
      {/* CSS de componente */}
      <MyComponent/>
      <p>O estilo está vazando pra fora do componente</p>
      {/* Inline Style, não é muito indicado pq zoa a manutenção */}
      <p style={{color: "blue", fontWeight: "bold"}}>Aqui é inline</p>
    </div>
  );
}

export default App;
