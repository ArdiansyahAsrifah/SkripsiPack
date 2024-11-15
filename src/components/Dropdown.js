import React, { useState } from 'react';
import './Dropdown.css'; // Pastikan Anda mengimpor file CSS jika ada styling tambahan

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle dropdown
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-button">
        Resources Skripsi
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li><a href="https://www.mendeley.com/" target="_blank" rel="noopener noreferrer">Mendeley</a></li>
          <li><a href="https://www.zotero.org/" target="_blank" rel="noopener noreferrer">Zotero</a></li>
          <li><a href="https://scholar.google.com/" target="_blank" rel="noopener noreferrer">Google Scholar</a></li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
