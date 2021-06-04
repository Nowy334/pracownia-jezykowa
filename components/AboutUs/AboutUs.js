import Section from '../UI/Section';
import classes from './AboutUs.module.scss';

const AboutUs = () => {
  return (
  <Section title='O nas'>
    <p className={classes.section__text}>Firma <strong>BOLD</strong></p>
    <p className={classes.section__text}>Funkcjonujemy na rynku od 1997 roku, specjalizując się w produkcji:</p>
    <ul className={classes.section__list}>
      <li className={classes.section__text}>tablic szkolnych.</li>
      <li className={classes.section__text}>pracowni językowych.</li>
      <li className={classes.section__text}>innych pomocy dydaktycznych.</li>
    </ul>
    <p className={classes.section__text}>Wyposażamy i doposażamy szkoły, uczelnie, instytucje oświatowe, państwowe i społeczne</p>
    <p className={classes.section__text}>Naszymi klientami są także firmy prywatne.</p>
    <p className={classes.section__text}>Współpracujemy ściśle z firmą <strong>Zubek Electronics</strong> przy produkcji pracowni językowej.</p>
    <p className={classes.section__text}><strong>Nasze atuty:</strong></p>
    <ul className={classes.section__list}>
      <li className={classes.section__text}>miła i rzetelna obsługa.</li>
      <li className={classes.section__text}>szeroka oferta towarowa.</li>
      <li className={classes.section__text}>szybka dostawa.</li>
    </ul>
    <span className={classes.section__span} ></span>
    <p className={classes.section__text}><strong>Firma Zubek Electronics</strong> działa od 1991 roku. Początki naszej działalności były związane z rynkiem telekomunikacji. wtedy naszym  produktem były liczniki rozmów telefonicznych MLRT-1. Obecnie działania firmy koncentrują się na tworzeniu oraz produkcji specjalistycznych urządzeń elektronicznych z naciskiem na urządzenia pomiarowe <a href='http://www.zubek.com.pl'>Telekomunikacyjna Szafka Badaniowa</a></p>
    <p className={classes.section__text}>Doświadczenie jakie zdobyliśmy przy tworzeniu  układów  pomiarowych pozwala nam na bardzo zaawansowane technicznie projekty.</p>
    <p className={classes.section__text}>Wszystkie nasze doświadczenia w zakresie technologi stosowanych w telekomunikacji zostały zastosowane w konstrukcji elektroniki do PRACOWNI JĘZYKOWEJ którą  od 2001r produkujemy dla naszego dystrybutora - firmy BOLD który jest pomysłodawcą i jedynym przedstawicielem handlowym.</p>
    <p className={classes.section__text}>Wykonujemy także projekty na zamówienie zgodnie z założeniami klientów od projektu przez prototyp do produktu finalnego.</p>
    <p className={classes.section__text}>Wykonujemy <a href='http://www.zubek.com.pl/html/smd.html'>montaż kontraktowy</a> produkcyjny na wydajnych maszynach do montażu smd.</p>
    <p className={classes.section__text}>W ostatnich latach rozszerzyliśmy naszą ofertę o programy pracujące na platformie Windows i Symbian. Program <a href='http://zubek.com.pl/audiometr'>Audiometr</a> umożliwia każdemu posiadaczowi komputera PC na ocenę sprawności swojego słuchu. Drugi program <a href='http://zubek.com.pl/symbian/'>NetAlarm</a> m.in. informuje właściciela telefonu o braku zasięgu sieci.</p>
    <p className={classes['section__text--last']}>Zapraszamy do współpracy</p>
  </Section>);
};

export default AboutUs;