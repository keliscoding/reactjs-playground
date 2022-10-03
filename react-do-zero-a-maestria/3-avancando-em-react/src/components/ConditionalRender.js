import { useState } from 'react';

const ConditionalRender = () => {
    const [x] = useState(false);

    const [name, setName] = useState("Matheus");

  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for true, sim!</p>}
        {!x && <p>Agora x é falso!</p>}
        <h2>If Ternário</h2>
        {name === "João"? (
            <div>O nome é João.</div>
        ) : (
            <div>O nome não é João.</div>
        )}
        <button onClick={() => setName("João")}>Mudar nome pra João</button>
    </div>
  )
}

export default ConditionalRender