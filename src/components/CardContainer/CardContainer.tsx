import React from 'react';
import { Card } from '..'

import styles from './CardContainer.module.scss';

export default function CardContainer() {
  return (
    <div className={styles.CardContainer}>
      {Array(10).fill(0).map((_, i) => <Card key={i} />)}
    </div>
  )
}
