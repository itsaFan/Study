// import EventItem from "./EventItem";

// export default function EventList(props) {
//   const { items } = props;
//   return (
//     <div>
//       <ul>
//         {items.map((event) => (
//           <EventItem key={event.id} id={event.id} title={event.title} location={event.location} date={event.date} image={event.image} />
//         ))}
//       </ul>
//     </div>
//   );
// }

import EventItem from "./EventItem";
import { Event } from "./event";

interface EventListProps {
  items: Event[];
}

export default function EventList(props: EventListProps) {
  const { items } = props;
  return (
    <div>
      <ul>
        {items.map((event) => (
          <EventItem
            key={event.id}
            id={event.id}
            title={event.title}
            location={event.location}
            date={event.date}
            image={event.image}
          />
        ))}
      </ul>
    </div>
  );
}