import React from 'react';
import { useForm } from 'react-hook-form';
import api from '../api/axios';
import { useNavigate } from 'react-router-dom';

type LoginForm = {
  email: string;
  password: string;
};

type LoginResponse = {
  token: string;
};

const LoginPage = () => {
  const { register, handleSubmit } = useForm<LoginForm>();
  const navigate = useNavigate();

  const onSubmit = async (data: LoginForm) => {
    try {
      const res = await api.post<LoginResponse>('/login', data);
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch (err) {
  console.error('Login error:', err);
  alert('Login failed');
}
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded shadow-md w-96"
      >
        <h2 className="text-2xl mb-6">Admin Login</h2>
        <input
          {...register('email')}
          type="email"
          placeholder="Email"
          className="border p-2 mb-4 w-full"
        />
        <input
          {...register('password')}
          type="password"
          placeholder="Password"
          className="border p-2 mb-6 w-full"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded w-full"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
