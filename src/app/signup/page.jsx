'use client';

import axios from 'axios';
import { IconCircleCheck, IconLoader3 } from '@tabler/icons-react';
import { useFormik } from 'formik';
import React from 'react';
import toast from 'react-hot-toast';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .required('Password is required')
    .matches(/[a-z]/, 'Lowercase Letter Required')
    .matches(/[A-Z]/, 'Uppercase Letter Required')
    .matches(/[0-9]/, 'Number Required')
    .matches(/\W/, 'Special Character Required'),
  confirmPassword: Yup.string()
    .required('Confirm password is required')
    .oneOf([Yup.ref('password'), null], 'Password must match')
});

const Signup = () => {

  const signupForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: SignupSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        const response = await axios.post(
          'https://pet-backend-9xvs.onrender.com/userLog/add',
          values
        );

        // ✅ Save token if backend sends it
        if (response.data.token) {
          localStorage.setItem('token', response.data.token);
        }

        // ✅ Save user if backend sends it
        if (response.data.user) {
          localStorage.setItem('user', JSON.stringify(response.data.user));
        }

        toast.success('User registered successfully 🎉');
        resetForm();

        setTimeout(() => {
          window.location.href = "/";
        }, 800);

      } catch (err) {
        toast.error(err?.response?.data?.message || 'Signup failed');
      } finally {
        setSubmitting(false);
      }
    }
  });

  return (
    <div
      className='flex justify-center items-center h-screen bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/024/269/835/original/cute-colors-animal-footprints-on-green-background-vector.jpg')` }}
    >
      <div className='w-full max-w-md mx-auto bg-white rounded-lg border-2 border-gray-300 shadow-lg p-8'>
        <h1 className='uppercase font-bold my-6 text-3xl text-center text-lime-500'>
          Signup Form
        </h1>

        <form onSubmit={signupForm.handleSubmit}>

          <div className='mb-4'>
            <label className='block text-gray-700'>Full Name</label>
            <input
              name='name'
              type='text'
              onChange={signupForm.handleChange}
              value={signupForm.values.name}
              className='border rounded w-full px-3 py-2 mt-1'
            />
            {signupForm.touched.name && signupForm.errors.name && (
              <span className='text-sm text-red-500'>
                {signupForm.errors.name}
              </span>
            )}
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700'>Email</label>
            <input
              name='email'
              type='email'
              onChange={signupForm.handleChange}
              value={signupForm.values.email}
              className='border rounded w-full px-3 py-2 mt-1'
            />
            {signupForm.touched.email && signupForm.errors.email && (
              <span className='text-sm text-red-500'>
                {signupForm.errors.email}
              </span>
            )}
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700'>Password</label>
            <input
              name='password'
              type='password'
              onChange={signupForm.handleChange}
              value={signupForm.values.password}
              className='border rounded w-full px-3 py-2 mt-1'
            />
            {signupForm.touched.password && signupForm.errors.password && (
              <span className='text-sm text-red-500'>
                {signupForm.errors.password}
              </span>
            )}
          </div>

          <div className='mb-6'>
            <label className='block text-gray-700'>Confirm Password</label>
            <input
              name='confirmPassword'
              type='password'
              onChange={signupForm.handleChange}
              value={signupForm.values.confirmPassword}
              className='border rounded w-full px-3 py-2 mt-1'
            />
            {signupForm.touched.confirmPassword && signupForm.errors.confirmPassword && (
              <span className='text-sm text-red-500'>
                {signupForm.errors.confirmPassword}
              </span>
            )}
          </div>

          <button
            type='submit'
            disabled={signupForm.isSubmitting}
            className='flex justify-center items-center bg-lime-500 text-white px-3 py-2 rounded w-full disabled:opacity-50'
          >
            {signupForm.isSubmitting
              ? <IconLoader3 className='animate-spin mr-2' size={20} />
              : <IconCircleCheck className='mr-2' size={20} />
            }
            {signupForm.isSubmitting ? 'Please Wait' : 'Submit'}
          </button>

          <div className='mt-4 text-center'>
            <a href='/login' className='text-lime-500 hover:underline text-sm'>
              Already have an account? Login
            </a>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Signup;
