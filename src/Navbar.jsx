import React, { useState } from "react";
import { FiAlignCenter } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { assets } from "./assets/assets";
const Navbar = () => {
  let [btn, setbtn] = useState(false);
  return (
    <>

    <div className="hidden fixed sm:flex justify-around  w-[100%] bg-white p-4 shadow-xl ">
       <div>
        <img src={assets.logo} alt="logo" className="bg-black"/>
       </div>
       <div>
        <ul className="flex gap-4">
            <li>Home</li>
            <li>Hotels</li>
            <li>Experience</li>
            <li>About</li>
          </ul>
     </div>
       <div >
        <ul className="flex gap-4  text-xl">
          <li className="m-auto"><FaSearch /></li>
          <li><button>Login</button></li>
        </ul> 
       </div>
    </div>
     
      {/*mobile header */}
      <div className="sm:hidden  border border-black p-3 flex justify-around text-2xl">

        <FaHome />
        <button onClick={() => setbtn(!btn)}>
           <FiAlignCenter />
        </button>
        <ul
            className={`text-center font-bold text-xl absolute  left-0 h-full w-full
               bg-white shadow-xl transform transition-transform duration-700 ease-in-out ${
              btn ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <button className="text-4xl ml-[80%]" onClick={() => setbtn(!btn)}>
            <FiX />
        </button>
            <li>Home</li>
            <li>Hotels</li>
            <li>Experience</li>
            <li>About</li>
            <li>
              <button>Login</button>
            </li>
          </ul>
      </div>
    </>
  );
};

export default Navbar;
