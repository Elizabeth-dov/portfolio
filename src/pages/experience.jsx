import React, { useState } from 'react';
import styles from './Experience.module.css';

const Experience = () => {
  const [activeSection, setActiveSection] = useState(null);

  const handleToggle = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className={styles.experienceContainer}>
      <h2>Doświadczenie</h2>

      {/* Van Graf */}
      <div className={styles.experienceSection}>
        <h3 className={styles.sectionTitle} onClick={() => handleToggle('vanGraf')}>
          Van Graf <span className={styles.arrow}>{activeSection === 'vanGraf' ? '▲' : '▼'}</span>
        </h3>
        {activeSection === 'vanGraf' && (
          <div className={styles.sectionContent}>
            <img className={styles.sectionContentImage} src="../../public/vangraf.webp" alt="" />
            <p><strong>Czas pracy:</strong> Listopad 2021 – Styczeń 2022</p>
            <p><strong>Obowiązki:</strong></p>
            <ul>
              <li>Profesjonalna obsługa klientów i doradztwo w zakresie doboru odzieży oraz akcesoriów.</li>
              <li>Prezentowanie kolekcji i dbanie o estetykę ekspozycji w sklepie.</li>
              <li>Obsługa kasy fiskalnej oraz systemu sprzedażowego.</li>
              <li>Współpraca z zespołem w celu realizacji celów sprzedażowych i zapewnienia jak najlepszej obsługi klienta.</li>
            </ul>
            <p><strong>Ogólny opis stanowiska:</strong> Jako sprzedawca w Van Graf byłam odpowiedzialna za profesjonalną obsługę klientów oraz doradztwo w zakresie stylizacji i doboru produktów. Moja rola obejmowała również obsługę kasy fiskalnej, dbanie o ekspozycję oraz zarządzanie stanem magazynowym. Dzięki tej pracy zdobyłam cenne doświadczenie w sprzedaży i obsłudze klienta, nauczyłam się efektywnej komunikacji oraz pracy w zespole, a także rozwijałam
             umiejętności związane z merchandisingiem i zarządzaniem przestrzenią sklepową.</p>
          </div>
        )}
      </div>

      {/* Starbucks */}
      <div className={styles.experienceSection}>
        <h3 className={styles.sectionTitle} onClick={() => handleToggle('starbucks')}>
          Starbucks <span className={styles.arrow}>{activeSection === 'starbucks' ? '▲' : '▼'}</span>
        </h3>
        {activeSection === 'starbucks' && (
          <div className={styles.sectionContent}>
            <img className={styles.sectionContentImage} src="../../public/starb.png" alt="" />
            <p><strong>Czas pracy:</strong> Maj 2022 – Marzec 2024</p>
            <p><strong>Obowiązki:</strong></p>
            <ul>
              <li>Przygotowywanie napojów kawowych i napojów na życzenie klientów.</li>
              <li>Obsługa klienta i utrzymanie wysokich standardów usług.</li>
              <li>Obsługa kasy fiskalnej oraz realizacja zamówień w systemie sprzedażowym.</li>
              <li>Współpraca z zespołem w celu zapewnienia efektywnej pracy.</li>
              <li>Kontrola stanów magazynowych, przyjmowanie dostaw i uzupełnianie zapasów surowców.</li>
            </ul>
            <p><strong>Ogólny opis stanowiska:</strong> Jako barista w Starbucks byłam odpowiedzialna za 
            przygotowywanie napojów kawowych oraz dbanie o jak najwyższą jakość obsługi klienta. Moja praca 
            wymagała szybkiego działania, umiejętności organizacyjnych oraz znajomości produktów, aby móc 
            doradzać klientom i personalizować zamówienia zgodnie z ich preferencjami. Dzięki tej roli nauczyłam 
            się zarządzać czasem, pracować pod presją i utrzymywać wysoki poziom koncentracji nawet w godzinach szczytu. 
            Ponadto, zdobyłam doświadczenie w sprzedaży, komunikacji z klientami oraz pracy zespołowej, co pozwoliło mi 
            lepiej rozumieć potrzeby klientów i skutecznie współpracować w dynamicznym środowisku.</p>
          </div>
        )}
      </div>

      {/* Praktyki */}
      <div className={styles.experienceSection}>
        <h3 className={styles.sectionTitle} onClick={() => handleToggle('practices')}>
          Praktyki <span className={styles.arrow}>{activeSection === 'practices' ? '▲' : '▼'}</span>
        </h3>
        {activeSection === 'practices' && (
          <div className={styles.sectionContent}>
            <p><strong>1. Biblioteka Śląska</strong></p>
            <p><strong>Termin Praktyki:</strong> 14.02.2022 –  31.05.2022</p>
            <p><strong>Obowiązki:</strong></p>
            <ul>
              <li>Tłumaczenie treści w systemie elektronicznym Biblioteki Śląskiej z języka polskiego na ukraiński i odwrotnie.</li>
              <li>Pomoc osobom z Ukrainy w korzystaniu z zasobów bibliotecznych, w tym katalogów i systemu wypożyczeń.</li>
              <li>Wsparcie językowe dla dzieci i dorosłych w trakcie wydarzeń organizowanych przez bibliotekę.</li>
              <li>Współpraca z zespołem biblioteki przy organizacji warsztatów, spotkań autorskich i innych wydarzeń kulturalnych.</li>
            </ul>
            <p><strong>Ogólny opis stanowiska:</strong> Podczas praktyk w Bibliotece Śląskiej pełniłam funkcję tłumacza, wspierając
             osoby ukraińskojęzyczne w dostępie do zasobów bibliotecznych. Moja rola polegała na tłumaczeniu treści w systemie elektronicznym 
             oraz pomaganiu dzieciom i dorosłym w zrozumieniu zasad funkcjonowania biblioteki. Dodatkowo brałam udział w organizacji wydarzeń 
             literackich i kulturalnych, wspierając ich przebieg zarówno pod względem organizacyjnym, jak i językowym. Dzięki temu doświadczeniu 
             rozwinęłam swoje umiejętności językowe, komunikacyjne i organizacyjne, a także zdobyłam cenne doświadczenie w pracy z osobami o różnym 
             poziomie znajomości języka polskiego.</p>

            <p><strong>2. Kancelaria prawna RES</strong></p>
            <p><strong>Termin Praktyki:</strong> 1.10.2024 – 31.10.2024</p>
            <p><strong>Obowiązki:</strong></p>
            <ul>
              <li>Wsparcie w przygotowywaniu dokumentacji związanej z legalizacją pobytu cudzoziemców.</li>
              <li>Tłumaczenie dokumentów prawnych i urzędowych z języka polskiego na ukraiński i odwrotnie.</li>
              <li>Pomoc klientom w wypełnianiu wniosków i kompletowaniu niezbędnych dokumentów.</li>
              <li>Udział w spotkaniach z klientami jako wsparcie językowe oraz organizacyjne.</li>
            </ul>
            <p><strong>Ogólny opis stanowiska:</strong> Podczas praktyk w Kancelarii Prawnej RES pełniłam funkcję asystenta prawnego, wspierając klientów zagranicznych w procesie legalizacji pobytu i pracy w Polsce. Moja rola obejmowała tłumaczenie dokumentów, pomoc w ich przygotowywaniu oraz udzielanie wsparcia cudzoziemcom w kontaktach z urzędami. Brałam także udział w organizacji spotkań oraz analizie akt spraw. Dzięki tej pracy zdobyłam cenne doświadczenie w obsłudze prawnej cudzoziemców, tłumaczeniach prawniczych oraz pracy z dokumentacją administracyjną.</p>
          </div>
        )}
      </div>

      {/* Black Woolf */}
      <div className={styles.experienceSection}>
        <h3 className={styles.sectionTitle} onClick={() => handleToggle('blackWoolf')}>
          Black Woolf <span className={styles.arrow}>{activeSection === 'blackWoolf' ? '▲' : '▼'}</span>
        </h3>
        {activeSection === 'blackWoolf' && (
         <div className={styles.sectionContent}>
          <img className={styles.sectionContentImage} src="../../public/black.png" alt="" />
         <p><strong>Czas pracy:</strong> Kwiecień 2024 – Obecnie</p>
         <p><strong>Obowiązki:</strong></p>
         <ul>
           <li>Przygotowywanie kawy i napojów specjalnych zgodnie ze standardami kawiarni.</li>
           <li>Obsługa klienta – doradztwo w zakresie wyboru kawy i książek.</li>
           <li>Sprzedaż książek anglojęzycznych – pomoc klientom w wyborze literatury oraz dbanie o estetykę ekspozycji.</li>
           <li>Aktualizacja treści na stronie internetowej kawiarni (np. menu, wydarzenia, promocje).</li>
           <li>Zarządzanie mediami społecznościowymi – publikowanie postów i promowanie wydarzeń literackich.</li>
           <li>Dbanie o estetykę przestrzeni kawiarni i organizowanie przestrzeni sprzedażowej.</li>
         </ul>
         <p><strong>Ogólny opis stanowiska:</strong>  Pracując w kawiarni Black Woolf, łączę rolę baristy i sprzedawcy książek.  
           Moje codzienne obowiązki obejmują przygotowywanie kawy, obsługę klientów oraz doradztwo w zakresie literatury.  
           Dodatkowo wspieram kawiarnię w działaniach online, zajmując się aktualizacją strony internetowej oraz publikacją treści w mediach społecznościowych.  
           Dzięki tej pracy rozwijam umiejętności w obszarze gastronomii, sprzedaży, marketingu internetowego oraz obsługi klienta.  
         </p>
       </div>
       
        )}
      </div>

    </div>
  );
};

export default Experience;

