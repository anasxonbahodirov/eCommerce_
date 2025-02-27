import React, { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { usePost } from "../../hooks";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { mutate, loading } = usePost();

  const login = async (e) => {
    e.preventDefault();
    mutate({
      api: "https://fakestoreapi.com/auth/login",
      method: "POST",
      bodyData: { username, password },
      onSuccess: (data) => {
        localStorage.setItem("token", data.token);
        navigate("/");
      },
      onError: () => {
        toast.error("Parol noto‘g‘ri");
      },
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="w-full max-w-md bg-gray-900 p-8 rounded-3xl shadow-xl text-white">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <form className="flex flex-col gap-4" onSubmit={login}>
          <div className="relative">
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg">@</span>
            <input
              type="text"
              className="w-full h-12 p-3 pl-12 bg-gray-800 border-none rounded-xl focus:ring-2 focus:ring-gray-600 shadow-inner text-white text-lg"
              value={username}
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="relative">
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg">🔒</span>
            <input
              type="password"
              className="w-full h-12 p-3 pl-12 bg-gray-800 border-none rounded-xl focus:ring-2 focus:ring-gray-600 shadow-inner text-white text-lg"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <button 
              disabled={loading}
              className="w-1/2 bg-gray-700 text-white py-3 rounded-lg font-semibold transition hover:bg-gray-600 disabled:opacity-50">
              Login
            </button>
            <button 
              className="w-1/2 bg-gray-700 text-white py-3 rounded-lg font-semibold transition hover:bg-gray-600">
              Sign Up
            </button>
          </div>
          <button className="w-full mt-2 bg-gray-700 text-white py-3 rounded-lg font-semibold transition hover:bg-gray-600">
            Forgot Password
          </button>
        </form>
      </div>
    </div>
  );
};
