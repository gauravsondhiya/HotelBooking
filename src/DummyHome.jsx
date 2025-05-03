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
        <div className="grid sm:grid-cols-3 gap-4 mt-5">
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
      <div className="bg-blue-100 h-[650px] mt-24">
        <div className="w-[90%] border border-black m-auto">
        <div className="text-center mt-28">
            <h1 className="text-3xl font-bold">What Our Guests Say</h1>
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
      <div>

      </div>
      </>
  );
};

export default DummyHome;
