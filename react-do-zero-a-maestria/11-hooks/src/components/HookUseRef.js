import { useEffect, useRef, useState } from "react";

const HookUseRef = () => {
  // 1 - useRef

  const numberRef = useRef(0);
  const [counter, setCounter] = useState(0);
  const [counterB, setCounterB] = useState(0);

  //se você usar um state dentro de um useEffect sem dependencias, causa um loop infinito, nesse caso vc usa em useRef em vez de useState 

  useEffect(() => {
    numberRef.current = numberRef.current + 1;
  });

  // 2 - useRef e DOM

  const inputRef = useRef();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setText("");

    inputRef.current.focus();
  }

  return (
    <div>
      <h2>useRef</h2>
      {/* 1 - useRef */}
      <p>O componente renderizou: {numberRef.current} vezes.</p>
      <p>Counter 1: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Counter A</button>
      <p>Counter 2: {counterB}</p>
      <button onClick={() => setCounterB(counterB + 1)}>Counter B</button>
      {/* 2 - useRef e DOM */}
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} value={text} onChange={(e) => setText(e.target.value)}/>
        <input type="submit" value="Enviar"/>
      </form>
      <hr />
    </div>
  );
};

export default HookUseRef;
