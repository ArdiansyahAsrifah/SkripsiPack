import React from 'react';
import './Copyright.css';

const Copyright = () => {
  return (
    <div className="copyright-container">
      <p>© {new Date().getFullYear()} SkripsiPack. All rights reserved.</p>
      <p>Designed and Developed With ❤️ by ardnsyhsrifh.</p>
    </div>
  );
};

export default Copyright;
