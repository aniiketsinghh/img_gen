import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assests/assets'
import { AppContext } from '../context/AppContext'

const Login = () => {

    const [state, setState]=useState('Login')
    const {setShowLogin}=useContext(AppContext)


    useEffect(()=>{
        document.body.style.overflow='hidden'
        return()=>{
            document.body.style.overflow='unset'}
    },[])
        
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 z-10
    backdrop-blur-sm bg-black/30 flex items-center justify-center">

        <form className="relative bg-white p-10 rounded-xl text-slate-500">
            <h1 className="text-center text-2xl text-neutral-700 font-medium">{state}</h1>
            <p className="text-sm">Welcome back! Please sign in to continue</p>

       {state !== 'Login' && <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
            <img src={assets.user_icon} 
            alt=""/>
            <input className="outline-none text-sm" type="text" placeholder='Username' required/>
        </div>}

             <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
                <img src={assets.email_icon} alt=""/>
                <input className="outline-none text-sm" type="text" placeholder='hello@gmail.com' required/>
            </div>

             <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
                <img src={assets.lock_icon} alt=""/>
                <input className="outline-none text-sm" type="text" placeholder='********' required/>
            </div>

            <p className="text-sm text-blue-600 my-4 cursor-pointer">Forgot password?</p>
        
            <button className="bg-blue-600 w-full text-white py-2 rounded-full">{state === 'Login' ? 'login' : 'create account'}</button>
        {state !== 'Login' ?
            <p className="text-sm mt-4">Already have an account? <span className="text-blue-600 cursor-pointer" onClick={()=>setState('Login')}>Login</span></p>
                :
            <p className="mt-5 text-center">Don't have an account?
                <span className="text-blue-600 cursor-pointer" onClick={()=>setState('Sign up')}>Sign up</span>
            </p>}

            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" className="absolute top-5 right-5 cursor-pointer" />
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" className="absolute top-5 right-5 cursor-pointer" />
        </form>
      
    </div>
  )
}

export default Login
