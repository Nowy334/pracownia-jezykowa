import classes from './ConnectFunction.module.scss';
import Section from '../UI/Section';

const ConnectFunction = () => {
  return(
    <Section title='Funkcje łączeniowe klasopracowni'>
      <ul className={classes.section__list}>
        <li className={classes.section__text}>Nauczyciel {'->'} wszystkie stanowiska uczniowskie(stanowiska 1-24) Nauczyciel mówi do wszystkich uczniów a uczniowie tylko słuchają.</li>
        <li className={classes.section__text}>Nauczyciel {'->'} grupa 1 (stanowiska 1-12)</li>
        <li className={classes.section__text}>Nauczyciel {'->'} grupa 2 (stanowiska 13-24)</li>
        <li className={classes.section__text}>Rozmowa nauczyciel {'<->'} dowolne stanowisko ucznia (1-24)</li>
        <li className={classes.section__text}>Połączenie w pary konwersacyjne  (para stanowisko 1 {'<->'} stanowisko 2,  3{'<->'}4,  5{'<->'}6  itd.)</li>
        <li className={classes.section__text}>Połączenie dowolnego stanowiska {'->'} wszystkich pozostałych stanowisk</li>
        <li className={classes.section__text}>Połączenie dowolnego stanowiska {'->'} do grupy 1</li>
        <li className={classes.section__text}>Połączenie dowolnego stanowiska {'->'} do grupy 2</li>
        <li className={classes.section__text}>Połączenie wybranego medium {'->'} do wszystkich stanowisk</li>
        <li className={classes.section__text}>Połączenie wybranego medium {'->'} do grupy 1</li>
        <li className={classes.section__text}>Połączenie wybranego medium {'->'} do grupy 2</li>
        <li className={classes.section__text}>Połączenie dowolnej wypowiedzi lub konwersacji do wybranego medium nagrywającego.</li>
      </ul>
    </Section>
  );
};

export default ConnectFunction;