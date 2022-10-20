import React, { useEffect, useState } from "react";

const HookUseEffect = () => {
  //1 - useEffect, sem dependencies
  // dispara sempre que o componente é rerenderizado

  useEffect(() => {
    console.log("Estou sendo executado sem dependencias")
  });

  const [number, setNumber] = useState(0);

  const changeSomething = () => {
    setNumber(number + 1);
  };
  
  // 2 - array de deps. vazio
  useEffect(() => {
    console.log("Serei executado apenas uma vez")
  }, [])

  return (
    <div>
      <h2>useEffect</h2>
      <p>Number: {number}</p>
      <button onClick={changeSomething}>Executar!</button>
      <hr />
    </div>
  );
};

export default HookUseEffect;
