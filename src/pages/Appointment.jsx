import React from "react";
import Hero from "../components/Hero";
import AppointmentForm from "../components/AppointmentForm";
import  Departments   from "../components/Department3"

const Appointment = () => {
  return (
    <>
      <Hero
        title={"Appointment"}
        imageUrl={"/app.png"}
      />
       <Departments />
      <AppointmentForm/>
    </>
  );
};

export default Appointment;