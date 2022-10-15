import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About/About';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <div className="App">
        <BrowserRouter>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
