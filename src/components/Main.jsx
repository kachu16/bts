import React from 'react';
import bg from "../assets/background.png";

const Main = () => {
  return (      

    <div id='main-box'>

      <div className='lg:mx-32 lg:my-10 md:mx-24 md:my-20 sm:mx-10 sm:my-10 flex justify-around max-[640px]:flex-wrap-reverse'>

        <div className=' flex flex-col items-start justify-center max-[640px]:mt-5 max-[640px]:mx-5'>
          <h1 className="max-[640px]:text-4xl font-extrabold text-transparent lg:text-5xl md:text-4xl sm:text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Hello, We are BTS
          </h1> 

          <p className='text-white my-6 sm:my-3 max-[640px]:text-sm'>
          BTS (Korean: 방탄소년단, Bangtan Sonyeondan, Bulletproof Boy Scouts), also known as the Bangtan Boys, is a South Korean boy band formed in 2010.
          </p>

          <a href='https://en.wikipedia.org/wiki/BTS'><button class="bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 sm:py-1 mt-2 border border-purple-500 hover:border-transparent rounded mb-10">
          Read More
          </button></a> 
        </div>

        <div>
          <img src={bg} alt="bg-img"/>
        </div>

      </div>

    </div>

    



  )
}

export default Main



