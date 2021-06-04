import classes from './StudioEquipment.module.scss';
//import Image from 'next/image';
import Section from '../UI/Section';

const StudioEquipment = () => {
  return(
    <Section title='Wyposażenie podstawowe pracowni'>
      <ul className={classes.section__list}>
        <li className={classes.section__text}>Moduł główny pracowni</li>
        <li className={classes.section__text}>Klawiatura - pulpit sterujący pracownią.</li>
        <li className={classes.section__text}>Pilot zdalnego sterowania pracownią + zespół odbiornika pilota (nowość).</li>
        <li className={classes.section__text}>Słuchawki z mikrofonem dla wszystkich słuchaczy i lektora.</li>
        <li className={classes.section__text}>Sprzęt odtwarzający (wieża CD + MK) Doskonała również do nagłośnienia klasopracowni.</li>
        <li className={classes.section__text}>Okablowanie stanowisk oraz pulpitu sterowniczego.</li>
        <li className={classes.section__text}>Niezbędny osprzęt do zamontowania pracowni (haczyki, numery stanowisk, listwy wykończeniowe, itp.).</li>
        <li className={classes.section__text}>Gwarancja 5 lat</li>
      </ul>
      <h4 className={classes.section__h4}>Moduł z gniazdami do podłączenia mediów zawierający:</h4>
      <ul className={classes.section__list}>
        <li className={classes.section__text}>Gniazdo do podłączenia magnetofonu (szt. 2)jako źródło dźwięku</li>
        <li className={classes.section__text}>Gniazdo do podłączenia CD jako źródło dźwięku</li>
        <li className={classes.section__text}>Gniazdo do podłączenia video/TV jako źródło dźwięku</li>
        <li className={classes.section__text}>Gniazdo do podłączenia PC (komputera)jako źródło dźwięku</li>
        <li className={classes.section__text}>Gniazdo do podłączenia magnetofonu (szt. 2) jako medium zapisujace dźwięk</li>
        <li className={classes.section__text}>Gniazdo do podłączenia PC (komputer) jako medium zapisujące dźwięk</li>
      </ul>
      <div className={classes.section__container_img}>
        <img className={classes.section__img} src = '/assets/biurko.jpg' alt='Moduł główny montowany najczęściej w biurku nauczyciela'/>
        <p className={classes.section__text}><strong>Moduł główny</strong> montowany najczęściej w biurku nauczyciela</p>
      </div>
      <div className={classes.section__container_img}>
        <img className={classes.section__img} src = '/assets/klawiatura_3.jpg' alt='Klawiatura do pracowni językowej'/>
        <p className={classes.section__text}><strong>Klawiatura</strong> - pulpit sterujący</p>
      </div>
      <div className={classes.section__container_img}>
        <img className={classes.section__img} src = '/assets/pilot1.jpg' alt='pilot pracowni językowej' height='309' width='412.5'/>
        <p className={classes.section__text}><strong>Pilot</strong> do zdalnego sterowania</p>
      </div>
    </Section>
  );
};

export default StudioEquipment;