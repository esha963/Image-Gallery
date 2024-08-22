import React from 'react'
import Natureimg1 from '../assets/images/nature_1.webp'
import Natureimg2 from '../assets/images/nature_2.webp'
import Natureimg3 from '../assets/images/nature_3.webp'
import Natureimg4 from '../assets/images/nature_4.avif'
import Natureimg5 from '../assets/images/nature_5.avif'
import Natureimg6 from '../assets/images/nature_6.webp'
import Travelimg1 from '../assets/images/travel_1.avif'
import Travelimg2 from '../assets/images/travel_2.avif'
import Travelimg3 from '../assets/images/travel_3.webp'
import Travelimg4 from '../assets/images/travel_4.avif'
import Travelimg5 from '../assets/images/travel_5.avif'
import Travelimg6 from '../assets/images/travel_6.webp'
import Cityscapesimg1 from '../assets/images/city_1.webp'
import Cityscapesimg2 from '../assets/images/city_2.webp'
import Cityscapesimg3 from '../assets/images/city_3.avif'
import Cityscapesimg4 from '../assets/images/city_4.webp'
import Cityscapesimg5 from '../assets/images/city_5.avif'
import Cityscapesimg6 from '../assets/images/city_6.webp'
import Foodimg1 from '../assets/images/food_1.webp'
import Foodimg2 from '../assets/images/food_2.avif'
import Foodimg3 from '../assets/images/food_3.webp'
import Foodimg4 from '../assets/images/food_4.webp'
import Foodimg5 from '../assets/images/food_5.avif'
import Foodimg6 from '../assets/images/food_6.webp'
const Hero_section = () => {
  return (
    <div className='image-container'>
        {/* Nature images */}
      <a href={Natureimg1} className='image Nature'>
        <img src={Natureimg1} alt="" />
      </a>
      <a href={Natureimg2} className='image Nature'>
        <img src={Natureimg2} alt="" />
      </a>
      <a href={Natureimg3} className='image Nature'>
        <img src={Natureimg3} alt="" />
      </a>
      <a href={Natureimg4} className='image Nature'>
        <img src={Natureimg4} alt="" />
      </a>
      <a href={Natureimg5} className='image Nature'>
        <img src={Natureimg5} alt="" />
      </a>
      <a href={Natureimg6} className='image Nature'>
        <img src={Natureimg6} alt="" />
      </a>
      {/* Travel images */}
      <a href={Travelimg1} className='image Travel'>
        <img src={Travelimg1} alt="" />
      </a>
      <a href={Travelimg2} className='image Travel'>
        <img src={Travelimg2} alt="" />
      </a>
      <a href={Travelimg3} className='image Travel'>
        <img src={Travelimg3} alt="" />
      </a>
      <a href={Travelimg4} className='image Travel'>
        <img src={Travelimg4} alt="" />
      </a>
      <a href={Travelimg5} className='image Travel'>
        <img src={Travelimg5} alt="" />
      </a>
      <a href={Travelimg6} className='image Travel'>
        <img src={Travelimg6} alt="" />
      </a>
      {/* Cityscapes images */}
      <a href={Cityscapesimg1} className='image Cityscapes'>
        <img src={Cityscapesimg1} alt="" />
      </a>
      <a href={Cityscapesimg2} className='image Cityscapes'>
        <img src={Cityscapesimg2} alt="" />
      </a>
      <a href={Cityscapesimg3} className='image Cityscapes'>
        <img src={Cityscapesimg3} alt="" />
      </a>
      <a href={Cityscapesimg4} className='image Cityscapes'>
        <img src={Cityscapesimg4} alt="" />
      </a>
      <a href={Cityscapesimg5} className='image Cityscapes'>
        <img src={Cityscapesimg5} alt="" />
      </a>
      <a href={Cityscapesimg6} className='image Cityscapes'>
        <img src={Cityscapesimg6} alt="" />
      </a>
      {/* Food and Drink Images */}
      <a href={Foodimg1} className='image Food-Drink'>
        <img src={Foodimg1} alt="" />
      </a>
      <a href={Foodimg2} className='image Food-Drink'>
        <img src={Foodimg2} alt="" />
      </a>
      <a href={Foodimg3} className='image Food-Drink'>
        <img src={Foodimg3} alt="" />
      </a>
      <a href={Foodimg4} className='image Food-Drink'>
        <img src={Foodimg4} alt="" />
      </a>
      <a href={Foodimg5} className='image Food-Drink'>
        <img src={Foodimg5} alt="" />
      </a>
      <a href={Foodimg6} className='image Food-Drink'>
        <img src={Foodimg6} alt="" />
      </a>
      
    </div>
  )
}

export default Hero_section
