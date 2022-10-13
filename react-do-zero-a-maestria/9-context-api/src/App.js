import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import Products from './pages/Products';

function App() {
  return (
    <div className="App">
      <h1>Context Api</h1>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Products/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
