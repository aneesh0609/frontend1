import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Menu, X, Home, Calendar, Info, LogIn, LogOut } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const { data } = await axios.get(
        "https://new-back-m98d.onrender.com/api/v1/user/patient/logout",
        { withCredentials: true }
      );
      toast.success(data.message);
      setIsAuthenticated(false);
    } catch (err) {
      toast.error(err.response?.data?.message);
    }
  };

  return (
    <header className="w-full shadow-lg bg-white/80 backdrop-blur-md fixed top-0 left-0 z-50 border-b border-amber-100 ">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-3 ">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 duration-200 hover:scale-105">
          <span className="text-lg font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            Paws-world
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <Link 
            to="/" 
            className="flex items-center gap-2 hover:text-amber-600 duration-200"
          >
            <Home className="w-4 h-4" /> Home
          </Link>

          <Link 
            to="/appointment" 
            className="flex items-center gap-2 hover:text-amber-600 duration-200"
          >
            <Calendar className="w-4 h-4" /> Appointment
          </Link>

          <Link 
            to="/about" 
            className="flex items-center gap-2 hover:text-amber-600 duration-200"
          >
            <Info className="w-4 h-4" /> About Us
          </Link>

          {/* Auth Buttons */}
          {isAuthenticated ? (
            <button 
              onClick={handleLogout} 
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-500 to-rose-500 text-white text-sm font-semibold shadow-md hover:scale-105 transition"
            >
              <LogOut className="w-4 h-4" /> Logout
            </button>
          ) : (
            <button 
              onClick={() => navigate("/login")} 
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-semibold shadow-md hover:scale-105 transition"
            >
              <LogIn className="w-4 h-4" /> Login
            </button>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setOpen(!open)} 
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-amber-100 shadow-lg p-5 flex flex-col gap-4 font-medium text-gray-700 animate-slideDown">

          <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-3 text-lg hover:text-amber-600">
            <Home className="w-5 h-5" /> Home
          </Link>

          <Link to="/appointment" onClick={() => setOpen(false)} className="flex items-center gap-3 text-lg hover:text-amber-600">
            <Calendar className="w-5 h-5" /> Appointment
          </Link>

          <Link to="/about" onClick={() => setOpen(false)} className="flex items-center gap-3 text-lg hover:text-amber-600">
            <Info className="w-5 h-5" /> About Us
          </Link>

          {isAuthenticated ? (
            <button 
              onClick={handleLogout} 
              className="flex items-center justify-center gap-2 mt-2 px-4 py-3 rounded-full bg-gradient-to-r from-red-500 to-rose-500 text-white shadow-md hover:scale-105 transition"
            >
              <LogOut className="w-5 h-5" /> Logout
            </button>
          ) : (
            <button 
              onClick={() => navigate("/login")} 
              className="flex items-center justify-center gap-2 mt-2 px-4 py-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md hover:scale-105 transition"
            >
              <LogIn className="w-5 h-5" /> Login
            </button>
          )}
        </div>
      )}
    </header>
  );
}
