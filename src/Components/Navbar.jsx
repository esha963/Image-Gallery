import React from 'react'

const Navbar = () => {
  
  return (
    <div className='gallery'>
      <ul className='controls'>
      
        <li className='buttons active' data-filters="All">All</li>
        <li className='buttons' data-filters="Nature">Nature</li>
        <li className='buttons' data-filters="Travel">Travel</li>
        <li className='buttons' data-filters="Cityscapes">Cityscapes</li>
        <li className='buttons' data-filters="Food-Drink">Food & Drink</li>
      
      </ul>
    </div>
  )
}

export default Navbar
