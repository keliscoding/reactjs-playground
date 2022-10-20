import { useState } from 'react';

const HookUseState = () => {
    // normalmente usado para gerenciar valores
    // 1 - useState

    let userName = "João"

    const [name, setName] = useState("Kelly");

    const changeNames = () => {
      userName = "João Souza";
      setName("Kelly Castelo");
    }

  return (
    <div>
        {/* 1 - useState */}
        <h2>useState</h2>

        <p>Variável: {userName}</p>
        <p>useState: {name}</p>
        <button onClick={changeNames}>Mudar Nomes</button>
        <hr />
    </div>
  )
}

export default HookUseState