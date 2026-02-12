'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

const ExplorePets = () => {

  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
  ];

  const [selectedType, setSelectedType] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [petList, setPetList] = useState([]);

  const fetchPetsData = async () => {
    try {
      const res = await axios.get('https://pet-backend-9xvs.onrender.com/pet/getall');
      setPetList(res.data);
    } catch (error) {
      console.error('Error fetching pets data:', error);
    }
  };

  useEffect(() => {
    fetchPetsData();
  }, []);

  const filteredPets = petList.filter(pet =>
    (selectedType ? pet.type === selectedType : true) &&
    (selectedState ? pet.state?.toLowerCase() === selectedState.toLowerCase() : true) &&
    (searchTerm ? pet.breed?.toLowerCase().includes(searchTerm.toLowerCase()) : true)
  );

  return (
    <div className="flex gap-6 p-6">

      {/* Filter Card */}
      <div className="w-1/4 bg-white shadow-lg p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Filter Pets</h2>

        {/* Type Filter */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Type</label>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="border rounded w-full px-3 py-2"
          >
            <option value="">All Types</option>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Rabbit">Rabbit</option>
          </select>
        </div>

        {/* State Filter */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">State</label>
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="border rounded w-full px-3 py-2"
          >
            <option value="">All States</option>
            {indianStates.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Pets Display */}
      <div className="w-3/4">

        {/* Search */}
        <div className="mb-6">
          <label className="block text-black text-2xl font-bold mb-2">
            Search by Breed
          </label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by breed"
            className="border rounded w-full px-3 py-2"
          />
        </div>

        <h2 className="text-2xl font-bold mb-6">Available Pets</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPets.length > 0 ? (
            filteredPets.map((pet) => (
              <div key={pet._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                  src={pet.image}
                  alt={pet.breed}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{pet.breed}</h3>
                  <p className="text-gray-600">Type: {pet.type}</p>
                  <p className="text-gray-600">State: {pet.state}</p>
                  <div className="mt-4 text-center">
                    <Link
                      href={`/pet-details/${pet._id}`}
                      className="text-lime-500 hover:underline text-sm"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No pets found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExplorePets;
