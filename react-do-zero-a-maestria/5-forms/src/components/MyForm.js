import './MyForm.css';

import { useState } from 'react';

const MyForm = ({user}) => {
   // 3 - gerenciamento de dados

    const [name, setName] = useState(user ? user.name : '')
    const [email, setEmail] = useState(user ? user.email : '')

    const [bio, setBio] = useState(user ? user.bio : '')

    const [role, setRole] = useState(user ? user.role : '')

    //isso aqui não é a maneira mais adequada de lidar com evento em formulario
    const handleChange = (e) => {
        setName(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("enviando o formulario")
        console.log(name, email, bio, role);

        //validacao
        //envio

        // 7 - limpando o output
        setName("");
        setEmail("");
        setBio("");
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
            {/* 8 - text area */}
            <label>
                <span>Bio:</span>
                <textarea name="Bio" placeholder='Descrição do usuário' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
            </label>

            {/* 9 - select */}
            <label>
                <span>Função no sistema</span>
                <select name="role" onChange={(e) => setRole(e.target.value)} value = {role}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Administrador</option>
                </select>
            </label>

            <input type="submit" value="Enviar"/>
        </form>
    </div>
  )
}

export default MyForm