import React, { useState } from 'react';
import { FaSpotify, FaYoutube, FaApple } from "react-icons/fa";
import { RiArrowDownSLine } from "react-icons/ri";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";


const Navbar = () => {
  const [toggleMenu , setToggleMenu] = useState(false);

  const menu = [
    {name : "Spotify", icon : <FaSpotify className='inline mr-2 text-xl' />, icontwo: <RiArrowDownSLine className='text-2xl'/>, link:'/'},
    {name : "Apple Music", icon : <FaApple className='inline mr-2 text-2xl'/>, link:'/'},
    {name : "YouTube", icon : <FaYoutube className='inline mr-2 text-2xl'/>, link:'/'},
    {name : "iTunes", icon : <FaApple className='inline mr-2 text-2xl'/>, link:'/'},
  ]
  return (
    <nav className='p-5 shadow' style={{backgroundColor: 'rgb(31 41 55)'}}>

      <div className='md:flex items-center justify-around'>
        
        <div>
            <img className='h-10 inline cursor-pointer' src='https://btsproofinfo.carrd.co/assets/images/image01.png?v=3d057768' alt='logo'/>    
        </div>

        <div>
          <ul className={`md:flex md:items-center max-[768px]:mt-3 ${!toggleMenu && 'max-[768px]:hidden'} max-[768px]:px-3 max-[768px]:py-1 max-[768px]:rounded-lg max-[768px]:bg-[#525253] `}>
           
            {
              menu.map( (item) => (
                <li className='text-white font-semibold lg:px-10 md:px-6 max-[768px]:my-5'>
                  <a href={item.link} className='hover:text-purple-500 flex items-center'>
                    {item.icon}{item.name}
                    {
                      item.icontwo && item.icontwo
                    }
                  </a>
                </li>
              ) )
            }
          </ul>
        </div>

        {
          toggleMenu ? 
            <RxCross2 onClick={()=>setToggleMenu(false)} className='md:hidden absolute right-5 top-7 text-2xl text-white cursor-pointer'/> 
          : <AiOutlineMenu onClick={()=>setToggleMenu(true)} className='md:hidden absolute right-5 top-7 text-2xl text-white cursor-pointer'/>
        }
        
        


      </div>     

        

    </nav>
  )
}

export default Navbar
