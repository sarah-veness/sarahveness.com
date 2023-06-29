import React from 'react';

import styles from './Card.module.scss'

export default function Card() {
  return (
    <div className={styles.Card}>
      <a href="google.com">
        <img src='https://placekitten.com/g/500/500' />
        <div className={styles.Overlay}>
          <div className={styles.textContainer}>
            <h2>Card Title</h2>
            <p>Card Description</p>
          </div>
        </div>
      </a>
    </div>
  )
}