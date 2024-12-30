import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const TicketCalculations = () => {
  const seats = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

   
  const [bookedSeats, setBookedSeats] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState(0);
  console.log(bookedSeats);
  let totalSeats = seats.length * 4;
  console.log(totalSeats);
  let availableSeat = parseInt(totalSeats - bookedSeats.length);
  // 1 -> 10%, 2 -> 15%, 4 -> 20%
  useEffect(() => {
    if (bookedSeats.length === 1) {
      setDiscountedPrice(totalPrice - (totalPrice * .1));
    } else if (bookedSeats.length === 2) {
      setDiscountedPrice(totalPrice - (totalPrice * .15));
    } else if (bookedSeats.length === 4) {
      setDiscountedPrice(totalPrice - (totalPrice * .2));
    } else if (bookedSeats.length === 3){
      setDiscountedPrice(totalPrice);
    } else {
      setDiscountedPrice(totalPrice);
    } 
  }, [bookedSeats, totalPrice]);
  
  const handleBooked = (seatId) => {
    if (bookedSeats.includes(seatId)) {
      setBookedSeats((prev) => prev.filter((s) => s !== seatId));
      setTotalPrice((prev) => prev - 550);
    } else {
      if (bookedSeats.length < 4) {
        setBookedSeats((prev) => [...prev, seatId]);
        setTotalPrice((prev) => prev + 550);
      } else {
        toast("You cannot book more than 4 seats");
      }
    }
  };

 
  // const [totalPrice ,setTotalPrice] = useState(0)
  return (
    <div className="min-h-screen mt-10">
      {/* Head Line and paragraph start */}
      <div className="text-center ">
        <p className="text-4xl font-bold"> Green Ever Paribahan</p>
        <p className="font-light">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore,
          numquam consectetur molestiae hic neque enim iusto inventore est
          ratione ut?
        </p>
      </div>
      {/* Head Line and paragraph start */}
      <div className="flex flex-col lg:flex-row bg-gradient-to-br from-blue-200 to bg-blue-400 lg:w-full rounded-xl px-8 lg:h-72 mt-10">
        {/* info */}
        <div className="  lg:w-2/3">
          <div className="flex justify-between items-center lg:mt-5 ">
            <div className="flex justify-between  gap-5 p-2">
              <img
                src="/public/images/bus-icon.png"
                className="lg:w-8 lg:h-10"
                alt=""
              />
              <div>
                <p className="text-sm font-bold">Green Ever Paribahan</p>
                <p className="text-sm font-extralight">
                  Coach-009-WEB ! AC_Business
                </p>
              </div>
            </div>
            <div className="flex justify-between gap-2">
              <img
                src="/public/images/seat-green.png"
                className="lg:w-8 lg:h-8"
                alt=""
              />
              <p>{availableSeat} seats left</p>
            </div>
          </div>
          <div className="border-2 p-2 space-y-4 rounded-lg  bg-gray-300  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 ">
            <div className="flex justify-between">
              <p>Route</p>
              <p>Dhaka-raj</p>
            </div>
            <hr />
            <div className="flex justify-between">
              <p>Departure Time</p>
              <p>9:00</p>
            </div>
            <hr />
            <div className="flex justify-between">
              <p>Boarding Point - Laxmipur</p>
              <p>Boarding Point - Laxmipur</p>
              <p>Boarding Point - Laxmipur</p>
            </div>
          </div>
        </div>
        {/* info */}
        {/* divider */}
        <div className="hidden lg:block">
          <img
            src="/public/images/cupon-devider.png"
            className="lg:h-72"
            alt=""
          />
        </div>
        {/* divider */}
        {/* ticket fare */}
        <div className="flex flex-col text-center justify-center items-center space-y-3">
          <p className="text-2xl font-bold">
            550<span className="text-xs">tk</span>
          </p>
          <p className="text-xs font-light">Per Seat</p>
        </div>
        {/* ticket fare */}
      </div>

      <div className="flex flex-col lg:flex-row mt-10 gap-2">
        {/* seat */}
        <div className="lg:w-2/3 border-2 px-10 rounded-lg">
          <p className="text-center text-xl font-bold">Select Your Seat</p>
          <div className="flex justify-around mt-5 items-center ">
            <div className="flex gap-3">
              <img src="/public/images/seat-gray.png" alt="" />
              <p>Available</p>
            </div>
            <div className="flex gap-3">
              <img src="/public/images/seat-green-filled.png" alt="" />
              <p>Selected</p>
            </div>
          </div>
          <hr />
          {seats.map((seat) => {
            return (
              <div key={seat} className="grid grid-cols-4 lg:my-10">
                {[...Array(4)].map((_, i) => {
                  //   const seatId = `${seat}${i}`;
                  const isSelected = bookedSeats.includes(`${seat}${i}`);
                  return (
                    <button
                      key={`${seat}${i}`}
                      className={`btn btn-outline lg:w-20 ${
                        isSelected ? "bg-green-400 text-white" : "bg-white"
                      }`}
                      onClick={() => handleBooked(`${seat}${i}`)}
                    >
                      {`${seat}${i}`}
                    </button>
                  );
                })}
              </div>
            );
          })}
        </div>
        {/* seat */}
        {/* calculation */}
        <div className="w-1/3">
          <p>Select Seat :  {bookedSeats.length}</p>
          <table className="table-auto lg:w-full lg:border-collapse border border-gray-300 mt-5">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 text-black px-4  py-2 text-sm">
                  Seat {}
                </th>
                <th className="border border-gray-300 text-black px-4 py-2 text-sm">
                  Class
                </th>
                <th className="border border-gray-300 text-black px-4 py-2 text-sm">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {bookedSeats.map((seatId) => (
                <tr key={seatId}>
                  <td className="border border-gray-300 text-center px-4 py-2 text-sm">
                    {seatId}
                  </td>
                  <td className="border border-gray-300 text-center px-4 py-2 text-sm">
                    AC Business
                  </td>
                  <td className="border border-gray-300 text-center px-4 py-2 text-sm">
                    {550} tk
                  </td>
                  {/* <p></p> */}
                </tr>
              ))}
            </tbody>
          </table>
          <p className={`font-bold text-lg  ${discountedPrice < totalPrice && 'line-through'}`}>
            Total Price : {totalPrice}
          </p>
          <p className={`font-bold text-lg ${discountedPrice === totalPrice && 'hidden'}`}>
            Discounted Price : {discountedPrice}
          </p>
          
            {/* The button to open modal */}
            <a href="#my_modal_8" className="btn w-full bg-gradient-to-tr from-blue-300 to to-blue-400">
              Submit
            </a>

            {/* Put this part before </body> tag */}
            <div className="modal" role="dialog" id="my_modal_8">
              <div className="modal-box flex flex-col text-center items-center">
                <h3 className="text-lg font-bold text-center">Success</h3>
                          {/* <p className="py-4">This modal works with anchor links</p> */}
                          <img src="/public/images/success.png"  alt="" />
                <div className="modal-action">
                  <a href="#" className="btn w-full bg-gradient-to-tr from-blue-300 to to-blue-400">
                    Done
                  </a>
                </div>
              </div>
            </div>
       
        </div>
        {/* calculation */}
        <hr />
      </div>
      <ToastContainer />
    </div>
  );
};

export default TicketCalculations;
