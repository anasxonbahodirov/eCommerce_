import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

export const User = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://randomuser.me/api/')
      .then(response => {
        setUser(response.data.results[0]);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching user:', error));
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="relative w-16 h-16">
          <motion.div 
            className="absolute inset-0 rounded-full bg-blue-500"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ repeat: Infinity, duration: 1 }}
          />
          <motion.div 
            className="absolute inset-0 rounded-full bg-white opacity-75"
            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
            transition={{ repeat: Infinity, duration: 1, delay: 0.5 }}
          />
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-blue-500 p-6"
    >
      <div className="bg-white shadow-2xl rounded-2xl p-8 text-center w-96 transform transition-all hover:scale-105">
        <motion.img 
          src={user.picture.large} 
          alt="User Avatar" 
          className="rounded-full w-36 h-36 mx-auto border-8 border-white shadow-lg"
          whileHover={{ scale: 1.1 }}
        />
        <h2 className="mt-4 text-3xl font-bold text-gray-900">{user.name.first} {user.name.last}</h2>
        <p className="text-gray-700 flex items-center justify-center gap-2 mt-2 text-lg">
          <FaEnvelope className="text-blue-500" /> {user.email}
        </p>
        <p className="text-gray-600 flex items-center justify-center gap-2 mt-2 text-lg">
          <FaMapMarkerAlt className="text-red-500" /> {user.location.city}, {user.location.country}
        </p>
        <p className="text-gray-600 flex items-center justify-center gap-2 mt-2 text-lg">
          <FaPhone className="text-green-500" /> {user.phone}
        </p>
        <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">View Profile</button>
      </div>
    </motion.div>
  );
};