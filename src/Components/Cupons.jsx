import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Cupons = () => {
     useEffect(() => {
            AOS.init({
              duration: 1000, 
              once: true, 
            });
          }, []);
  return (
      <div className="mt-16 text-center space-y-5" data-aos="fade-up" data-aos-duration="3000" >
          <p className="text-3xl font-bold">Best Offers For You</p>
          <div className="flex flex-col lg:flex-row justify-between ">
          <div className="flex bg-gradient-to-br from-orange-300 to bg-yellow-400 px-16 rounded-xl mx-2 my-2">
          <div className="flex flex-col items-center justify-center space-y-3">
              <p className="text-xl font-bold">15% off</p>
              <p className="text-sm font-medium">On your best purchase</p>
              <p className="text-xs font-light">Use by January 2025</p>
              
          </div>
          <div>
              <img src="/public/images/cupon-devider.png" alt="" />
          </div>
          <div className="flex flex-col items-center justify-center space-y-3">
              <p className="text-2xl font-bold">New<span className="text-xs">15</span></p>
              <p className="text-xs font-light">Coupon code</p>
          </div>
         </div>
          <div className="flex bg-gradient-to-br from-lime-100 to bg-lime-300  rounded-xl px-16 mx-2 my-2">
          <div className="flex flex-col items-center justify-center space-y-3 ">
          <p className="text-xl font-bold">20% off</p>
              <p className="text-sm font-medium">On your best purchase</p>
              <p className="text-xs font-light">Use by January 2025</p>
              
              
          </div>
          <div>
              <img src="/public/images/cupon-devider.png" alt="" />
          </div>
          <div className="flex flex-col items-center justify-center space-y-5">
              <p className="text-2xl font-bold">All<span className="text-xs">20</span></p>
              <p className="text-xs font-light">Coupon code</p>
          </div>
              </div>
          <div className="flex  bg-gradient-to-br from-red-200 to bg-red-400  rounded-xl px-16 mx-2 my-2">
          <div className="flex flex-col items-center justify-center space-y-3 ">
          <p className="text-xl font-bold">10% off</p>
              <p className="text-sm font-medium">On your best purchase</p>
              <p className="text-xs font-light">Use by January 2025</p>
              
              
          </div>
          <div>
              <img src="/public/images/cupon-devider.png" alt="" />
          </div>
          <div className="flex flex-col items-center justify-center space-y-5">
              <p className="text-2xl font-bold">All<span className="text-xs">10</span></p>
              <p className="text-xs font-light">Coupon code</p>
          </div>
              </div>
              
         </div>
    </div>
  )
}

export default Cupons