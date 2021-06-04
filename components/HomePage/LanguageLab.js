//import Image from 'next/image';
import classes from './LanguageLab.module.scss';
import Section from '../UI/Section';

const LanguageLab = () => {
  return(
    <Section title='Pracownia językowa'>
      <p className={classes.section__text}><strong>Pracownia językowa naszej produkcji to idealne rozwiązanie wspomagające naukę języków obcych na które stać każdą szkołę.</strong></p>
      <p className={classes.section__text}>Nasza pracownia pozwala na efektywne metody nauczania języków na poziomie podstawowym i zaawansowanym, a efekt nauczania porównywalny jest z pracą w kilkuosobowej grupie.</p>
      <div className={classes.section__container_img}>
        <img src = '/assets/pracownia.jpg' alt='klasopracownia do nauki języka' className={classes.section__img}/>
      </div>
      <ul className={classes.section__list}>
        <li className={classes.section__text}>Dzięki optymalnemu doborowi sprzętu jest to rozwiązanie <strong>najtańsze na rynku</strong>.</li>
        <li className={classes.section__text}>Zaletą jest niezwykła <strong>łatwość obsługi</strong>. Większość nauczycieli sprawnie posługuje się pracownią już po 15min. Wystarczy włączyć i nacisnąć jeden klawisz aby uczniowie mogli z niej korzystać.</li>
        <li className={classes.section__text}><strong>Pilot zdalnego sterowania</strong>, możliwość bezprzewodowego sterowania pracą pracowni. Pilot pozwala na swobodne poruszanie się po klasie i obsługę w tym czasie pracowni.</li>
        <li className={classes.section__text}>Możliwość zainstalowania pracowni do dowolnego typu ławek znajdujących się na wyposażeniu placówki.</li>
        <li className={classes.section__text}>Pulpit sterujący (klawiatura) <strong>nie jest powiązany z meblami</strong> i może być w prosty sposób odłączony i schowany do szuflady. Nie przeszkadza kiedy pracownia (klasa) nie jest wykorzystywana do nauki języków obcych. Możliwość sterowania z <strong>komputera</strong> zamiast klawiatury.</li>
        <li className={classes.section__text}><strong>Wizualna i dźwiękowa</strong> kontrola pozycji przycisków (informacja słowna w słuchawkach nauczyciela).</li>
        <li className={classes.section__text}>Konstrukcja została tak pomyślana aby zminimalizować dostęp uczniów do urządzeń technicznych pracowni i uniknąć ich zniszczenia. (odporność na zniszczenie).</li>
        <li className={classes.section__text}><strong>Auto wyłączenie</strong> pracowni kiedy nie jest używana (oszczędność energii).</li>
        <li className={classes.section__text}>Pracownia w całości <strong>polskiej produkcji</strong>.</li>
        <li className={classes.section__text}>Współpraca z <strong>wszystkimi urządzeniami odtwarzającymi i nagrywającymi</strong> takimi jak komputer, CD/DV, magnetofon, MP3, telefonem komórkowym z mp3, MP4, cyfrowy magnetofon,telewizor itp.</li>
        <li className={classes.section__text}>Słuchawki zastosowane w pracowni mogą być słuchawkami komputerowymi jak również droższymi słuchawkami profesjonalnymi.</li>
        <li className={classes.section__text}>Możliwość <strong>aktualizacji oprogramowania</strong> po podłączeniu pracowni do komputera.</li>
        <li className={classes.section__text}><strong>5 lat gwarancji</strong> na moduł główny pracowni.</li>
      </ul>
    </Section>
  );
}

export default LanguageLab;