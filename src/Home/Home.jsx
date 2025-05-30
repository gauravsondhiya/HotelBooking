import React from "react";
import DummyHome from "./DummyHome";
const Home = () => {
  return (
    <>
    <div className="bg-[url('https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center h-screen  border-red-800">
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
  <DummyHome/>
    </>
  );
};

export default Home;
