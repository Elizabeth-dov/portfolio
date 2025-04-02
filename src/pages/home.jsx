import React from 'react';
import styles from './Home.module.css'; // Importowanie stylów z CSS Modules

const Home = () => {
  return (
    <div className={styles.home}>  
      <div className={styles.content}>
        <div className={styles.text}>
          <h2>Yelyzaveta Dovhaliuk</h2>
          <p>To jest moje portfolio. Zapraszam do zapoznania się z moimi osiągnięciami i doświadczeniem.</p>
        </div>
        <div className={styles.image}>
          <img src="../../public/photo-1.JPG" alt="Yelyzaveta Dovhaliuk" />
        </div>
      </div>
    </div>
  );
};

export default Home;


