import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import './index.css'
import Hero from './Components/Hero/Hero.jsx'
import Programs from './Components/Programs/Programs.jsx'
import Title from './Components/Title/Title.jsx'
import About from './Components/About/About.jsx'
import Campus from './Components/Campus/Campus.jsx'
import Testimonials from './Components/Testimonials/Testimonials.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Footer from './Components/Footer/Footer.jsx'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />

      <div className="container">
        {/* Programs Section */}
        <Title subTitle="Our Programs" title="What We Offer" />
        <Programs />

        {/* About Section */}
        <Title subTitle="About Us" title="Who We Are" />
        <About />

        {/* Campus Section */}
        <Title subTitle="Gallery" title="Campus Photos" />
        <Campus />

        {/* Testimonials Section */}
        <Title subTitle="Testimonials" title="What Our Students Say" />
        <Testimonials />
        <Title subTitle="Contact Us" title="Get in Touch" />
        <Contact />
        <Footer /> {/* Added Footer component */}
        
      </div>
    </div>
  )
}

export default App
