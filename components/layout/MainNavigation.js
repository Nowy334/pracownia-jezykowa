import { AiFillPropertySafety } from 'react-icons/ai';
import classes from './MainNavigation.module.scss';
import MainNavigationItem from './MainNavigationItem';


const data = [
  { name: 'Pracownia językowa', url: '/'},
  { name: 'Funkcje łączeniowe', url: '/klasopracownia-funkcje-laczeniowe'},
  { name: 'Wyposażenie pracowni', url: '/klasopracownia-wyposazenie'},
  { name: 'Przykłady realizacji', url: '/przyklady-realizacji', drop: true, sub: [
    { name: 'wersja 1', url: '/przyklady-realizacji/wersja1', id: 'w1'},
    { name: 'wersja 2', url: '/przyklady-realizacji/wersja2', id: 'w2'}
  ]},
  { name: 'Słuchawki', url: '/klasopracownia-sluchawki'},
  { name: 'Parametry elektryczne', url: '/klasopracownia-parametry-elektryczne'},
  { name: 'Program PC', url: '/program-pc-pracownia-multimedialna'},
  { name: 'Cyfrowo czy analogowo?', url: '/cyfrowe-labolatorium-jezykowe'},
  { name: 'Oferta', url: '/klasopracownia-prezentacja'},
  { name: 'Kontakt', url: '/kontakt', drop: true, sub: [
    { name: 'O nas', url: '/o-nas', id: 's1'}
  ] },
  { name: 'Polityka ciasteczkowa', url: '/ciasteczka'},
];

const MainNavigation = (props) => {

  const menuElements = data.map((element, index) => {
    return <MainNavigationItem element = {element} key = {index} setOpen = {props.setOpen}/>
  });

  let className = classes.sidebar;
  if(props.open){
    className = className + ' ' + classes.active;
  }

  return (
    <nav className={className}>
      <ul className={classes.sidebar__list}>
        {menuElements}
      </ul>
    </nav>
  );
};

export default MainNavigation;
