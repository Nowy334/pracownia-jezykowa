import classes from './Burger.module.scss'

const Burger = (props) => {
  return (
    <div className={classes.container} onClick={props.onClick}>
      <div className={classes.bar1}></div>
      <div className={classes.bar2}></div>
      <div className={classes.bar3}></div>
    </div>
  );
}

export default Burger;