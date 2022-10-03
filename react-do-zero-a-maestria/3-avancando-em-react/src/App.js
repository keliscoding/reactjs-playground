import './App.css';

import City from './assets/city.jpg';
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';

function App() {
  return (
    <div className='App'>
      <h1>Seção 3</h1>
      {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem"/>
      </div>
      {/* Imagem em assets */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
      <ShowUserName username="Zam0k" name="Castelo"/>
      <CarDetails brand="VW" km={10000} color="Blue"/>
      {/* reaproveitamento */}
      <CarDetails brand="Ford" color="Vermelha" km={0}/>
      <CarDetails brand="Fiat" color="Branco" km={4500}/>
    </div>
  );
}

export default App;
