import { Link } from "react-router-dom";
import classes from "./MainNav.module.css";

const MainNav = () => {
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
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNav;
