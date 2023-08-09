import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserSecret, faPenToSquare, faPlus, faDoorOpen } from '@fortawesome/free-solid-svg-icons'

import styles from './admin-nav.module.scss';

export default function AdminNav() {
  const { user } = useAuth0();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className={styles.dropdown}>
      <button onClick={toggleDropdown}>
        <FontAwesomeIcon icon={faUserSecret} size="xs" />
        <span>Hi {user?.given_name}</span>
      </button>
      {
        isOpen ? (
          <ul className={styles.menu}>
            <li className={styles.menuItem}>
              <Link to='/admin'>
                <FontAwesomeIcon icon={faPlus} size="xs" />
                <span>Add Post</span>
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link to='/admin/new'>
                <FontAwesomeIcon icon={faPenToSquare} size="xs" />
                <span>Edit Post</span>
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link to='/admin/new'>
                <FontAwesomeIcon icon={faDoorOpen} size="xs" />
                <span>Log Out</span>
              </Link>
            </li>
          </ul>
        ) : null
      }
    </div>
  );
} 