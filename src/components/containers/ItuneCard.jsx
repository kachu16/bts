import React from 'react';
import { CiShare1 } from "react-icons/ci";

const ItuneCard = ({selectedCountry , countryCode}) => {
  return (

    <div className='flex justify-center mt-7'>
    <div>
        <h3 className='text-white text-md font-bold'>{countryCode} iTunes {selectedCountry} <a href="tastea.co.in"><span className='inline-block'><CiShare1/></span></a> </h3>
        
       <div className="max-[390px]:w-[20rem] h-20 w-[24rem] md:w-[34rem] md:h-24 flex items-center mt-2 text-white bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60 border border-gray-400 hover:bg-gray-500">

            <div className='mx-4 font-bold text-lg'>#1</div>

            <div className="w-12 h-12 bg-gray-300 flex-shrink-0">
                <img className="w-full h-full object-cover rounded-full" src="https://upload.wikimedia.org/wikipedia/en/0/04/BTS_-_Permission_to_Dance.png" alt="Song artwork" />
            </div>

            <div className="ml-4">
                <div className="text-md font-bold">
                Permission to Dance
                </div>
                <div className="text-sm text-gray-400">
                BTS 
                </div>
            </div>

        </div>
    </div>
    </div>
  )
}

export default ItuneCard
