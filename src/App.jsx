import './App.css'
import Navbar from "./components/NavBar/NavBar"
import Hero from "./components/Hero/Hero"
import Footer from "./components/Footer/Footer"
import Offers from "./components/OfferSwiper/Offer"
import Specialist from "./components/Specialist/Specialist"
import MedicalSpecialist from "./components/MedicalSpecialist/MedSpecialist"
import Home from "./pages/Home"

function App() {
   return (
    <>
    <Navbar/>
         <Hero />
         <Home/>
       <Offers/>
        <Specialist/>
        <MedicalSpecialist/>
      <Footer/>
    </>
  )
}

export default App
