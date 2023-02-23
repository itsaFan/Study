import { useContext } from "react";
import FavoritesContext from "../store-context/Favorites-Context";
import CardUI from "../UI/Card";
import classes from "./MeetupItem.module.css";

const MeetupItem = (props) => {
  const favContext = useContext(FavoritesContext);
  const itemIsFavorite = favContext.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favContext.removeFavorite(props.id);
    } else {
      favContext.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

  return (
    <li className={classes.item}>
      <CardUI>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'Remove from Favorites' : 'Add to Favorite'}</button>
        </div>
      </CardUI>
    </li>
  );
};
export default MeetupItem;
