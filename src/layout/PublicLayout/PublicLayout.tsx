import { Outlet } from 'react-router-dom';
import { Nav } from '../../components';

import styles from './public-layout.module.scss';

export default function PublicLayout() {
  return (
    <div className={styles.PublicLayout}>
      <Nav />
      <div className={styles.Container}>
        <Outlet />
      </div>
    </div>
  );
}
