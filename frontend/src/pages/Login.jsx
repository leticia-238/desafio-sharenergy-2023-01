import React, { useContext, useEffect, useState } from 'react';
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
      const token = await authApi({ user: { username, password } });
      setToken(token);
      if (rememberCheck) {
        const parsedData = JSON.stringify({ username, password });
        localStorage.setItem(parsedData);
      }
      navigate('/');
    } catch (error) {
      setInvalidLogin(true);
      console.error(error);
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setUsername(user.username);
      setPassword(user.password);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-400 to-green-400 p-4">
      <form
        className="grid gap-4 bg-white p-2 rounded-md mt-44"
        onSubmit={ async (e) => { await handleSubmit(e); } }
      >
        {invalidLogin && (
          <p>Username ou senha incorretos. Tente novamente!</p>
        )}
        <legend className="font-bold text-center text-2xl text-cyan-600">Login</legend>
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
        <label htmlFor="remember-me" className="justify-self-center p-2">
          <input
            type="checkbox"
            id="remember-me"
            checked={ rememberCheck }
            onChange={ () => setRemembercheck(!rememberCheck) }
          />
          {' Remember me'}
        </label>
        <button
          type="submit"
          className="rounded-lg px-4 py-2 text-white font-semibold bg-cyan-500"
        >
          Sign in
        </button>
      </form>
    </div>
  );
}

export default Login;
