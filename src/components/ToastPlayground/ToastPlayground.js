import React from 'react';

import Button from '../Button';
import VariantInput from '../VariantInput';
import ToastShelf from '../ToastShelf'


import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState("")
  const [variantSelected, setVariantSelected] = React.useState("notice")
  const [toasts, setToasts] = React.useState([])
  const resetForm = () => {
    setMessage("")
    setVariantSelected("notice")
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {toasts?.length > 0 && <ToastShelf toasts={toasts} setToasts={setToasts} />}

      <form className={styles.controlsWrapper} onSubmit={(event) => {
        event.preventDefault()
        setToasts([...toasts, { id: crypto.randomUUID(),message: message, variant: variantSelected }])
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
              <VariantInput variant={option} variantSelected={variantSelected} setVariantSelected={setVariantSelected} key={index} />
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

export default React.memo(ToastPlayground);
