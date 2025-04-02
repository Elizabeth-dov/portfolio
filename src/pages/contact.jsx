import React from 'react';
import styles from './Contact.module.css'; // Załaduj style

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
   
      <p>Skontaktuj się ze mną za pośrednictwem poniższych danych:</p>
      
      <div className={styles.contactInfo}>
        <p className={styles.email}><strong>E-mail:</strong> lizadovgalyuk.com@gmail.com</p>
        <p className={styles.phone}><strong>Numer telefonu:</strong> +48 731252297</p>
        <p className={styles.linkedin}><strong>Linkedin:</strong> <a href="https://www.linkedin.com/in/yelyzaveta-dovgalyuk-7b8ab62b7/details/skills/" target="_blank" rel="noopener noreferrer">Yelyzaveta Dovgalyuk</a></p>
      </div>
    </div>
  );
};

export default Contact;
