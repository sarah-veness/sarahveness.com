import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom'

import styles from './Nav.module.scss'
import AdminNav from './AdminNav/AdminNav';

export default function Nav() {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <div className={styles.Nav}>
        <div className={styles.Links}>
          <Link to='/writing'>WRITING</Link>
          <Link to='/reading'>READING</Link>
          <Link to='/uses'>USES</Link>
          <Link to='/contact'>CONTACT</Link>
        </div>
      </div>
      {isAuthenticated ? <AdminNav /> : null}
    </>
  );
}