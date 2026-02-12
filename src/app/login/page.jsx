'use client';

import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { IconCircleCheck, IconLoader3 } from '@tabler/icons-react';
import toast from 'react-hot-toast';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const Login = () => {

  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const res = await axios.post(
          'https://pet-backend-9xvs.onrender.com/userLog/authenticate',
          values
        );

        // ✅ Save token
        localStorage.setItem('token', res.data.token);

        // ✅ Save user object
        if (res.data.user) {
          localStorage.setItem('user', JSON.stringify(res.data.user));
        }

        toast.success('Login successful 🎉');

        // ✅ Reload page so navbar updates
        setTimeout(() => {
          window.location.href = "/";
        }, 800);

      } catch (err) {
        toast.error(err?.response?.data?.message || 'Login failed');
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://cdn.wallpapersafari.com/32/78/dTuctf.jpg')",
      }}
    >
      <div className="w-full max-w-md bg-white rounded-lg border shadow-lg p-8">
        <h1 className="text-2xl font-bold text-lime-500 mb-6 text-center">
          Login Here
        </h1>

        <form onSubmit={loginForm.handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              onChange={loginForm.handleChange}
              value={loginForm.values.email}
              className="border rounded w-full px-3 py-2 mt-1"
            />
            {loginForm.touched.email && loginForm.errors.email && (
              <p className="text-red-500 text-sm">
                {loginForm.errors.email}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              onChange={loginForm.handleChange}
              value={loginForm.values.password}
              className="border rounded w-full px-3 py-2 mt-1"
            />
            {loginForm.touched.password && loginForm.errors.password && (
              <p className="text-red-500 text-sm">
                {loginForm.errors.password}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loginForm.isSubmitting}
            className="flex items-center justify-center bg-lime-500 text-white w-full py-2 rounded disabled:opacity-50"
          >
            {loginForm.isSubmitting ? (
              <IconLoader3 className="animate-spin mr-2" />
            ) : (
              <IconCircleCheck className="mr-2" />
            )}
            {loginForm.isSubmitting ? 'Please Wait' : 'Login'}
          </button>

          <div className="mt-4 text-center">
            <a href="/signup" className="text-lime-500 text-sm hover:underline">
              Create a New Account
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
