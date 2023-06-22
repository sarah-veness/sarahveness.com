import React from 'react';
import styles from './App.module.scss';
import { Nav, CardContainer } from '../components';

function App() {
  return (
    <>
      <Nav />
      <div className={styles.App}>
        <CardContainer />
      </div>
    </>
  );
}

export default App;
