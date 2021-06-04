import classes from './Section.module.scss';

const Section = (props) => {
  return (
    <section className={classes.section}>
      <h1 className={classes.section__title}>{props.title}</h1>
      {props.children}
    </section>
  );
};

export default Section;