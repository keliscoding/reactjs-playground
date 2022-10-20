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

  // 3 - item no array de deps
  const [anotherNumber, setAnotherNumber] = useState(0)

  const changeAnotherNumber = () => {
    setAnotherNumber(anotherNumber + 1);
  };

  useEffect(() => {
    console.log("Estou sendo disparado pelo anotherNumber")
  }, [anotherNumber])

  return (
    <div>
      <h2>useEffect</h2>
      <p>Number: {number}</p>
      <button onClick={changeSomething}>Executar!</button>
      <p>Another Number: {anotherNumber}</p>
      <button onClick={changeAnotherNumber}>Executar!</button>
      <hr />
    </div>
  );
};

export default HookUseEffect;
