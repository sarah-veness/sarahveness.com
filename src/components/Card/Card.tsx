import React from 'react';

import styles from './Card.module.scss'

export default function Card() {
  return (
    <div className={styles.Card}>
      <img src='https://placekitten.com/g/500/500' />
    </div>
  )
}