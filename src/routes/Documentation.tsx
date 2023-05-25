import React from 'react';
import styles from './index.module.css'

const Documentation = () => {
  const openDocumentation = () => {
    window.open('https://pokeapi.co/docs/v2');
  };

  return (
    <div className={styles.container_doc}>
      <div className={styles.div_textdoc}>
        <h1>Access to the PokeApi</h1>
      </div>
      <div className={styles.div_btndoc}>
        <button className={styles.btn_documentation} onClick={openDocumentation}>PokeApi</button>
      </div>
      
    </div>
  );
};

export default Documentation;