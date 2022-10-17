import { useEffect, useState } from 'react';
import { useAuthentication } from '../../hooks/useAuthentication';

import styles from './Login.module.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      email, 
      password
    }

    const res = await createUser(user);

    console.log(res);
  };

  useEffect(() => {

    if(authError) {
      setError(authError);
    }

  }, [authError])

  return (
    <div className={styles.login}>
        <h1>Login</h1>
        <p>Faça o login para poder utilizar o sistema</p>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Email:</span>
            <input type="email" 
            name='email' 
            required 
            placeholder='User email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            <span>Password:</span>
            <input type="password" 
            name='password' 
            required 
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          {!loading && <button className='btn'>Login</button>}
          {loading && <button className='btn' disabled>Wait...</button>}
          {error && <p className='error'>{error}</p>}
        </form>
    </div>
  )
}

export default Login