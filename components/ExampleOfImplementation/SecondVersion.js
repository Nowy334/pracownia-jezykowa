import classes from './SecondVersion.module.scss';
//import Image from 'next/image';
import Section from '../UI/Section';

const FirstVersion = () => {
  return (
    <Section title='Pracownia wersja 2'>
      <p className={classes.section__text}><strong>Pracownia językowa z biurkami uczniowskimi 120x60 cm lub 120x65cm</strong></p>
      <p className={classes.section__text}>Szkic rozmieszczenia ławek w pracowni wersja 2</p>
      <div className={classes.section__container_img}>
        <img className={classes.section__img} src = '/assets/szkic_ust2.png' alt='Szkic ustawień 2'/>
      </div>
      <p className={classes.section__text}>Jeżeli wymiary klasy nie pozwalają na ustawienie mebli w powyższy sposób, możemy zaproponować inne rozwiązania.</p>

      <p className={classes['section__text--underline']}><strong>Opis mebli:</strong></p>
      <div>
        <p className={classes.section__text}><strong>Krzesło uczniowskie</strong></p>
        <p className={classes.section__text}>Stelaż metalowy, malowany proszkowo, wykonany z kwadratowej rurki o wymiarach  20x20mm, nogi zakończone ślizgaczami meblowymi z tworzywa. Oparcie i siedzisko lakierowne, wykonane z profilowanej sklejki bukowej, przymocowane do stelaża za pomocą nitów.</p>
      </div>
      <div>
        <p className={classes.section__text}><strong>Stolik uczniowski 2-osobowy</strong></p>
        <div className={classes.section__container_img}>
          <img src = '/assets/biurko_ucz.gif' alt='Szkic biurka 1' height='92' width='202'/>
        </div>
        <ul className={classes.section__list}>
          <li className={classes.section__text}>biurko w całości wykonane z płyty meblowej</li>
          <li className={classes.section__text}>okleina grubości 2 mm na obrzeżach blatu</li>
          <li className={classes.section__text}>głębokość 650 mm</li>
          <li className={classes.section__text}>stopki z regulowaną wysokością</li>
        </ul>
      </div>
      <div className={classes.section__last}>
        <p className={classes.section__text}><strong>Biurko nauczycielskie 2-szafkowe</strong></p>
        <div className={classes.section__container_img}>
          <img src = '/assets/biurko_naucz_szkic.png' alt='Biurko nauczycielskie' height='112' width='244'/>
        </div>
        <ul className={classes.section__list}>
          <li className={classes.section__text}>biurko w całości wykonane z płyty meblowej</li>
          <li className={classes.section__text}>okleina grubości 2 mm na obrzeżach blatu</li>
          <li className={classes.section__text}>dwie szafki</li>
          <li className={classes.section__text}>głębokość 650 mm</li>
          <li className={classes.section__text}>tylne wzmocnienie do samej ziemi</li>
          <li className={classes.section__text}>stopki z regulowaną wysokością</li>
        </ul>
      </div>
    </Section>
  );
};

export default FirstVersion;