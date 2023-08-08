import { useState } from 'react'
import { Link } from 'react-router-dom';

import './admin-nav.module.scss';

export default function AdminNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown}>Hi Sarah</button>
      {
        isOpen ? (
          <ul className="menu">
            <li className="menu-item">
              <Link to='/admin'>Admin</Link>
            </li>
          </ul>
        ) : null
      }
    </div>
  );
}