import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from "react-router-dom";

const NewMeetupPage = () => {
  const navigate = useNavigate();
  function addMeetupHandler(meetupData) {
    fetch("https://react-meetup-dc352-default-rtdb.firebaseio.com/tb_meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      navigate("/");
    });
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};
export default NewMeetupPage;
