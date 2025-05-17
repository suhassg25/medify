import './App.css'
import Navbar from "./components/NavBar/NavBar"
import Hero from "./components/Hero/Hero"
import Footer from "./components/Footer/Footer"
import Offers from "./components/OfferSwiper/Offer"
import Specialist from "./components/Specialist/Specialist"
function App() {

  return (
    <>
    <Navbar/>
        <Hero/>
        <Offers/>
        <Specialist/>
    </>
  )
}

export default App
