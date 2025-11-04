import axios from "axios";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Link, useNavigate, Navigate } from "react-router-dom";

const Login = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigateTo = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://new-back-m98d.onrender.com/api/v1/user/login",
        { email, password, confirmPassword, role: "patient" },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      toast.success("Login Successful ✅");
      setIsAuthenticated(true);
      navigateTo("/");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    }
  };

  if (isAuthenticated) return <Navigate to="/" />;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-rose-50 to-amber-100 px-4 py-10 relative overflow-hidden">

      {/* background glow effects */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-orange-300 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-rose-300 rounded-full blur-3xl opacity-30"></div>

      {/* Card */}
      <div className="w-full max-w-md bg-white/80 backdrop-blur-xl shadow-xl rounded-2xl p-8 border border-orange-200 relative z-10">

        <h2 className="text-2xl font-bold text-center text-gray-800">Welcome Back 🐾</h2>
        <p className="text-gray-600 text-center mb-6">Please login to continue</p>

        <form onSubmit={handleLogin} className="space-y-4">

          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-xl border bg-white/60 focus:ring-2 focus:ring-orange-400 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl border bg-white/60 focus:ring-2 focus:ring-rose-400 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-3 rounded-xl border bg-white/60 focus:ring-2 focus:ring-amber-400 outline-none"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          {/* Register link */}
          <div className="text-sm flex justify-end mt-1 gap-1">
            <span className="text-gray-600">Not registered?</span>
            <Link to="/register" className="text-orange-600 font-medium hover:underline">
              Register Now
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 mt-2 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
          >
            Login ✅
          </button>

        </form>
      </div>
    </div>
  );
};

export default Login;
