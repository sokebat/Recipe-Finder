import React from 'react';

function Navbar() {
  return (
    <div className='main lg:flex md:flex flex-wrap justify-between items-center 
     px-4 bg-[#F8EFBA] py-4 shadow-md'>
        <div className="left">
            <div className="logo font-bold text-2xl text-black text-center">
            Food App</div>
        </div>        
        <div className="right">
            <ul className='flex space-x-4 text-black justify-center'>
                <li className='cursor-pointer hover:text-gray-700 transition duration-300'>Home</li>
                <li className='cursor-pointer hover:text-gray-700 transition duration-300'>About</li>
                <li className='cursor-pointer hover:text-gray-700 transition duration-300'>Contact</li>
                <li className='cursor-pointer hover:text-gray-700 transition duration-300'>Services</li>
            </ul>
        </div>
    </div>
  );
}

export default Navbar;
