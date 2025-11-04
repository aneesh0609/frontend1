import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Mail, Phone, User, MessageSquare } from "lucide-react";

const MessageForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleMessage = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://new-back-m98d.onrender.com/api/v1/message/send",
        { firstName, lastName, phone, email, message },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      toast.success(data.message);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Error sending message");
    }
  };

  return (
    <section className="w-full bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 py-16 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto bg-white shadow-xl border border-amber-200 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
        
        {/* Glow background */}
        <div className="absolute -top-10 -right-10 w-48 h-48 bg-rose-200 blur-3xl opacity-20"></div>
        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-amber-200 blur-3xl opacity-20"></div>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
          Report A Dog In Need 🐾
        </h2>

        <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
          📞 Help us protect street animals.  
          If you notice any dog showing symptoms, report immediately — your message can save a life.
        </p>

        <form onSubmit={handleMessage} className="space-y-6">
          
          {/* First & Last Name */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative">
              <User className="absolute left-3 top-3 text-amber-500 w-5 h-5" />
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full pl-10 p-3 border border-amber-200 rounded-xl bg-white focus:border-amber-400 focus:ring-2 focus:ring-amber-300 outline-none"
                required
              />
            </div>

            <div className="relative">
              <User className="absolute left-3 top-3 text-amber-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full pl-10 p-3 border border-amber-200 rounded-xl bg-white focus:border-amber-400 focus:ring-2 focus:ring-amber-300 outline-none"
              />
            </div>
          </div>

          {/* Email & Phone */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-amber-500 w-5 h-5" />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 p-3 border border-amber-200 rounded-xl bg-white focus:border-amber-400 focus:ring-2 focus:ring-amber-300 outline-none"
                required
              />
            </div>

            <div className="relative">
              <Phone className="absolute left-3 top-3 text-amber-500 w-5 h-5" />
              <input
                type="number"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full pl-10 p-3 border border-amber-200 rounded-xl bg-white focus:border-amber-400 focus:ring-2 focus:ring-amber-300 outline-none"
                required
              />
            </div>
          </div>

          {/* Message Box */}
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 text-amber-500 w-5 h-5" />
            <textarea
              rows={6}
              placeholder="Describe the dog's symptoms or situation..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full pl-10 p-3 border border-amber-200 rounded-xl bg-white focus:border-amber-400 focus:ring-2 focus:ring-amber-300 outline-none resize-none"
              required
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white font-semibold py-3 rounded-full hover:scale-[1.02] shadow-lg hover:shadow-xl transition-all"
          >
            Send Report 🚑
          </button>
        </form>
      </div>
    </section>
  );
};

export default MessageForm;
