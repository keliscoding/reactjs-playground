import './MyForm.css';

import { useState } from 'react';

const MyForm = () => {
   // 3 - gerenciamento de dados

    const [name, setName] = useState()
    const [email, setEmail] = useState()

    //isso aqui não é a maneira mais adequada de lidar com evento em formulario
    const handleChange = (e) => {
        setName(e.target.value);
    }

    console.log(name);

  return (
    <div>
        {/* 1 - criação de form */}
        <form>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder='Digite seu nome'
                onChange={handleChange}/>
            </div>
            <input type="submit" value="Enviar"/>
            {/* 2 - label envolvendo input  */}
            <label>
                <span>E-mail:</span>
                <input type="email" name="email" placeholder='Digite o seu e-mail' />
            </label>
        </form>
    </div>
  )
}

export default MyForm