import React, { useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown}>Resources Skripsi</button>
      {isOpen && (
        <ul>
          <li><a href="https://www.mendeley.com/" target="_blank" rel="noopener noreferrer">Mendeley</a></li>
          <li><a href="https://www.zotero.org/" target="_blank" rel="noopener noreferrer">Zotero</a></li>
          <li><a href="https://scholar.google.com/" target="_blank" rel="noopener noreferrer">Google Scholar</a></li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
