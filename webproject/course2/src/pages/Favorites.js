import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavoritesContext from "../components/store-context/Favorites-Context";

const FavoritesPage = () => {
  const favContext = useContext(FavoritesContext);

  let favContent;
  if (favContext.totalFavorites === 0) {
    favContent = <p>No favorite meetup. Start adding some by clicking on the favorite button</p>;
  } else {
    favContent = <MeetupList meetups={favContext.favorites} />;
  }

  return (
    <section>
      <h1>My Favorite Meetups</h1>
      {favContent}
    </section>
  );
};
export default FavoritesPage;
