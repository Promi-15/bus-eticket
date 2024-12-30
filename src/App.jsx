import Banner from "./Components/Banner"
import Cupons from "./Components/Cupons"
import Navbar from "./Components/Navbar"
import TicketCalculations from "./Components/TicketCalculations"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
          AOS.init({
            duration: 1000, 
            once: true, 
          });
        }, []);
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <Banner data-aos-delay="5s"/>
      <Cupons data-aos-delay="10s"/>
      <TicketCalculations/>
    </div>
  )
}

export default App