import React from 'react';

export const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <div className="relative w-32 h-32 rounded-full bg-blue-600 border-4 border-white shadow-lg overflow-hidden animate-spin-slow">
        <div className="absolute inset-0 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="w-24 h-24 animate-bounce">
            <path transform="translate(100 100)" d="M29.4,-17.4C33.1,1.8,27.6,16.1,11.5,31.6C-4.7,47,-31.5,63.6,-43,56C-54.5,48.4,-50.7,16.6,-41,-10.9C-31.3,-38.4,-15.6,-61.5,-1.4,-61C12.8,-60.5,25.7,-36.5,29.4,-17.4Z" fill="#7CC133" />
          </svg>
        </div>
      </div>
      <p className="mt-4 text-lg font-semibold">Connecting...</p>
    </div>
  );
};

