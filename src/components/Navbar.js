import React, { useState } from 'react';
import './Navbar.css';
import image1 from '../images/f1.JPG';
import image2 from '../images/f4.JPG';
import image3 from '../images/f3.JPG';
import image4 from '../images/f5.JPG';
import image5 from '../images/f2.JPG';
import image6 from '../images/f6.JPG';
import image7 from '../images/f1.JPG';

const Navbar = () => {

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h1>SkripsiPack</h1>
        <ul className="navbar-content">
          <li>This website was created for Nurul Fithrah Ramadhani Djafar</li>
        </ul>
      </nav>

  

      {/* Gambar bergerak di bawah navbar */}
      <div className="moving-images-container">
        <div className="moving-images">
          <img src={image1} alt="Moving 1" />
          <img src={image2} alt="Moving 2" />
          <img src={image3} alt="Moving 3" />
          <img src={image4} alt="Moving 4" />
          <img src={image5} alt="Moving 5" />
          <img src={image6} alt="Moving 6" />
          <img src={image7} alt="Moving 7" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
