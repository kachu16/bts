import React from 'react';
import bonvoyage from "../assets/bon_boyage.png";

const Cards = () => {
  return (
    <div className='mb-20 mt-28 min-[898px]:mx-14 min-[768px]:mx-3 sm-:mx-10 mx-6 '>


<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">

  <a href="https://weverse.io/bts/media/category/218">
  <div class="flex flex-col shadow-md rounded-lg overflow-hidden">
    <img class="h-48 w-full object-cover" src="https://i.pinimg.com/736x/c0/de/3f/c0de3f13d4ca173284757cf720b0c668.jpg" alt="Card 1"/>
    <div class="p-4">
      <h2 class="font-bold text-lg mb-2">RUN BTS</h2>
      <p><b>Release Date:</b> 01.08.2015</p>
      <p><b>Episodes:</b> 184</p>
    </div>
  </div>
  </a>

  <a href="https://kissasian.pe/drama/bts-in-the-soop-episode-1">
  <div class="flex flex-col shadow-md rounded-lg overflow-hidden">
    <img class="h-48 w-full object-cover" src="https://i.pinimg.com/736x/a2/ea/2a/a2ea2a1b9ddb65bf1e4485fa26c683d5.jpg" alt="Card 2"/>
    <div class="p-4">
      <h2 class="font-bold text-lg mb-2">IN THE SOOP</h2>
      <p><b>Release Date:</b> 19.08.2020</p>
      <p><b>Episodes:</b> 12</p>
    </div>
  </div>
  </a>

  <a href="https://kissasian.pe/drama/bts-bon-voyage-episode-1">
  <div class="flex flex-col shadow-md rounded-lg overflow-hidden">
    <img class="h-48 w-full object-cover" src={bonvoyage} alt="Card 2"/>
    <div class="p-4">
      <h2 class="font-bold text-lg mb-2">BON VOYAGE</h2>
      <p><b>Release Date:</b> 05.07.2016</p>
      <p><b>Episodes:</b> 32</p>
    </div>
  </div>
  </a>

  

  <a href="https://kissasian.pe/drama/bts-burn-the-stage-episode-1">
  <div class="flex flex-col shadow-md rounded-lg overflow-hidden">
    <img class="h-48 w-full object-cover" src="https://e1.pxfuel.com/desktop-wallpaper/192/622/desktop-wallpaper-pin-on-%E2%99%A1%E2%98%86%E3%80%8Abts%E3%80%8B%E2%98%86%E2%99%A1-burn-the-stage-the-movie-thumbnail.jpg" alt="Card 4"/>
    <div class="p-4">
      <h2 class="font-bold text-lg mb-2">Burn the Stage</h2>
      <p><b>Release Date:</b> 15.11.2018</p>
      <p><b>Episodes:</b> 8</p>

    </div>
  </div>
  </a>
  
</div>

</div>
  )
}

export default Cards
