import React from "react";
import { roomsDummyData } from "../assets/assets.js";
import { facilityIcons } from "../assets/assets.js";
const List = () => {
  return (
    <div className="w-[90%] m-auto border-black">
      {/* Heading */}
      <div className="">
        <h1 className="text-3xl font-bold mt-8">Hotel Rooms</h1>
        <p>
          Take advantage of our limited-time offers and special packages to
          enhance your stay and create unforgettable memories.
        </p>
      </div>
      {/* box divide */}
      <div className="grid sm:grid-cols-12 gap-2">
        {/* list */}
        <div className=" border-green-700 sm:col-span-9">
          {roomsDummyData.map((e) => (
            <>
           
            <div className="flex  border-red-500 gap-6 mt-5" id={e._id}>
              <div>
                <img
                  className="h-[200px]  rounded-3xl "
                  src={e.images[0]}
                  alt=""
                />
              </div>
              <div>
                <h1 className="text-2xl mt-3 font-medium">{e.hotelname}</h1>
                <p className="mt-2">⭐⭐⭐⭐⭐ 200+ review</p>
                <p>address</p>
                <div className="flex gap-3 mt-5 [&>div]:flex  [&>div]:gap-3">
                  <div>
                    <img src={facilityIcons.FreeWiFi} alt="" />
                    <p>{e.amenities[0]}</p>
                  </div>
                  <div>
                    <img src={facilityIcons.RoomService} alt="" />
                    <p>{e.amenities[1]}</p>
                  </div>
                  <div>
                    <img src={facilityIcons.PoolAccess} alt="" />
                    <p>{e.amenities[2]}</p>
                  </div>
                </div>

                <p className="mt-4 text-xl font-semibold">
                  Rs. {e.pricePerNight}/Day
                </p>
             
              </div>
              
            </div>
            <hr className=" mt-2 w-[70%] text-blue-100"/>
             </>
          ))}
        </div>
        

        {/* filter box */}
        <div className="sm:col-span-3 border border-blue-100 p-4 h-[60%]"> 
          <div className="flex justify-between text-2xl">
            <p>Filters</p>
            <p>Clear</p>
          </div>
          <hr />
          <p className="mt-3.5 font-bold text-xl">Popular Filters</p>
          <ul className="[&>li]:p-1 [&>li]:text-gray-500 ">
            <li>
              {" "}
              <input type="checkbox" placeholder="" />
              <label>Single Room</label>
            </li>
            <li>
              {" "}
              <input type="checkbox" placeholder="" />
              <label>Double Bed</label>
            </li>
            <li>
              <input type="checkbox" placeholder="" />
              <label>Family Suits</label>
            </li>
            <li>
              {" "}
              <input type="checkbox" placeholder="" />
              <label>Luxury Rooms</label>
            </li>
          </ul>
          <p className="mt-3.5 font-bold text-xl">Price</p>
          <ul className="[&>li]:p-1 [&>li]:text-gray-500  ">
            <li>
              <input type="checkbox" placeholder="" />
              <label>Rs.2500 to Rs.5000</label>
            </li>
            <li>
              <input type="checkbox" placeholder="" />
              <label>Rs.5000 to Rs.8000</label>
            </li>
            <li>
              <input type="checkbox" placeholder="" />
              <label>Rs.8000 to Rs.15000</label>
            </li>
          </ul>
          <p className="mt-3.5 font-bold text-xl">Sort By</p>
            <ul className="[&>li]:p-1 [&>li]:text-gray-500 ">
              <li>
                <input type="checkbox" placeholder="" />
              <label>Price Low to High</label>
              </li>
              <li>
                <input type="checkbox" placeholder="" />
              <label>Price High to Low</label>
              </li>
              <li>
                <input type="checkbox" placeholder="" />
              <label>Newest First</label>
              </li>
            </ul>
        
        </div>
      </div>
    </div>
  );
};

export default List;
