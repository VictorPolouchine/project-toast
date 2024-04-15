import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';
import { ToastContext } from '../ToastProvider';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};


function Toast({message, variant, ...delegated}) {
  const {dismissToast} = React.useContext(ToastContext)
  const ToastIcon = ICONS_BY_VARIANT[variant]
  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <ToastIcon size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>
          {variant}
        </VisuallyHidden>
        {message}
      </p>
      <button aria-label="Dismiss message" aria-live="off" className={styles.closeButton} onClick={() => {
          dismissToast(delegated.id)
        }}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
