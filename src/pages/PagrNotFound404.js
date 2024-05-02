import React from 'react'
import Logo from "../assets/logo.png";
import { useNavigate } from 'react-router-dom';

export const PagrNotFound404 = () => {
    const nav = useNavigate();
  return (
    <main className="flex flex-col items-center justify-center h-screen">
        <div className='max-w-xs m-auto mt-12'>
        <img className='' src={Logo} alt="" />
        </div>
        <p className='text-center mt-3 font-bold text-6xl dark:text-slate-200'>Oops, Page Not Found ...</p>
        <button className='m-auto bg-blue-600 hover:bg-blue-700 rounded-lg text-xl p-2 text-slate-200' onClick={() => nav("/")}>Redirect to Home Page</button>
    </main>
  )
}
