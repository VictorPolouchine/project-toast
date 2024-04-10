import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toasts, setToasts }) {
  return (
    <ol className={styles.wrapper}>
      {toasts && toasts.map((toast) => {
        const id = crypto.randomUUID()
        return (<li className={styles.toastWrapper} key={id}>
          <Toast variant={toast.variant} message={toast.message} setToasts={setToasts} toasts={toasts} id={toast.id}/>
        </li>)
      })}
    </ol>
  );
}

export default React.memo(ToastShelf);
