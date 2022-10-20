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

    // 2 - useState e input
    const [age, setAge] = useState(18);

    const handleSubmit = (e) => {
      e.preventDefault();

      console.log(age);
      setAge("");
    }

  return (
    <div>
        {/* 1 - useState */}
        <h2>useState</h2>

        <p>Variável: {userName}</p>
        <p>useState: {name}</p>
        <button onClick={changeNames}>Mudar Nomes</button>
        {/* 2 - useState e input */}
        <p>Digite a sua idade:</p>
        <form onSubmit={handleSubmit}>
          <label>
              Idade: 
              <input type="text" value={age} onChange={(e) => setAge(e.target.value)}/>
          </label>
          <input type="submit" value="Enviar"/>
        <p>Você tem {age} anos!</p>
        </form>
        <hr />
    </div>
  )
}

export default HookUseState