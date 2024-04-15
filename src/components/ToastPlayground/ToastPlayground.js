import React from 'react';

import Button from '../Button';
import VariantInput from '../VariantInput';
import ToastShelf from '../ToastShelf'


import styles from './ToastPlayground.module.css';
import { ToastContext } from '../ToastProvider';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState("");
  const [variantSelected, setVariantSelected] = React.useState("notice")
  const resetForm = () => {
    setMessage("")
    setVariantSelected("notice")
  }
  const { createToast } = React.useContext(ToastContext)

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf/>

      <form className={styles.controlsWrapper} onSubmit={(event) => {
        event.preventDefault()
        createToast(message, variantSelected)
        resetForm()
      }}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" className={styles.messageInput} value={message} onChange={({ target }) => { setMessage(target.value) }} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >


            {/* TODO Other Variant radio buttons here */}
            {VARIANT_OPTIONS.map((option, index) => (
              <VariantInput variantSelected={variantSelected} setVariantSelected={setVariantSelected} variant={option} key={index} />
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button type="submit">Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
