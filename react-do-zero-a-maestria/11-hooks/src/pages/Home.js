import { useContext } from "react";
import HookUseCallback from "../components/HookUseCallback";
import { SomeContext } from "../components/HookUseContext";
import HookUseEffect from "../components/HookUseEffect";
import HookUseReducer from "../components/HookUseReducer";
import HookUseRef from "../components/HookUseRef";
import HookUseState from "../components/HookUseState";

const Home = () => {

  //useContext
  const {contextValue} = useContext(SomeContext);


  return (
    <div>
      <HookUseState />
      <HookUseReducer />
      <HookUseEffect />
      <h2>useContext</h2>
      <p>Valor do contexto: {contextValue}</p>
      <hr />
      <HookUseRef/>
      <HookUseCallback/>
    </div>
  );
};

export default Home;
