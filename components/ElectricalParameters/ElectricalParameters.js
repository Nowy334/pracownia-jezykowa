import classes from './ElectricalParameters.module.scss';
import Section from '../UI/Section';

const ElectricalParameters = () => {
  return (
    <Section title='Parametry elektryczne pracowni językowej'>
      <ul className={classes.section__list}>
        <li className={classes.section__text}>biurko w całości wykonane z płyty meblowej</li>
        <li className={classes.section__text}>okleina grubości 2 mm na obrzeżach blatu</li>
        <li className={classes.section__text}>dwie szafki</li>
        <li className={classes.section__text}>głębokość 650 mm</li>
        <li className={classes.section__text}>tylne wzmocnienie do samej ziemi</li>
        <li className={classes.section__text}>stopki z regulowaną wysokością</li>
      </ul>
    </Section>
  );
};

export default ElectricalParameters;