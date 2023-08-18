import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

import styles from './nav.module.scss';
import AdminNav from './AdminNav/AdminNav';

export default function Nav() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className={styles.fixedNav}>
      <div className={styles.Nav}>
        <div>
          <Link to="/">SV</Link>
        </div>
        <div className={styles.mainLinks}>
          <Link to="/writing">WRITING</Link>
          <Link to="/command ">COMMAND</Link>
          <Link to="/contact">CONTACT</Link>
        </div>
        {isAuthenticated ? <AdminNav /> : <div></div>}
      </div>
    </div>
  );
}
