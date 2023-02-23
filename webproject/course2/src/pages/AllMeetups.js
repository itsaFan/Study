import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const AllMeetupsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://react-meetup-dc352-default-rtdb.firebaseio.com/tb_meetups.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetupsData = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetupsData.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(meetupsData);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  // const DUMMY_DATA = [
  //   {
  //     id: "m1",
  //     title: "This is a first meetup",
  //     image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
  //     address: "Meetupstreet 5, 12345 Meetup City",
  //     description: "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  //   },
  //   {
  //     id: "m2",
  //     title: "This is a second meetup",
  //     image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
  //     address: "Meetupstreet 5, 12345 Meetup City",
  //     description: "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  //   },
  // ];

  return (
    <div>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </div>
  );
};
export default AllMeetupsPage;
