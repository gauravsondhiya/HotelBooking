import React from "react";
import { assets } from "./assets/assets.js";
import { exclusiveOffers } from "./assets/assets.js";
import { testimonials } from "./assets/assets.js";
const DummyHome = () => {
  return (
    <>
    <div className="w-[90%] m-auto  border-black">
      {/* exculsiv offer */}
      
        {/* heading */}
        <div className="sm:flex justify-between ">
          <span>
            <h1 className="font-bold text-3xl">Exculsive Offers</h1>
            <p className="w-[70%] mt-2">
              Take advantage of our limited-time offers and special packages to
              enhance your stay and create unforgettable memories.
            </p>
          </span>
          <span>
            <p className="flex gap-2 mr-3 cursor-pointer ">
              View All Offers{" "}
              <img src={assets.arrowIcon} alt="logo" className="" />{" "}
            </p>
          </span>
        </div>
        {/* images */}
        <div className="grid sm:grid-cols-3 gap-3 mt-5">
          {exclusiveOffers.map((e) => (
            <div
              key={e._id}
              className="w-[373px] h-[225px] bg-cover rounded-xl text-white 
          [&>p]:mt-1 [&>p]:ml-3"
              style={{ backgroundImage: `url(${e.image})` }}
            >
              <button className="h-[15%] bg-white text-black font-bold rounded-xl
               w-[55px] mt-2 ml-3 text-[12px]">
                {e.priceOff}Off
              </button>
              <p className="h-[20%]">{e.title}</p>
              <p className="h-[30%]">{e.description}</p>
              <p className="h-[10%]">Till {e.expiryDate}</p>
              <p className="h-[15%]">View Offer ➡️</p>
            </div>
          ))}
        </div>
    </div>
      
      {/* what our guest say */}
      <div className="bg-blue-100 h-[650px] mt-28">
        <div className="w-[90%] m-auto">

        <div className="text-center border border-blue-100 ">
            <h1 className="text-3xl font-bold mt-20">What Our Guests Say</h1>
            <p className="text-xl mt-5 m-auto w-[50%] ">Discover why discerning travelers choose
               QuickStay for their luxury accommodations around the world.</p>
           </div>


           <div className="grid grid-cols-3 gap-3 m-auto mt-9">
           {
            testimonials.map((e)=>(
              <div className="text-[#374151A1] rounded-2xl border-black bg-white h-[250px] 
              [&>p,img]:ml-4" key={e.id}>
               <div className="flex gap-4 mt-9">
               <img src={e.image} alt="logo" className="h-[70px] w-[70px] rounded-full"/>
                 <div>
                 <p className="font-bold">{e.name}</p>
                 <p>{e.address}</p>
                 </div>
              
               </div>
               <p className="flex">{Array.from({ length: e.rating }).map(() =>(
                <p>⭐</p>
               ))}</p>
               <p className="text-wrap text-[14px] font-semibold">{e.review}</p>
              </div>
            ))
           }

           </div>
        </div>
          
           
      </div>
      {/* black box */}
      <div className="mt-9 border border-green-800  
      bg-[#111827] w-[1079px] h-[400px] m-auto rounded-2xl text-white
      flex flex-col justify-center items-center gap-4 text-center">
  
  <p className="text-4xl">Stay Inspired</p>
  <p className="max-w-[600px]">
    Join our newsletter and be the first to discover new 
    destinations, exclusive offers, and travel inspiration.
  </p>
  
  <div className="flex gap-2">
    <input
      type="text"
      placeholder="Enter your Email"
      className="px-4 py-2 rounded text-white"
    />
    <button className="bg-green-800 text-white px-4 py-2 rounded">Subscribe</button>
  </div>
  
  <p className="max-w-[600px] text-sm">
    By subscribing, you agree to our Privacy Policy and consent to receive updates.
  </p>

</div>

      </>
  );
};

export default DummyHome;
