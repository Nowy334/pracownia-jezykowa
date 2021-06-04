import classes from './Program.module.scss';
import Section from '../UI/Section';
//import Image from 'next/image';

const Program = () => {
  return (
    <Section title = 'Program PC Pracowni Jezykowej'>
      <h4 className={classes.section__h4}>Lektor 1.3</h4>
      <p className={classes.section__text}>Program Lektor umożliwia sterowanie pracownią za pomocą komputera, klikając w ikony uczniów  lub w ikony funkcji, myszką. Poświetlona ikona wskazuje wybranego ucznia albo funkcję, a okno połączeń, znajdujące się na dole ekranu, graficznie przedstawia aktualnie zestawione połaczenia (Conect Monitor).</p>
      <p className={classes.section__text}>Komputer dołączany jest do pracowni zamiast pulpitu sterującego tym samym kablem którym jest dopięty pulpit.
Program działa tylko wtedy kiedy dołączona jest do komputera pracownia. Bez pracowni klikanie w ikony nie powoduje żadnej reakcji na ekranie.</p>
      <p className={classes.section__text}>Program w wersji 1.3 automatycznie wyszukuje podłączoną pracownie na wszystkich dostępnych COMach w komputerze również tych które są dostępne przez interface USB - RS.</p>
      <p className={classes.section__text}>JProgram testowany na systemach Windows XP, WIN7, WIN8.</p>
      <div className={classes.section__container_img}>
        <img className={classes.section__img} src = '/assets/lektor.png' alt='Program sterujący Pracownią Językową - Lektor'/>
      </div>
      <a className={classes.section__link} href='/assets/download/Lektor_setup.exe'>Instalator programu(exe) (ok 1MB)</a >
      <a className={classes.section__link} href='/assets/download/Lektor_setup.zip'>Wersja spakowana(zip) (ok 1MB)</a>
      <p className={classes.section__text}>Program Lektor jest używany alternatywnie z pulpitem sterującym.</p>
      <p className={classes.section__text}>Program nie wymaga dopłaty.</p>
    </Section>
  );
};

export default Program;