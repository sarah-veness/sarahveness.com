import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserSecret,
  faPlus,
  faDoorOpen,
  faGaugeHigh,
} from '@fortawesome/free-solid-svg-icons';

import styles from './admin-nav.module.scss';

export default function AdminNav() {
  const { user } = useAuth0();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdown}>
      <button onClick={toggleDropdown}>
        <FontAwesomeIcon icon={faUserSecret} size="xs" />
        <span>Hi {user?.given_name}</span>
      </button>
      {isOpen ? (
        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <Link to="/admin">
              <FontAwesomeIcon icon={faGaugeHigh} size="xs" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/admin/new-post">
              <FontAwesomeIcon icon={faPlus} size="xs" />
              <span>Add Post</span>
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/">
              <FontAwesomeIcon icon={faPlus} size="xs" />
              <span>Public Side</span>
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/auth">
              <FontAwesomeIcon icon={faDoorOpen} size="xs" />
              <span>Log Out</span>
            </Link>
          </li>
        </ul>
      ) : null}
    </div>
  );
}
