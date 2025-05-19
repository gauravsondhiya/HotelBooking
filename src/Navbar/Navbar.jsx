import React, { useState } from "react";
import { FiAlignCenter } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { assets } from "../assets/assets";
import { NavLink } from "react-router"
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
            <NavLink to="/">Home</NavLink>
            <NavLink to="/List">Hotels</NavLink>
            <NavLink>Experience</NavLink>
            <NavLink>About</NavLink>
          </ul>
     </div>
       <div >
        <ul className="flex gap-4  text-xl">
          <NavLink className="m-auto"><FaSearch /></NavLink>
          <NavLink><button>Login</button></NavLink>
        </ul> 
       </div>
    </div>
     
      {/*mobile header */}
      <div className="sm:hidden  border border-black p-3 flex justify-around text-2xl">

        <FaHome />
        <button onCNavLinkck={() => setbtn(!btn)}>
           <FiAlignCenter />gggg
        </button>
        <ul
            className={`text-center font-bold text-xl absolute  left-0 h-full w-full
               bg-white shadow-xl transform transition-transform duration-700 ease-in-out ${
              btn ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <button className="text-4xl ml-[80%]" onCNavLinkck={() => setbtn(!btn)}>
            <FiX />
        </button>
            <NavLink>Home</NavLink>
            <NavLink>Hotels</NavLink>
            <NavLink>Experience</NavLink>
            <NavLink>About</NavLink>
            <NavLink>
              <button>Login</button>
            </NavLink>
          </ul>
      </div>
    </>
  );
};

export default Navbar;
