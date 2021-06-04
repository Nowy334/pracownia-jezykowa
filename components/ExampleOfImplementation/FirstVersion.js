import classes from './FirstVersion.module.scss'
import Section from '../UI/Section';

const FirstVersion = () => {
  return (
    <Section title='Pracownia wersja 1'>
      <p className={classes.section__text}><strong>Pracownia językowa z tradycyjnymi stolikami uczniowskimi 130x50 cm</strong></p>
      <p className={classes.section__text}>Szkic rozmieszczenia ławek w pracowni wersja 1</p>
      <div className={classes.section__container_img}>
        <img className={classes.section__img} src = '/assets/szkic_ust1.png' alt='Szkic ustawień 1'/>
      </div>
      <p className={classes.section__text}>Jeżeli wymiary klasy nie pozwalają na ustawienie mebli w powyższy sposób, możemy zaproponować inne rozwiązania.</p>

      <p className={classes['section__text--underline']}><strong>Opis mebli:</strong></p>
      <div>
        <p className={classes.section__text}><strong>Krzesło uczniowskie</strong></p>
        <p className={classes.section__text}>Stelaż metalowy malowany proszkowo wykonany z profilu kwadratowego 20x20mmnogi zakończone ślizgaczami meblowymi z tworzywa. Oparcie i siedzisko wykonane z profilowanej sklejki bukowej przymocowanej za pomocą nitów.</p>
      </div>
      <div>
        <p className={classes.section__text}><strong>Stolik uczniowski 2-osobowy</strong></p>
        <p className={classes.section__text}>Stelaż metalowy, malowany proszkowo, wykonany z kwadratowej rurki o wymiarach 25 x 25 mm, nogi zakończone ślizgaczami meblowymi z tworzywa, składany. Blat wykonany z płyty meblowej, wiórowej o grubości 18 mm, okleina na obrzeżach grubości 2 mm. Do stolika przymocowana tylna ściana o szerokości 25 cm.
Kolor drewnopodobny buk.    
Wymiary: długość 1300 mm x głębokość 500 mm x wysokość 760 mm.</p>
      </div>
      <div>
        <p className={classes.section__text}><strong>Biurko nauczycielskie 2-szafkowe</strong></p>
        <ul className={classes.section__list}>
          <li className={classes.section__text}>biurko w całości wykonane z płyty meblowej</li>
          <li className={classes.section__text}>okleina grubości 2 mm na obrzeżach blatu</li>
          <li className={classes.section__text}>dwie szafki</li>
          <li className={classes.section__text}>głębokość 650 mm</li>
          <li className={classes.section__text}>tylne wzmocnienie do samej ziemi</li>
          <li className={classes.section__text}>stopki z regulowaną wysokością</li>
        </ul>
        <div className={classes.section__container_img}>
          <img src = '/assets/biurko_naucz_szkic.png' alt='Szkic biurka 1' height='92' width='202'/>
        </div>
      </div>
    </Section>
  );
};

export default FirstVersion;