import React, { useState } from 'react';
import Natureimg1 from '../assets/images/nature_1.webp';
import Natureimg2 from '../assets/images/nature_2.webp';
import Natureimg3 from '../assets/images/nature_3.webp'
import Natureimg4 from '../assets/images/nature_4.avif'
import Natureimg5 from '../assets/images/nature_5.avif'
import Natureimg6 from '../assets/images/nature_6.webp'
import Travelimg1 from '../assets/images/travel_1.avif';
import Travelimg2 from '../assets/images/travel_2.avif';
import Travelimg3 from '../assets/images/travel_3.webp'
import Travelimg4 from '../assets/images/travel_4.avif'
import Travelimg5 from '../assets/images/travel_5.avif'
import Travelimg6 from '../assets/images/travel_6.webp'
import Cityscapesimg1 from '../assets/images/city_1.webp';
import Cityscapesimg2 from '../assets/images/city_2.webp';
import Cityscapesimg3 from '../assets/images/city_3.avif'
import Cityscapesimg4 from '../assets/images/city_4.webp'
import Cityscapesimg5 from '../assets/images/city_5.avif'
import Cityscapesimg6 from '../assets/images/city_6.webp'
import Foodimg1 from '../assets/images/food_1.webp';
import Foodimg2 from '../assets/images/food_2.avif';
import Foodimg3 from '../assets/images/food_3.webp'
import Foodimg4 from '../assets/images/food_4.webp'
import Foodimg5 from '../assets/images/food_5.avif'
import Foodimg6 from '../assets/images/food_6.webp'

const Hero_section = () => {
  const [filter, setFilter] = useState('All'); // State to track the current filter

  // Images categorized by type
  const images = [
    { src: Natureimg1, type: 'Nature' },
    { src: Natureimg2, type: 'Nature' },
    { src: Natureimg3, type: 'Nature' },
    { src: Natureimg4, type: 'Nature' },
    { src: Natureimg5, type: 'Nature' },
    { src: Natureimg6, type: 'Nature' },
    // ========================================
    { src: Travelimg1, type: 'Travel' },
    { src: Travelimg2, type: 'Travel' },
    { src: Travelimg3, type: 'Travel' },
    { src: Travelimg4, type: 'Travel' },
    { src: Travelimg5, type: 'Travel' },
    { src: Travelimg6, type: 'Travel' },
    // ========================================
    { src: Cityscapesimg1, type: 'Cityscapes' },
    { src: Cityscapesimg2, type: 'Cityscapes' },
    { src: Cityscapesimg3, type: 'Cityscapes' },
    { src: Cityscapesimg4, type: 'Cityscapes' },
    { src: Cityscapesimg5, type: 'Cityscapes' },
    { src: Cityscapesimg6, type: 'Cityscapes' },
    // ========================================
    { src: Foodimg1, type: 'Food-Drink' },
    { src: Foodimg2, type: 'Food-Drink' },
    { src: Foodimg3, type: 'Food-Drink' },
    { src: Foodimg4, type: 'Food-Drink' },
    { src: Foodimg5, type: 'Food-Drink' },
    { src: Foodimg6, type: 'Food-Drink' },
  ];

  // Function to handle filter change
  const handleFilterChange = (filterType) => {
    setFilter(filterType);
  };

  return (
    <div className="gallery">
      <ul className="controls">
        <li className={`buttons ${filter === 'All' ? 'active' : ''}`} onClick={() => handleFilterChange('All')}>All</li>
        <li className={`buttons ${filter === 'Nature' ? 'active' : ''}`} onClick={() => handleFilterChange('Nature')}>Nature</li>
        <li className={`buttons ${filter === 'Travel' ? 'active' : ''}`} onClick={() => handleFilterChange('Travel')}>Travel</li>
        <li className={`buttons ${filter === 'Cityscapes' ? 'active' : ''}`} onClick={() => handleFilterChange('Cityscapes')}>Cityscapes</li>
        <li className={`buttons ${filter === 'Food-Drink' ? 'active' : ''}`} onClick={() => handleFilterChange('Food-Drink')}>Food & Drink</li>
      </ul>

      <div className="image-container">
        {images
          .filter((image) => filter === 'All' || image.type === filter) // Filter images based on the selected filter
          .map((image, index) => (
            <a key={index} href={image.src} className={`image ${image.type}`}>
              <img src={image.src} alt={image.type} />
            </a>
          ))}
      </div>
    </div>
  );
};

export default Hero_section;