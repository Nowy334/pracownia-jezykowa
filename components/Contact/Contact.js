import Section from '../UI/Section';
import classes from './Contact.module.scss';

const Contact = () => {
  return (
    <Section title= 'Kontakt'>
      <h1 className={classes.section__h1}>BOLD</h1>
      <h2 className={classes.section__h2}>Przedsiębiorstwo Zaopatrzenia Szkół</h2>
      <address className={classes.section__address}><strong>58-500 Jelenia Góra <br/> 
      ul. Jagiełły 5a <br/>
      tel/fax 0-75-75 31 625
      </strong>
      </address>
      <p className={classes.section__text}><strong>BOLD at pracowniajezykowa.eu</strong></p>
    </Section>
  );
}
export default Contact;