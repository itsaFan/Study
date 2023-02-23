import "./App.css";
import { Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layouts";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/fav" element={<FavoritesPage />} />
        <Route path="/new-meet" element={<NewMeetupPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
