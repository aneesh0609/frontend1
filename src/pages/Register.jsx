import axios from "axios";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Register = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");

  const navigateTo = useNavigate();

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://new-back-m98d.onrender.com/api/v1/user/patient/register",
        { firstName, lastName, email, phone, dob, gender, password, role: "patient" },
        { withCredentials: true, headers: { "Content-Type": "application/json" } }
      );

      toast.success("Registration Successful 🎉");
      setIsAuthenticated(true);
      navigateTo("/");

      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setDob("");
      setGender("");
      setPassword("");
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration Failed");
    }
  };

  if (isAuthenticated) return <Navigate to="/" />;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 px-4 py-12 relative overflow-hidden">
      
      {/* background glow */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-rose-300 opacity-30 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-60 h-60 bg-amber-300 opacity-30 blur-3xl"></div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-lg bg-white/80 backdrop-blur-xl shadow-2xl rounded-2xl p-8 border border-amber-200">
        
        <h2 className="text-2xl font-bold text-gray-800 text-center">Create Account 🐾</h2>
        <p className="text-gray-600 text-center mb-6">Please sign up to continue</p>

        <form onSubmit={handleRegistration} className="space-y-4">

          {/* First + Last Name */}
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full px-4 py-3 rounded-xl border bg-white/60 focus:ring-2 focus:ring-amber-400 outline-none"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full px-4 py-3 rounded-xl border bg-white/60 focus:ring-2 focus:ring-amber-400 outline-none"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          {/* Email + Phone */}
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-xl border bg-white/60 focus:ring-2 focus:ring-orange-400 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-3 rounded-xl border bg-white/60 focus:ring-2 focus:ring-orange-400 outline-none"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          {/* DOB */}
          <input
            type="date"
            className="w-full px-4 py-3 rounded-xl border bg-white/60 focus:ring-2 focus:ring-rose-400 outline-none"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />

          {/* Gender + Password */}
          <div className="flex flex-col sm:flex-row gap-4">
            <select
              className="w-full px-4 py-3 rounded-xl border bg-white/60 text-gray-600 focus:ring-2 focus:ring-rose-400 outline-none"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>

            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-xl border bg-white/60 focus:ring-2 focus:ring-rose-400 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Already Registered */}
          <div className="text-sm text-center">
            <span className="text-gray-600">Already registered? </span>
            <Link to="/login" className="text-amber-600 font-semibold hover:underline">
              Login Now
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
          >
            Register ✅
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
