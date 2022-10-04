import './MyForm.css';

import { useState } from 'react';

const MyForm = ({user}) => {
   // 3 - gerenciamento de dados

    const [name, setName] = useState(user ? user.name : '')
    const [email, setEmail] = useState(user ? user.email : '')

    //isso aqui não é a maneira mais adequada de lidar com evento em formulario
    const handleChange = (e) => {
        setName(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("enviando o formulario")
        console.log(name);
        console.log(email);
    }

  return (
    <div>
        {/* 6 - controlled input */}
        {/* 5 - envio de form */}
        {/* 1 - criação de form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder='Digite seu nome'
                onChange={handleChange} value={name}/>
            </div>
            {/* 2 - label envolvendo input  */}
            <label>
                <span>E-mail:</span>
                {/* 4 - simplificação da manipulação de state */}
                <input type="email" name="email" placeholder='Digite o seu e-mail' onChange={(e) => setEmail(e.target.value)} value={email}/>
            </label>
            <input type="submit" value="Enviar"/>
        </form>
    </div>
  )
}

export default MyForm