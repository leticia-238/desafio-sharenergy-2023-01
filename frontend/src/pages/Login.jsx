import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import authApi from '../services/authApi';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberCheck, setRemembercheck] = useState(false);

  const [invalidLogin, setInvalidLogin] = useState(false);

  const navigate = useNavigate();
  const { setToken } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = await authApi({ username, password });
      setToken(token);
      navigate('/');
    } catch (error) {
      setInvalidLogin(true);
      console.error(error);
    }
  };

  return (
    <form onSubmit={ async (e) => { await handleSubmit(e); } }>
      {invalidLogin && (
        <p>Username ou senha incorretos. Tente novamente!</p>
      )}
      <label
        className="rounded-lg bg-gray-100 border-2
        border-gray-200 flex items-center"
        htmlFor="username"
      >
        <input
          type="text"
          id="username"
          placeholder="Username"
          className="px-2 py-1.5  grow bg-inherit focus:outline-none"
          value={ username }
          onChange={ ({ target }) => setUsername(target.value) }
        />
      </label>
      <label
        className="rounded-lg bg-gray-100 border-2
        border-gray-200 flex items-center"
        htmlFor="password"
      >
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="px-2 py-1.5  grow bg-inherit focus:outline-none"
          value={ password }
          onChange={ ({ target }) => setPassword(target.value) }
        />
      </label>
      <label htmlFor="remember-me">
        Remember me
        <input
          type="checkbox"
          id="remember-me"
          checked={ rememberCheck }
          onChange={ () => setRemembercheck(!rememberCheck) }
        />
      </label>
      <button
        type="submit"
        className="rounded-lg px-4 py-2 text-white font-semibold bg-cyan-500"
      >
        Sign in
      </button>
    </form>
  );
}

export default Login;
