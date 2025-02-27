import React from "react";

export const Error = ({ error }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-red-100 text-red-700 border border-red-400 px-6 py-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">Error</h2>
        <p className="mt-2">{error.message || "Something went wrong!"}</p>
      </div>
    </div>
  );
};
