import React from 'react';
import weverse from '../assets/weverse.jpg';
import twitter from "../assets/twitter.png";
import utube from "../assets/utube.png";
import insta from "../assets/insta.png";

const Handles = () => {
  return (
    <div className='min-[714px]:mx-28 mb-20'>

    <h1 className='max-[640px]:text-4xl font-extrabold  lg:text-5xl md:text-4xl sm:text-2xl bg-clip-text text-center my-10 text-purple-900'>BTS Handles</h1>
    <div className="flex flex-wrap justify-around">
        <a href="https://weverse.io/bts/feed">
        <div className="flex flex-col items-center my-3 cursor-pointer">
            <img src={weverse} alt="..." class="handle-img shadow rounded-full max-w-full h-auto align-middle border-none" />
            <span className='mt-3 text-xl text-center font-extrabold dark:'>Weverse</span>
        </div>
        </a>

        <a href="https://twitter.com/BTS_twt">
        <div className="flex flex-col items-center my-3 cursor-pointer">
            <img src={twitter} alt="..." class="handle-img shadow rounded-full max-w-full h-auto align-middle border-none" />
            <span className='mt-3 text-xl text-center font-extrabold dark:'>Twitter</span>

        </div>
        </a>

        <a href="https://www.youtube.com/@BTS/videos">
        <div className="flex flex-col items-center my-3 cursor-pointer">
            <img src={utube} alt="..." class="handle-img shadow rounded-full max-w-full h-auto align-middle border-none" />
            <span className='mt-3 text-xl text-center font-extrabold dark:'>YouTube</span>

        </div>
        </a>

        <a href="https://www.instagram.com/bts.bighitofficial/">
        <div className="flex flex-col items-center my-3 cursor-pointer">
            <img src={insta} alt="..." class="handle-img shadow rounded-full max-w-full h-auto align-middle border-none" />
            <span className='mt-3 text-xl text-center font-extrabold dark:'>Instagram</span>

        </div>
        </a>


    </div>

    </div>
  )
}

export default Handles
