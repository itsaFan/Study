import { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../store-context/Favorites-Context";
import classes from "./MainNav.module.css";

const MainNav = () => {
  const favContext = useContext(FavoritesContext)


  return (
    <header className={classes.header}>
      <div className={classes.logo}>Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">AllMeet</Link>{" "}
          </li>
          <li>
            <Link to="/new-meet">NewMeet</Link>
          </li>
          <li>
            <Link to="/fav">Favorites</Link>
            <span className={classes.badge}>{favContext.totalFavorites}</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNav;
