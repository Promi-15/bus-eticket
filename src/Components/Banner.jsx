import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Banner = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          once: true, 
        });
      }, []);
  return (
    <div className="relative" data-aos="fade-up" data-aos-delay ="5s">
      <div
        className="hero min-h-screen rounded-lg mt-10"
        style={{
          backgroundImage: `url('/images/banner.png')`,
        }}
      >
        <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-xl">
            <h1 className="mb-5 text-5xl font-bold">Welcome To Travel</h1>
            <p className="mb-5">
              Safe travel is about prioritizing your well-being by staying
              informed, planning ahead, and being prepared for unexpected
              situations. Whether exploring new destinations or commuting
              locally, following safety guidelines ensures a secure and
              enjoyable journey.
            </p>
            <button className="btn btn-outline bg-gradient-to-br from-blue-300 to to-blue-50">
              Buy Tickets
            </button>
          </div>
        </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-10 justify-center items-center lg:absolute  lg:-bottom-10  lg:left-80 hero-content" data-aos="fade-up" data-aos-duration="3000">
              <div className="flex border-b-4 border-green-700 bg-white p-4 rounded-2xl  gap-5">
                  <img src="/public/images/people.png" className="w-12" alt="" />
                  <div>
                      <p className="font-bold text-lg">500+</p>
                      <p className="font-light text-sm">Registered users</p>
                  </div>
              </div>
              <div className="flex items-center border-b-4 p-4 border-green-700 bg-white rounded-2xl gap-5">
                  <img src="/public/images/ticket-cupon.png" className="w-12" alt="" />
                  <div>
                      <p className="font-bold text-lg">1.7 lacks</p>
                      <p className="font-light text-sm">Ticket Sold</p>
                  </div>
              </div>
              <div className="flex items-center border-b-4 p-4 rounded-2xl border-green-700 bg-white gap-5">
                  <img src="/public/images/bus-icon.png" className="w-12" alt="" />
                  <div>
                      <p className="font-bold text-lg">80K+</p>
                      <p className="font-light text-sm">Rental Partners</p>
                  </div>
              </div>
              
          </div>
    </div>
  );
};

export default Banner;
