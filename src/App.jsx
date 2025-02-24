import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Search from './movie'
import Input from './input'
import { useState } from 'react'
import Nav from './Nav'
import FooterComponent from './Footer'
import Card from './Card'
import Carousel from './Carousel'
import ContactForm from './ContactForm'
import './App.css'

function App() {
  const head={
    textAlign:"center",
    textDecoration:"underLine"
  }  
  const[query, setQuery]=useState("");
    
  return (
    <>
	<Nav/>
  <Carousel/>
    <h1 style={head}>Movie Search</h1>
      <Input onSearch={setQuery} />
      {query === "" ? <div> </div> : <Search get={query} />}
     <div className='card-con'>
     <Card/>
      <Card/>
      <Card/>
      <Card/>
     </div>
     <ContactForm/>
 <FooterComponent/>
       </>
  )
}

export default App