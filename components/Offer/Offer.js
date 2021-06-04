import classes from './Offer.module.scss';
import Section from '../UI/Section';

const Offer = () => {
  return (
    <Section title = 'Zamówienie Oferty'>
      <p className={classes.section__text}>Jeśli chciałbys abyśmy przygotowali ofertę dostosowaną do Twoich potrzeb i wymagań lub uczestniczyli w przetargu prosimy o wypełnienie poniższego formularza. W ciągu kilku dni nasz przedstawiciel skontaktuje się z Tobą w celu uszczegółowienia naszej oferty. </p>
    </Section>
  );
};

export default Offer;