import React from 'react';
import styles from '../Searchbar/Searchbar.module.css';
const Searchbar = (props) => (
  <form className={styles.wrapper} onSubmit={props.handleSearch}>
    <input
      className={styles.searchInput}
      type="text"
      placeholder="Film title.."
      value={props.searchStr}
      onInput={props.handleInput}
    />
    <button
      className={styles.button}
      type="submit"
      disabled={!props.searchStr.trim()}
    >
      Search
    </button>
  </form>
);

export default Searchbar;
