import './App.css'
import React from 'react'
import Navbar from "./components/navbar/Navbar.jsx"
import Home from './components/home/home'
import Product from './components/products/product'
import About from './components/aboutus/about'
import Offer from './components/offer/offer'
import Letter from './components/newsletter/newsletter'
import Footer from './components/footer/footer'
import Feedback from './components/feedback/feedback'
let App=()=>{
  return (
<div>
<Navbar/>
<Home/>
<Product/>
<About/>
<Offer/>
<Feedback/>
<Letter/>
<Footer/>
</div> 
  )
  }

export default App
