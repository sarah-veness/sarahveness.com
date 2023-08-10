import { Outlet } from 'react-router-dom';

import styles from './admin-layout.module.scss'

export default function AdminLayout() {
  return (
    <div className={styles.Container}>
      <Outlet />
    </div>
  )
}