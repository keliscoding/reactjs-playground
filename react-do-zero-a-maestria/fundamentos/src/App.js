import './App.css';
import Challenge from './components/Challenge';
import Events from './components/Events';
import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions';

function App() {
  return (
    <>
      <h1>Sou um título</h1>
      <FirstComponent/>
      <TemplateExpressions/>
      <Events/>
      <Challenge numberA="3" numberB="2"/>
    </>
  );
}

export default App;
