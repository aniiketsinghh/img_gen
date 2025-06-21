import { useState } from "react"
import { Link,useNavigate } from "react-router"
import { useContext } from "react"
import { AppContext } from "../context/AppContext"

import {assets} from '../assests/assets'

const Navbar = () => {
    const Navigate=useNavigate()

    const {user,setShowLogin}=useContext(AppContext)
  return (
    <div className="flex items-center justify-between py-4">
      <Link to="/">
      <img src={assets.logo} alt="logo" className="w-30 sm:w-34" />
      </Link>

      <div >
        {user?
       <div className="flex items-center gap-4">
  <button onClick={()=>Navigate("/buy-credit")} className="flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full
  hover:scale-105 transition-all duration-700">
    <img src={assets.credit_star} alt="credit" className="w-6" />
    <p className="text-xs sm:text-sm font-medium text-gray-600">Credits left: 50</p>
  </button>

  <p className="text-gray-600 max-sm:hidden pl-4">Hi, SRZ</p>

  <div className="relative group">
    <img src={assets.profile_icon} alt="Profile" className="w-10 drop-shadow cursor-pointer" />

    {/* Logout option shown on hover */}
    <div className="absolute hidden group-hover:block top-full right-0 bg-white shadow-md z-10 text-black rounded px-4 py-2">
      <ul className="list-none m-0 px-2 bg-white rounded-md border text-sm">
        <li className="cursor-pointer hover:text-red-600 py-1 px-2 pr-10">Logout</li>
      </ul>
    </div>
  </div>
</div>
        :
        <div className="flex items-center gap-2 sm:gap-4">
            <p onClick={()=>Navigate("/buy-credit")}
            className="cursor-pointer">pricing</p>
            <Link to="/login">
            <button onClick={()=>setShowLogin("/buy-credit")} className="bg-zinc-800 text-white px-7 py-2
            sm:px-10 text-sm rounded-full">Login</button>
            </Link>
        </div>
}
      </div>
    </div>
  )
}

export default Navbar
