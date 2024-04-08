import React from 'react'
import Biography from '../components/Biography'
import Departments from '../components/Departments'
import MessageForm from '../components/MessageForm'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <div>
      <Hero title="Welcome To HMS-Hospital Managment System Project" imageUrl={"/hero.png"} />
      <Biography/>
      <Departments/>
      <MessageForm />
    </div>
  )
}

export default Home