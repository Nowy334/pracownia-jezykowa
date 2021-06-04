import classes from './ExampleOfImplementation.module.scss';
//import Image from 'next/image';
import Section from '../UI/Section';

const ExampleOfImplementation = () => {
  return (
    <Section title= 'Przykładowe zdjęcia wykonych pracowni językowych'>
      <div className={classes.section__container_img}>
        <img className={classes.section__img} src = '/assets/p9010258.jpg' alt='Klasopracownia do nauki języka obcego'/>
      </div>
      <div className={classes.section__container_img}>
        <img className={classes.section__img} src = '/assets/p9010260.jpg' alt='Klasopracownia do nauki języka obcego'/>
      </div>
      <div className={classes.section__container_img}>
        <img className={classes.section__img} src = '/assets/prbold.jpg' alt='Pracownia do nauki języków obcych'/>
      </div>
      <div className={classes.section__container_img}>
        <img className={classes.section__img} src = '/assets/fot1.jpg' alt='Klasopracownia do nauki języka obcego'/>
      </div>
      <div className={classes.section__container_img}>
        <img className={classes.section__img} src = '/assets/fot2.jpg' alt='Klasopracownia do nauki języka obcego'/>
      </div>
      <div className={classes.section__container_img}>
        <img className={classes.section__img} src = '/assets/fot3.jpg' alt='Klasopracownia do nauki języka obcego'/>
      </div>
    </Section>
  );
};

export default ExampleOfImplementation;