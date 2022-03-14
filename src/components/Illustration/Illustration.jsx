import React from 'react';
import styles from '../Illustration/Illustration.module.css';

const Illustration = (props) => (
  <div className={styles.wrapper}>
    <img class={styles.img} src={props.src} />
  </div>
);

export default Illustration;
