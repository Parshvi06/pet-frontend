'use client';
import React, { useEffect } from 'react';
import { IconSend, IconPaw } from '@tabler/icons-react';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

// Validation Schema
const validationSchema = Yup.object({
  breed: Yup.string().required('Pet breed is required'),
  type: Yup.string().required('Pet type is required'),
  gender: Yup.string().required('Pet gender is required'),
  age: Yup.number().required('Pet age is required').positive('Age must be a positive number').integer('Age must be an integer'),
  state: Yup.string().required('State is required'),
  contact_name: Yup.string().required('Contact name is required'),
  phone: Yup.string().required('phone number is required'),
  image: Yup.mixed().required('Image is required')
});

const AddPetForm = () => {

  const router = useRouter();

  // ✅ PAGE PROTECTION
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      breed: '',
      type: '',
      gender: '',
      age: '',
      state: '',
      contact_name: '',
      phone: '',
      image: ''
    },
    validationSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {

        const token = localStorage.getItem('token');

        if (!token) {
          toast.error('Please login first');
          router.push('/login');
          return;
        }

        // Upload image if file
        if (values.image instanceof File) {
          const imageFormData = new FormData();
          imageFormData.append('file', values.image);
          imageFormData.append('upload_preset', 'mypreset');
          imageFormData.append('cloud_name', 'dmnl8ozex');

          const uploadResponse = await axios.post(
            'https://api.cloudinary.com/v1_1/dmnl8ozex/image/upload',
            imageFormData,
            { headers: { 'Content-Type': 'multipart/form-data' } }
          );

          values.image = uploadResponse.data.secure_url;
        }

        // ✅ SEND TOKEN IN HEADER
        const response = await axios.post(
          'https://pet-backend-9xvs.onrender.com/pet/add',
          values,
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        resetForm();
        toast.success('Pet added successfully');

      } catch (err) {
        console.error(err);
        toast.error(err.response?.data?.message || 'An error occurred');
      } finally {
        setSubmitting(false);
      }
    }
  });

  const handleFileChange = (e) => {
    const { files } = e.target;
    if (files && files[0]) {
      formik.setFieldValue('image', files[0]);
    }
  };

  return (
    <div
      className='relative min-h-screen bg-cover bg-center'
      style={{ backgroundImage: 'url("https://images.squarespace-cdn.com/content/v1/5e950775bee93b4c91e3d327/5752df7c-0739-4192-abb1-8a18da95a64d/Website+Background.png")' }}
    >
      <div className='absolute inset-0 bg-black opacity-50'></div>
      <div className='relative flex justify-center items-center min-h-screen'>
        <div className='w-full max-w-2xl bg-white shadow-lg rounded-lg p-8 z-10 my-12 mx-auto'>
          <h2 className='text-2xl font-bold text-lime-500 mb-6'>Add a New Pet</h2>

          <form onSubmit={formik.handleSubmit} className='space-y-6'>

            <div>
              <label className='block text-gray-700 font-medium mb-1'>Pet Breed</label>
              <input
                name='breed'
                type='text'
                value={formik.values.breed}
                onChange={formik.handleChange}
                className='border rounded-lg w-full px-4 py-2'
              />
            </div>

            <div>
              <label className='block text-gray-700 font-medium mb-1'>Pet Type</label>
              <select
                name='type'
                value={formik.values.type}
                onChange={formik.handleChange}
                className='border rounded-lg w-full px-4 py-2'
              >
                <option value=''>Select Type</option>
                <option value='Dog'>Dog</option>
                <option value='Cat'>Cat</option>
                <option value='Rabbit'>Rabbit</option>
              </select>
            </div>

            <div>
              <label className='block text-gray-700 font-medium mb-1'>Gender</label>
              <input
                name='gender'
                type='text'
                value={formik.values.gender}
                onChange={formik.handleChange}
                className='border rounded-lg w-full px-4 py-2'
              />
            </div>

            <div>
              <label className='block text-gray-700 font-medium mb-1'>Pet Age</label>
              <input
                name='age'
                type='number'
                value={formik.values.age}
                onChange={formik.handleChange}
                className='border rounded-lg w-full px-4 py-2'
              />
            </div>

            <div>
              <label className='block text-gray-700 font-medium mb-1'>State</label>
              <input
                name='state'
                type='text'
                value={formik.values.state}
                onChange={formik.handleChange}
                className='border rounded-lg w-full px-4 py-2'
              />
            </div>

            <div>
              <label className='block text-gray-700 font-medium mb-1'>Contact Name</label>
              <input
                name='contact_name'
                type='text'
                value={formik.values.contact_name}
                onChange={formik.handleChange}
                className='border rounded-lg w-full px-4 py-2'
              />
            </div>

            <div>
              <label className='block text-gray-700 font-medium mb-1'>Phone</label>
              <input
                name='phone'
                type='text'
                value={formik.values.phone}
                onChange={formik.handleChange}
                className='border rounded-lg w-full px-4 py-2'
              />
            </div>

            <div>
              <label className='block text-gray-700 font-medium mb-1'>Pet Image</label>
              <input
                type='file'
                onChange={handleFileChange}
                className='border rounded-lg w-full px-4 py-2'
                accept='image/*'
              />
            </div>

            <button
              type='submit'
              disabled={formik.isSubmitting}
              className='w-full py-2 px-4 bg-lime-500 text-white font-semibold rounded-lg flex items-center justify-center hover:bg-lime-600'
            >
              {formik.isSubmitting ? 'Adding...' : 'Add Pet'}
              <IconSend className='ml-2' />
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPetForm;
