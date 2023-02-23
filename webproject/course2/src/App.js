import "./App.css";
import { Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";

function App() {
  return (
      <Routes>
        <Route path='/' element={<AllMeetupsPage />} />
        <Route path='/fav' element={<FavoritesPage />} />
        <Route path='/new-meet' element={<NewMeetupPage />} />
      </Routes>
  );
}

export default App;
