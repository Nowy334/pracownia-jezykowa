import { AiFillCaretDown, AiFillCaretUp  } from "react-icons/ai";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import classes from "./MainNavigationItem.module.scss";

const MainNavigationItem = (props) => {
  const router = useRouter();
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => {
    setSubnav(!subnav)
    props.setOpen();
  };

  let arrow;
  if(subnav){
    arrow = <AiFillCaretUp className={classes["element-icon"]}/>;
  }else {
    arrow = <AiFillCaretDown className={classes["element-icon"]}/>
  }

  let classname = classes.element;
  let classsSubName = classes.element;
  let id;

  if(router.pathname === props.element.url){
    classname = classname +' ' +classes.active;
  }

  if(subnav && props.element.sub){
    if(props.element.sub.some(el => {
       if( el.url === router.pathname){
         id = el.id;
         return true;
       }else{
         return false;
       }
    })){
      classsSubName = classsSubName +' ' +classes.active;
    }
  }
  return (
    <li className={classname}>
      <Link
        className={classes["element-link"]}
        href={props.element.url}
        scroll = {true}
      >
        <a onClick={showSubnav}>{props.element.name}</a>
      </Link>
      {props.element.drop && arrow}
      {subnav && props.element.sub ? (
        <ul>
          {" "}
          {props.element.sub.map((item) => {
            return (
              <li className={item.id === id ? classsSubName : classes.element} key={item.id} onClick={props.setOpen}>
                <Link
                  className={classes["element-link"]}
                  href={item.url}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      ) : null}
    </li>
  );
};

export default MainNavigationItem;
