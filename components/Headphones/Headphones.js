import classes from './Headphones.module.scss';
//import Image from 'next/image';
import Section from '../UI/Section';

const Headphones = () => {
  return (
    <Section title='Jak dobrać słuchawki do klasopracowni'>
      <div className={classes.section__container_img}>
        <img className={classes.section__img} src = '/assets/stanowiska .jpg' alt='przykład mocowania słuchawek w klasopracowni'/>
      </div>
      <p className={classes.section__text}>Słuchawki są bardzo ważnym elementem pracowni językowej. Pamiętać jednak należy że każde słuchawki czy to będą tanie słuchawki komputerowe czy też profesjonalne ulegają zużyciu i należy liczyć się z ich wymianą.</p>
      <p className={classes.section__text}>Słuchawki komputerowe są rozwiązaniem tańszym to ich plus minusem jest ich mniejsza trwałość.
Profesjonalne słuchawki są trwałe ale drogie.</p>
      <p className={classes.section__text}>Wymiana słuchawek jest konieczna kiedy ulegną zniszczeniu ale również wtedy gdy wygladają nieświeżo. Z naszych obserwacji wynika że słuchawki intensywnie używane przez dwa lata, mimo że są sprawne wyglądają nieestetycznie i powinno się myśleć o ich wymianie.</p>
      <p className={classes.section__text}>Czy wybrać słuchawki tańsze komputerowe czy droższe profesionalne - każdy wybór ma swoje zalety i wady. Nasza firma preferuje słuchawki komputerowe, ich trwałość jest wystarczająca a wymiana na nowe nie jest wielkim wydatkiem. Jednak wybór pozostawiamy naszym klientom.</p>
      <p className={classes.section__text}>Dowolność zastosowanych słuchawek pozwala na elastyczny ich dobór zarówno pod względem technicznym jak i możliwościami finansowymi naszych klientów. Ponadto przy zmieniającej się dynamicznie ofercie rynku zawsze jesteśmy w stanie dopasować odpowiednie słuchawki.</p>

      <p className={classes.section__text}><strong>Rodzaje słuchawek i ich ceny</strong></p>

      <div className={classes.section__container}>
        <div className={classes.section__img2}>
          <img src = '/assets/MT365.JPG' alt='Słuchawki'/>
        </div>
        <div> 
          <p className={classes['section__text--headphones']}>BOOTES BOO365 stereofoniczne słuchawki z mikrofonem wyposażone w potencjometr głośności wbudowany w słuchawce. Zaletą słuchawek jest długie regulowane ramię mikrofonu.</p>
          <p className={classes['section__text--headphones']}>Cena Brutto słuchawek wrazz modułem przyłącz.: 80zł</p>
        </div>
      </div>

      <div className={classes.section__container}>
        <div className={classes.section__img2}>
          <img src = '/assets/sluch_mbquart_mini.jpg' alt='MBQuart D-K800 ' height='108' width='102'/>
        </div>
        <div>
          <p className={classes['section__text--headphones']}>Trwałe słuchawki produkcji niemieckiej</p>
          <p className={classes['section__text--headphones']}>Cena Brutto słuchawek : wkrótce w ofercie</p>
        </div>
      </div>
    </Section>
  );
};

export default Headphones;