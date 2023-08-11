import { Outlet } from 'react-router-dom';

import AdminNav from '../../components/Nav/AdminNav/AdminNav';

import styles from './admin-layout.module.scss';

export default function AdminLayout() {
  return (
    <div className={styles.AdminLayout}>
      <AdminNav />
      <div className={styles.Container}>
        <Outlet />
      </div>
    </div>
  );
}
