import Section from '../UI/Section';
import classes from './Cookies.module.scss';

const Cookies = () => {
  return (
    <Section title='Polityka ciasteczkowa'>
      <h4 className={classes.section__h4} >Szanowny Użytkowniku!</h4>
      <ul className={classes.section__list}>
        <li className={classes.section__text}>Pliki cookies oznaczają pliki tekstowe przechowywane w pamięci urządzeń użytkowników. Pomagają one m.in. wyświetlać strony internetowe zgodnie z indywidualnymi preferencjami, pomagają w dynamicznym procesie generowania zamówień. Zawierają one najczęściej adres strony internetowej, okres życia pliku oraz unikatowy identyfikator.</li>
        <li className={classes.section__text}>Pliki cookies oznaczają pliki tekstowe przechowywane w pamięci urządzeń użytkowników. Pomagają one m.in. wyświetlać strony internetowe zgodnie z indywidualnymi preferencjami, pomagają w dynamicznym procesie generowania zamówień. Zawierają one najczęściej adres strony internetowej, okres życia pliku oraz unikatowy identyfikator.</li>
        <li className={classes.section__text}>Pliki cookies nie są wykorzystywane w celach personalnej identyfikacji użytkownika, jedynie do poznania jego preferencji.</li>
      </ul >
      <p className={classes.section__text}>Szanujemy prywatność naszych użytkowników i chcemy, aby korzystając z naszych witryn czuli się bezpiecznie.</p>
      <h4 className={classes.section__h4}>Jak wyłączyć ciasteczka?</h4>
      <p className={classes.section__text}>Każdy użytkownik Internetu może dostosować poziom ochrony przed ciasteczkami do swoich preferencji, w tym całkowicie zablokować możliwość pozostawiania plików cookies. Zwiększa to poziom bezpieczeństwa i ochrony danych, ale może także uniemożliwiać niektóre funkcje, np. zalogowanie się do witryny.</p>
      <p className={classes.section__text}>Informacje na temat ustawień dotyczących ciasteczek w poszczególnych przegladarkach dostępne są na poniższych stronach:</p>
      <ul className={classes.section__list}>
        <li className={classes.section__text}><a className={classes.section__link} href="http://help.opera.com/Windows/12.10/pl/cookies.html">w przeglądarce Opera</a></li>
        <li className={classes.section__text}><a className={classes.section__link} href="http://support.mozilla.org/pl/kb/W%C5%82%C4%85czanie%20i%20wy%C5%82%C4%85czanie%20obs%C5%82ugi%20ciasteczek">W przegladarce Firefox</a></li>
        <li className={classes.section__text}><a className={classes.section__link} href="http://support.google.com/chrome/bin/answer.py?hl=pl&answer=95647">w przeglądarce Chrome</a></li>
        <li className={classes.section__text}><a className={classes.section__link} href="http://windows.microsoft.com/pl-pl/windows7/block-enable-or-allow-cookies">w przeglądarce Internet Explorer</a></li>
        <li className={classes.section__text}><a className={classes.section__link} href="http://support.apple.com/kb/PH5042">w przeglądarce Safarii</a></li>
      </ul>
      <p className={classes['section__text--last']}>Jeśli korzystasz z urządzenia przenośnego (telefon, smartfon, tablet), zapoznaj się z opcjami dotyczącymi ochrony prywatności w dokumentacji na stronie internetowej producenta Twojego urządzenia.</p>
    </Section>
  );
};

export default Cookies;