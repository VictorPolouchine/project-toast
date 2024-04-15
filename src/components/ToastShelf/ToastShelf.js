import React from 'react';

import Toast from '../Toast';
import { ToastContext } from '../ToastProvider';
import styles from './ToastShelf.module.css';

function ToastShelf() {
  const {toasts} = React.useContext(ToastContext)
  return (
    <ol role="region" aria-live="polite" aria-label="Notification" className={styles.wrapper}>
      {toasts && toasts.map((toast) => {
        return (<li className={styles.toastWrapper} key={toast.id}>
          <Toast variant={toast.variant} message={toast.message} id={toast.id}/>
        </li>)
      })}
    </ol>
  );
}

export default React.memo(ToastShelf);
