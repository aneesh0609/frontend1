import React from 'react'
import Hero from '../components/Hero'
import Biography from '../components/Biography'
import Departments from '../components/Departments'
import Departments1 from '../components/Departments1'
import MessageForm from '../components/MessageForm'
import AboutNew from '../components/AboutNew'
import PetCareLanding from '../components/Hero'

const Home = () => {
  return (
    <>
   <PetCareLanding />
   <Biography imageUrl={"/about.png"} />
   <Departments />
   <Departments1 />
   <AboutNew />
   <MessageForm />

   </>
  )
}

export default Home