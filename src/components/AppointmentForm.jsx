import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Calendar, Phone, User, MapPin, HeartHandshake, Stethoscope } from "lucide-react";

export default function AppointmentForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [department, setDepartment] = useState("Pediatrics");
  const [doctorFirstName, setDoctorFirstName] = useState("");
  const [doctorLastName, setDoctorLastName] = useState("");
  const [address, setAddress] = useState("");
  const [hasVisited, setHasVisited] = useState(false);

  const departmentsArray = [
    "general",
    "Orthopedics",
    "Cardiology",
    "Neurology",
    "Oncology",
    "Radiology",
    "Physical Therapy",
    "Dermatology",
    "ENT",
  ];

  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      const { data } = await axios.get(
        "https://new-back-m98d.onrender.com/api/v1/user/doctors",
        { withCredentials: true }
      );
      setDoctors(data.doctors);
    };
    fetchDoctors();
  }, []);

  const handleAppointment = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://new-back-m98d.onrender.com/api/v1/appointment/post",
        {
          firstName,
          lastName,
          email,
          phone,
          dob,
          gender,
          appointment_date: appointmentDate,
          department,
          doctor_firstName: doctorFirstName,
          doctor_lastName: doctorLastName,
          hasVisited: Boolean(hasVisited),
          address,
        },
        { withCredentials: true, headers: { "Content-Type": "application/json" } }
      );

      toast.success(data.message);
      setFirstName(""); setLastName(""); setEmail(""); setPhone("");
      setDob(""); setGender(""); setAppointmentDate(""); setDepartment("");
      setDoctorFirstName(""); setDoctorLastName(""); setHasVisited(false);
      setAddress("");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 py-12 px-4">
      <div className="bg-white max-w-2xl w-full rounded-3xl shadow-xl border border-amber-100 p-8 sm:p-10 relative">

        {/* Heading Badge */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-rose-500 text-white px-6 py-2 rounded-full shadow-lg text-sm font-medium flex items-center gap-2">
          <HeartHandshake className="w-4 h-4" /> Book an Appointment
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600 bg-clip-text text-transparent">
          Your Pet's Health Matters 🐾
        </h2>

        <form onSubmit={handleAppointment} className="space-y-5">
          
          {/* Name Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" placeholder="First Name"
              value={firstName} onChange={e=>setFirstName(e.target.value)}
              className="inputTailwind" />
            <input type="text" placeholder="Last Name"
              value={lastName} onChange={e=>setLastName(e.target.value)}
              className="inputTailwind" />
          </div>

          {/* Email / Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="email" placeholder="Email"
              value={email} onChange={e=>setEmail(e.target.value)}
              className="inputTailwind" />
            <input type="number" placeholder="Phone Number"
              value={phone} onChange={e=>setPhone(e.target.value)}
              className="inputTailwind" />
          </div>

          {/* DOB / Appointment Date */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="date"
              value={dob} onChange={e=>setDob(e.target.value)}
              className="inputTailwind" />
            <input type="date"
              value={appointmentDate} onChange={e=>setAppointmentDate(e.target.value)}
              className="inputTailwind" />
          </div>

          {/* Gender & Department */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <select className="inputTailwind"
              value={gender} onChange={e=>setGender(e.target.value)}>
              <option value="">Select Gender</option>
              <option>Male</option><option>Female</option>
            </select>
            
            <select className="inputTailwind"
              value={department}
              onChange={(e)=>{ setDepartment(e.target.value); setDoctorFirstName(""); setDoctorLastName(""); }}>
              {departmentsArray.map((d,i)=><option key={i}>{d}</option>)}
            </select>
          </div>

          {/* Doctor */}
          <select className="inputTailwind"
            value={`${doctorFirstName} ${doctorLastName}`}
            onChange={e=>{ const [f,l]=e.target.value.split(" "); setDoctorFirstName(f); setDoctorLastName(l); }}
            disabled={!department}>
            <option value="">Select Doctor</option>
            {doctors.filter(d=>d.doctorDepartment===department).map((doc,i)=>(
              <option key={i}>{doc.firstName} {doc.lastName}</option>
            ))}
          </select>

          {/* Address */}
          <textarea rows="4" placeholder="Address"
            className="inputTailwind resize-none"
            value={address} onChange={e=>setAddress(e.target.value)} />

          {/* Checkbox */}
          <label className="flex items-center gap-3 text-sm font-medium text-gray-700">
            <input type="checkbox" checked={hasVisited}
              onChange={e=>setHasVisited(e.target.checked)}
              className="w-5 h-5 rounded border-gray-300" /> visited before?
          </label>

          {/* Submit */}
          <button className="w-full py-3 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white font-bold text-lg hover:shadow-xl transform hover:scale-105 transition">
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
}
