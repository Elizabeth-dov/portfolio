import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import styles from './About.module.css'; 
import { motion } from 'framer-motion';

const About = () => {
  const [showHobby, setShowHobby] = useState(false);

  const toggleHobby = () => {
    setShowHobby((prevShowHobby) => !prevShowHobby);
  };

  return (
    <div>
      <ul className={styles.aboutList}>
        <li className={styles.left}>
          <h2 className={styles.title}>Kim jestem?</h2>
          <div>
            <img className={styles.circularImage} src="../../public/photo-1.JPG" alt="Yelyzaveta Dovhaliuk" />
          </div>
          <p>Nazywam się Yelyzaveta Dovhaliuk</p>
          <p>Mam 23 lata i pochodzę z Ukrainy.</p>
        </li>
        <li className={styles.left}>
          <p>
            Już od 6 lat mieszkam w Katowicach. Jestem studentką politologii na Uniwersytecie Śląskim w Katowicach.
            Pasjonuję się analizą polityczną i badaniami społecznymi.
          </p>
        </li>
      </ul>

     <div className={styles.aboutContainer}>
     <div className={styles.aboutSkills}>
  <h1>Moje umiejętności</h1>

  <h2 className={styles.skillsCategory}>Umiejętności analityczne i badawcze:</h2>
  <ul className={styles.skillsList}>
    <li><p>Zdolność do analizowania sytuacji politycznych, trendów i procesów w polityce krajowej i międzynarodowej.</p></li>
    <li><p>Umiejętność przeprowadzania badań ankietowych, wywiadów, analizowania danych statystycznych i ich interpretowania.</p></li>
    <li><p>Zdolność do tworzenia profesjonalnych artykułów, esejów, prac magisterskich.</p></li>
    <li><p>Rozumienie różnic kulturowych w polityce i umiejętność efektywnego komunikowania się z przedstawicielami różnych grup społecznych.</p></li>
    <li><p>Umiejętność krytycznej analizy mediów, ich wpływu na politykę i społeczeństwo.</p></li>
  </ul>


  <h2 className={styles.skillsCategory}>Umiejętności interpersonalne:</h2>
  <ul className={styles.skillsList}>
    <li><p>Umiejętność współpracy z innymi w grupie, negocjowanie i kompromisowanie.</p></li>
    <li><p>Umiejętność pracy pod presją czasu.</p></li>
    <li><p>Umiejętność efektywnego komunikowania się w różnych kontekstach politycznych i społecznych.</p></li>
    <li><p>Szybka adaptacja do nowych warunków.</p></li>
  </ul>

  <h2 className={styles.skillsCategory}>Umiejętności techniczne:</h2>
  <ul className={styles.skillsList}>
    <li><p>Canva</p></li>
    <li><p>Figma</p></li>
    <li><p>Microsoft Office (Word, Excel, PowerPoint)</p></li>
    
  </ul>
</div>

  <div className={styles.aboutLanguages}>
    <h1>Języki:</h1>
    <ul className={styles.languagesList}>
      <li><p>Ukraiński – C2</p></li>
      <li><p>Polski – C1</p></li>
      <li><p>Rosyjski – C1</p></li>
      <li><p>Angielski – B2</p></li>
      <li><p>Hiszpański – A1</p></li>
    
      
     
     
    </ul>
  </div>
</div>


      {/* PRZYCISK DO POKAZYWANIA / UKRYWANIA HOBBY */}
      <div className={styles.buttonContainer}>
        <button className={styles.hobbyButton} onClick={toggleHobby}>
          {showHobby ? 'Ukryj hobby' : 'Moje hobby'}
        </button>
      </div>

      {/* SEKCJA HOBBY Z ANIMACJĄ */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={showHobby ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={styles.hobbySection}
      >
        {showHobby && (
          <>
            {/* Tytuł ogólny dla hobby */}
            <h2 className={styles.titleHobby}>Moje Hobby</h2>

            {/* Sekcja o Programowaniu */}
            <h3 className={styles.title}> 💻 Programowanie  💻</h3>
            <p className={styles.mountain}>Uczenie się programowania to dla mnie pasja, która łączy wyzwania logiczne z twórczą satysfakcją. 
            Lubię odkrywać nowe języki programowania i narzędzia, tworzyć aplikacje, które rozwiązywują rzeczywiste problemy. 
            Każdy nowy projekt to okazja, aby nauczyć się czegoś nowego i poszerzyć swoje umiejętności.</p>

            {/* Zdjęcie, które przekierowuje do strony portfolio */}
            <a href="https://elizabeth-dov.github.io/Project_6-my.portfolio/index.html" target="_blank" rel="noopener noreferrer">
              <img className={styles.hobbyImageClickable} src="../../public/portfolio.png" alt="Programowanie" />
            </a>
            <p className={styles.mountain}>Kliknij na zdjęcie, aby zobaczyć moje projekty programistyczne!</p>
            <div className={styles.hobbyImagesContainer}>
  <img className={styles.hobbyImageIt} src="../../public/swift.png" alt="Swift" />
  <img className={styles.hobbyImageIt} src="../../public/harvard.png" alt="Harvard" />
</div>
              <p className={styles.mountain}>Dodatkowo, jestem początkującą deweloperką iOS, która od kilku miesięcy intensywnie 
                uczy się programowania. Skupiłam się na nauce języka Swift oraz SwiftUI, aby tworzyć intuicyjne i przyjazne dla
                 użytkownika aplikacje. Moją główną motywacją 
                jest zdobycie praktycznego doświadczenia oraz pogłębienie wiedzy na temat rozwoju aplikacji mobilnych.</p>

            {/* Gruba linia oddzielająca sekcję o programowaniu */}
            <hr className={styles.separator} />

            {/* Sekcja o Górach */}
            <h3 className={styles.title}>🏔️ Góry 🏔️ </h3>
            <p className={styles.mountain}>Góry to moje drugie życie. Uwielbiam je zarówno za spokój, który można 
              tam znaleźć, jak i za wyzwania, które stawiają przed każdym wędrowcem. 
              Każda wyprawa to dla mnie nie tylko okazja do odpoczynku, ale również czas
               na refleksję i budowanie silnej więzi z naturą.

            Wędrówki po górach to dla mnie nie tylko forma aktywności fizycznej, ale także sposób na 
            odkrywanie nowych miejsc i kultur. Z każdej podróży wracam z niezliczoną ilością wspomnień
             i zdjęć, które dokumentują niepowtarzalne widoki oraz spotkania z ludźmi z różnych zakątków świata. 
            Podróże kształtują, inspirują i uczą pokory – i to właśnie te wartości towarzyszą mi podczas każdej wyprawy.</p>
            <Swiper
              modules={[Navigation]}
              navigation
              spaceBetween={10}
              slidesPerView={4}
              className={styles.hobbySlider}
            >
              <SwiperSlide><img className={styles.hobbyImage} src="../../public/photo-3.jpg" alt="Hobby 1" /></SwiperSlide>
              <SwiperSlide><img className={styles.hobbyImage} src="../../public/photo-4.jpg" alt="Hobby 2" /></SwiperSlide>
              <SwiperSlide><img className={styles.hobbyImage} src="../../public/photo-5.jpg" alt="Hobby 3" /></SwiperSlide>
              <SwiperSlide><img className={styles.hobbyImage} src="../../public/photo-6.jpg" alt="Hobby 4" /></SwiperSlide>
            </Swiper>

            {/* Gruba linia oddzielająca sekcję o górach */}
            <hr className={styles.separator} />

            {/* Sekcja o Parzeniu kawy */}
            <h3 className={styles.title}>☕ Parzenie kawy i Latte Arty ☕</h3>
            <p className={styles.mountain}> Uwielbiam eksperymentować z różnymi metodami parzenia kawy,
               od klasycznego ekspresu ciśnieniowego, przez aeropress, aż po drippera czy tradycyjne parzenie w kawiarce. 
               Każda z tych metod ma swoje unikalne właściwości i pozwala na odkrywanie nowych smaków oraz aromatów, 
               które potrafią zaskoczyć za każdym razem. Lubię zgłębiać tajniki każdego sposobu parzenia, eksperymentować z
                czasem parzenia, temperaturą wody oraz rodzajem ziaren. Latte art to kolejny obszar, w którym rozwijam swoje 
                umiejętności. Każda filiżanka to dla mnie możliwość pokazania swojej kreatywności i pasji w najczystszej postaci.
                 Uwielbiam tworzyć różne wzory na powierzchni mlecznej pianki – od klasycznego serca, przez tulipany, aż po 
                 bardziej skomplikowane kompozycje. Dla mnie to nie tylko technika, ale także forma wyrażania siebie.
Latte art wymaga precyzyjnego podejścia i cierpliwości, a także dobrego wyczucia – zarówno w przypadku przygotowania idealnej 
kawy, jak i w samej sztuce tworzenia wzorów. Za każdym razem, gdy udaje mi się stworzyć coś wyjątkowego, czuję ogromną satysfakcję. Często dzielę się swoimi pracami z przyjaciółmi, bo kawa ma to do siebie, że łączy ludzi.</p>
<div className={styles.aboutLatte}>
<Swiper
              modules={[Navigation]}
              navigation
              spaceBetween={10}
              slidesPerView={4}
              className={styles.hobbySlider}
            >
              <SwiperSlide><img className={styles.hobbyImage} src="../../public/photo-8.jpg" alt="Hobby 1" /></SwiperSlide>
              <SwiperSlide><img className={styles.hobbyImage} src="../../public/photo-9.jpg" alt="Hobby 2" /></SwiperSlide>
              <SwiperSlide><img className={styles.hobbyImage} src="../../public/photo-10.jpg" alt="Hobby 3" /></SwiperSlide>
              <SwiperSlide><img className={styles.hobbyImage} src="../../public/photo-11.jpg" alt="Hobby 4" /></SwiperSlide>
            </Swiper>
</div>
          
          </>
        )}
      </motion.div>
    </div>
  );
};

export default About;
