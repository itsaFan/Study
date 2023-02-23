import classes from "./Card.module.css";

const CardUI = (props) => {
  return (
    <div className={classes.card}>
      <div>{props.children}</div>
    </div>
  );
};
export default CardUI;
