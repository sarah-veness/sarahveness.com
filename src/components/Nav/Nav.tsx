import React from 'react';
import { Link } from 'react-router-dom'

import styles from './Nav.module.scss'

export default function Nav() {
  return (
    <div className={styles.Nav}>
      <div className={styles.Links}>
        <Link to='/writing'>WRITING</Link>
        <Link to='/reading'>READING</Link>
        <Link to='/uses'>USES</Link>
        <Link to='/contact'>CONTACT</Link>
      </div>
    </div>
  );
}