import React from "react";
import { getUpcomingEvents } from "./events.resource";
import styles from "./events.component.css";
import { Link } from "react-router-dom";
import Section from "../hocs/section.component";
import { Event } from "./event/event.component";

export default function Events() {
  const [events, setEvents] = React.useState([]);
  React.useEffect(() => {
    getUpcomingEvents().then(events => {
      setEvents(events.slice(0, 3));
    });
  }, []);
  return (
    <Section title="Upcoming Events">
      <div className="container">
        <div className="row">
          {events.map(event => (
            <div className="col-md-4">
              <Event {...event} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
