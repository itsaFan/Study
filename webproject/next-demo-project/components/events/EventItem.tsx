import Link from "next/link";
import { Event } from "./event";

const EventItem: React.FC<Event> = ({ title, image, date, location, id }) => {
  const readableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(", ", "\n");
  const navEventLink = `/events/${id}`;

  return (
    <div>
      <li>
        <div>
          <img src={"/" + image} alt={title} />
          <div>
            <div>
              <h2>{title}</h2>
              <div>
                <time>{readableDate}</time>
              </div>
              <address>{formattedAddress}</address>
            </div>
          </div>
          <div>
            <Link href={navEventLink}>Explore Event</Link>
          </div>
        </div>
      </li>
    </div>
  );
};

export default EventItem;
