import React from 'react';

import styles from './Nav.module.scss'

export default function Nav() {
  return (
    <div className={styles.Nav}>
      <div className={styles.Links}>
        <a href='/about'>SARAH</a>
        <a href='/read'>READING</a>
        <a href='/uses'>USES</a>
        <a href='/contact'>CONTACT</a>
      </div>
    </div>
  );
}