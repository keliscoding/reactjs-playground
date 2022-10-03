import './App.css';

import City from './assets/city.jpg';
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Fragments from './components/Fragments';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';

function App() {

  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarela", km: 0},
    {id: 2, brand: "KIA", color: "Vermelho", km: 2000},
    {id: 3, brand: "Citroen", color: "Prata", km: 10000},
  ];

  function showMessage() {
    console.log("Evento do componente pai")
  }

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
      {/* loop em array de objetos */}
      {cars.map(({brand, color, km, id}) => (<CarDetails key={id} brand={brand} color={color} km={km}/>))}
      {/* fragment */}
      <Fragments/>
      {/* children */}
      <Container myValue={20}>
        <p>E este é o conteúdo</p>
      </Container>
      {/* funções como props */}
      <ExecuteFunction showMessage={showMessage}/>
    </div>
  );
}

export default App;
