import styles from './Register.module.css'

import { useState, useEffect } from 'react'

const Register = () => {
  return (
    <div>
        <h1>Cadastre-se para postar</h1>
        <p>Crie seu usuário e compartilhe suas histórias</p>
        <form>
          <label>
            <span>Name:</span>
            <input type="text" 
            name='displayName' 
            required 
            placeholder='Username'/>
          </label>
          <label>
            <span>Email:</span>
            <input type="email" 
            name='email' 
            required 
            placeholder='User email'/>
          </label>
          <label>
            <span>Password:</span>
            <input type="password" 
            name='password' 
            required 
            placeholder='Password'/>
          </label>
          <label>
            <span>Password Check:</span>
            <input type="password" 
            name='password' 
            required 
            placeholder='Verify your password'/>
          </label>
          <button className='btn'>Cadastrar</button>
        </form>
    </div>
  )
}

export default Register