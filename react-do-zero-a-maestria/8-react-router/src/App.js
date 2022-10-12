import './App.css';

// 1 - config react router
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//pages
import About from './pages/About';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1> 
      {/* o que está fora do browserrouter vai ser repetido em todas as paginas */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
