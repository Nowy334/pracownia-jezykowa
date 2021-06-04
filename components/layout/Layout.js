import React from "react";
import MainNavigation from "./MainNavigation";
import classes from './Layout.module.scss';
import {useEffect, useState} from 'react';
import Burger from './Burger';


const Layout = (props) => {
  const [open,setOpen] =  useState(false);
 

  useEffect(() => {
    const element = document.getElementsByTagName("main");
    element[0].scrollTop = 0;
  })

  const changeOpenMenuHandler= () => {
    setOpen(!open);
  };


  return (
  <div className={classes.layout}>
    <header className={classes.layout__header}>
      <Burger onClick= {changeOpenMenuHandler}/>
    </header>
    <div className={classes.layout__container}>
      <MainNavigation open = {open} setOpen={changeOpenMenuHandler}/>
      <div className={classes.layout__container2}>
        <main className={classes.layout__main}>
          {props.children}
        </main>
        <footer className={classes.footer}>
          <span className={classes.footer__container}>
            <p>Copyright © 2009-2021 </p>
            <p> by <a href="https://nowy334.github.io/portfolio/">Nowy334</a>&<a href="http://zubek.com.pl">Zubek</a></p>
          </span>
          <p>All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  </div>);
};

export default Layout;