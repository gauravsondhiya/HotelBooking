import React from "react";
import heroimage from "./assets/heroImage.png";
import Destination from "./Destination";
const Home = () => {
  return (
    <>
    <div className="bg-[url('./assets/heroImage.png')] bg-cover bg-center h-screen  border-red-800">
      <div
        className="m-auto text-white  h-[100%] w-[90%] flex flex-col content-center justify-center
         border-red-800 [&>p,h1]:mt-4"
      >
        <p className="text-cyan-300 shadow-2xl text-xl font-cover w-[25%] rounded-xl text-center h-[35px]">
          The Ultimate Hotels Experience
        </p>
        <h1 className="font-bold text-4xl">
          Disover Your Perfect Getaway Destinaion
        </h1>
        <p className="w-[50%]">
          Unparalleled Luxury and comfort await at the world's Exculsive hotel
          and resorts. Start your Journey today.
        </p>
        <div
          className="bg-white sm:h-[80px] w-[80%] mt-4     
        rounded-2xl text-black grid sm:grid-cols-12 
        [&>div]:m-auto [&>div>input]:mt-2
        font-semibold text-center"
        >
          <div className="col-span-3">
            <p>Destination</p>
            <input type="text" placeholder="Type here" />
          </div>
          <div className="col-span-2">
            <p>Check In</p>
            <input type="date" placeholder="Type here" />
          </div>
          <div className="col-span-2">
            <p>Check Out</p>
            <input type="date" placeholder="Type here" />
          </div>
          <div className="col-span-3">
            <p>Guest</p>
            <input type="text" placeholder="Type here" />
          </div>
          <div className="col-span-2">
            <button className="h-[40px] w-[100px] rounded-2xl bg-amber-500">Search</button>
          </div>
        </div>
      </div>
    </div>
  <Destination/>
    </>
  );
};

export default Home;
