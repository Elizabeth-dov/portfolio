import React from 'react';
import styles from './Education.module.css'; // Importowanie stylów z CSS Modules

const Education = () => {
  return (
    <div className={styles.educationContainer}>
      <div className={styles.educationImage}>
        <img className={styles.educationImage} src="../../public/us.svg" alt="Uniwersytet Śląski" />
      </div>
      <h1 className={styles.educationTitle}>Międzynarodowe Studia Polskie  🎓</h1>
      <ul className={styles.educationList}>
        <li className={styles.educationItem}>
          <p><strong className={styles.educationItemStrong}>Stopień naukowy:</strong> Licencjat</p>
        </li>
        <li className={styles.educationItem}>
          <p><strong className={styles.educationItemStrong}>Nazwa uczelni:</strong> Uniwersytet Śląski w Katowicach</p>
        </li>
        <li className={styles.educationItem}>
          <p><strong className={styles.educationItemStrong}>Kierunek studiów:</strong> Międzynarodowe Studia Polskie</p>
        </li>
        <li className={styles.educationItem}>
          <p><strong className={styles.educationItemStrong}>Okres nauki:</strong> 2020-2023</p>
        </li>
        <li className={styles.educationItem}>
          <p><strong className={styles.educationItemStrong}>Specjalizacja:</strong> Kultura i komunikacja w biznesie</p>
        </li>
        <li className={styles.educationItem}>
          <p><strong className={styles.educationItemStrong}>Temat pracy dyplomowej:</strong> "Polityka językowa w Ukrainie. Historia walki o język ukraiński"</p>
        </li>
        <li className={styles.educationItem}>
          <p><strong className={styles.educationItemStrong}>Ogólny wynik studiów:</strong> 4.79</p>
        </li>
        <li className={styles.educationItem}>
          <p><strong className={styles.educationItemStrong}>Ocena na dyplomie:</strong> bardzo dobry</p>
        </li>
        <li className={styles.educationDescription}>
          <h3 className={styles.educationDescriptionTitle}>Międzynarodowe Studia Polskie – Uniwersytet Śląski w Katowicach (2020–2023)</h3>
          <p className={styles.educationDescriptionText}>
            Specjalizując się w komunikacji w biznesie, kierunek ten łączył wiedzę z zakresu języka polskiego, literatury,
            kulturoznawstwa oraz historii, konfrontując ją z kontekstami międzynarodowymi i interkulturowymi. W trakcie studiów 
            zdobyłam umiejętności komunikacji międzykulturowej oraz międzyetnicznej, ucząc się w grupach międzynarodowych, 
            co pozwoliło mi na poszerzenie perspektywy na własną kulturę oraz inne tradycje i wartości. Specjalizacja w komunikacji
            w biznesie dostarczyła mi kompetencji w zakresie skutecznego porozumiewania się w środowisku zawodowym, zarządzania
            komunikacją oraz rozwiązywania konfliktów w międzynarodowych zespołach. Studia te pozwoliły mi na zdobycie solidnej wiedzy
            teoretycznej oraz praktycznych umiejętności, które są przydatne w pracy w instytucjach kulturalnych, firmach międzynarodowych
            oraz w szeroko pojętej komunikacji korporacyjnej.
          </p>
        </li>
      </ul>
      <div className={styles.imageContainer}>
      <li className={styles.educationItem}>
  <p>
    <strong className={styles.educationItemStrong}>Praca licencjacka:</strong> 
    Tutaj możesz zobaczyć moją <strong>pracę licencjacką</strong>
  </p>
  <a href="/public/documents/praca.pdf" target="_blank" rel="noopener noreferrer" className={styles.pdfLink}>
    📄 Zobacz pracę licencjacką (PDF)
  </a>
</li>
        <img src="../../public/dyplom.jpg" alt="Dyplom" />
        <img src="../../public/photo-2.jpg" alt="Zdjęcie" />
      </div>


      <ul className={styles.educationList_2}>
  <h1 className={styles.educationTitle}>Politologia 🎓</h1>
  <li className={styles.educationItem}>
    <p><strong className={styles.educationItemStrong}>Stopień naukowy:</strong> Magister</p>
  </li>
  <li className={styles.educationItem}>
    <p><strong className={styles.educationItemStrong}>Nazwa uczelni:</strong> Uniwersytet Śląski w Katowicach</p>
  </li>
  <li className={styles.educationItem}>
    <p><strong className={styles.educationItemStrong}>Kierunek studiów:</strong> Politologia</p>
  </li>
  <li className={styles.educationItem}>
    <p><strong className={styles.educationItemStrong}>Okres nauki:</strong> 2020–2025 (w trakcie, zakończenie planowane na 2025)</p>
  </li>
  <li className={styles.educationItem}>
    <p><strong className={styles.educationItemStrong}>Specjalizacja:</strong> Doradztwo polityczno-publiczne</p>
  </li>
  <li className={styles.educationItem}>
    <p><strong className={styles.educationItemStrong}>Temat pracy dyplomowej:</strong> "Skuteczność działań antykorupcyjnych w ukraińskim sektorze publicznym od uzyskania niepodległości do współczesności"</p>
  </li>
  <li className={styles.educationItem}>
    <p><strong className={styles.educationItemStrong}>Stypendium:</strong> Otrzymuję <strong>stypendium NAWA</strong> za wysoką średnią ocen wśród cudzoziemców podczas studiów licencjackich.</p>
  </li>
  <li className={styles.educationItem}>
  <p>
    <strong className={styles.educationItemStrong}>Stypendium:</strong> 
    Otrzymuję <strong>stypendium NAWA</strong> za wysoką średnią ocen wśród cudzoziemców podczas studiów licencjackich.
  </p>
  <a href="/public/documents/decision.pdf" target="_blank" rel="noopener noreferrer" className={styles.pdfLink}>
    📄 Zobacz decyzję (PDF)
  </a>
</li>
</ul>
    </div>
  );
};

export default Education;
