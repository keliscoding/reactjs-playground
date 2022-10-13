import './App.css';

// 1 - config react router
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//components
import Navbar from './components/Navbar';

//pages
import SearchForm from './components/SearchForm';
import About from './pages/About';
import Home from './pages/Home';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import Product from './pages/Product';
import Search from './Search';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1> 
      {/* o que está fora do browserrouter vai ser repetido em todas as paginas */}
      <BrowserRouter>
      <Navbar/>
      {/* 9 - Search Params */}
      <SearchForm/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          {/* 4 - Rota dinâmica */}
          <Route path="/products/:id" element={<Product />}/>
          {/* 6 - nested route */}
          <Route path="/products/:id/info" element={<Info />}/>
          {/* 9 - search */}
          <Route path='/search' element={<Search/>}/>
          {/* 7 - no match route */}
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
