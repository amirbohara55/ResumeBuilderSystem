import { Link, useNavigate } from 'react-router-dom' 
import React from 'react'

const Navbar = () => {  
    const user = {
        name: "John Doe",
    }
    const Navigate = useNavigate()    
    const logoutUser = () => {
        Navigate('/')    //Navbar rakheko xu pahila 
    }
  return (
    <div className='shadow bg-white'>
        <nav className='flex items-center justify-between max-w-7xl mx-auto px-4 py-3.5 text-slate-800 transition-all'> 
        <Link to='/'>
            <img src="/logo.svg" alt="logo" className="h-11 w-auto" />
        </Link> 
          <div className="flex items-center gap-4 text-sm"> 
            <p className='max-sm:hidden'>Hii, {user.name}</p> 
            <button onClick={logoutUser} className="bg-sky-600 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded-full">
              Log out
            </button>   
          </div>
        </nav>
        
    </div>
  )
}

export default Navbar 