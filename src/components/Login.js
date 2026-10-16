import React from 'react';
import { login } from '../auth';

const Login = () => {
  const handleLogin = async () => {
    try {
      const user = await login();
      window.location.href = '/dashboard';
    } catch (error) {
      alert('Login failed');
    }
  };

  return (
    <div>
      <h1>Login with Unstoppable</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;