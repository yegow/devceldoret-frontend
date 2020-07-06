import React from "react";
import { Link } from "react-router-dom";

import styles from "./event.component.css";

export const Event = ({
  title,
  description,
  venueName,
  address,
  eventStart,
  eventEnd,
  url
}) => (
  <div className={`card text-center`}>
    <img
      src="../../../assets/img/hackos.png"
      className="card-img-top"
      alt="event banner"
    />
    <div className="card-body">
      <h4 className="card-title">{title}</h4>
      <h6 className="card-subtitle mb-2 text-muted text-left">
        <div className="row">
          <div className="col-1">
            <i className="fas fa-map-pin"></i>
          </div>
          <div className="col">
            {venueName},{address}
          </div>
        </div>
      </h6>
      <h6 className="card-subtitle mb-2 text-muted text-left">
        <div className="row">
          <div className="col-1">
            <i className="far fa-calendar-minus"></i>
          </div>
          <div className="col">
            {eventStart} - {eventEnd}
          </div>
        </div>
      </h6>
      {/* <p className="card-text">{description}</p> */}
      <Speakers />
      <Link to={url} className="card-link">
        <button className="btn btn-primary btn-sm">RSVP</button>
      </Link>
    </div>
  </div>
);

function Speakers() {
  return (
    <section className={styles.speakers}>
      <p>SPEAKERS</p>
      <div className={styles.speakersRow}>
        <div className={styles.speakerThumbnail}>
          <img
            src="../../../assets/img/speaker_avatar.png"
            alt="event speaker"
            className={styles.speakerImage}
          />
        </div>
        <div className={styles.speakerThumbnail}>
          <img
            src="../../../assets/img/speaker_avatar.png"
            alt="event speaker"
            className={styles.speakerImage}
          />
        </div>
        <div className={styles.speakerThumbnail}>
          <img
            src="../../../assets/img/speaker_avatar.png"
            alt="event speaker"
            className={styles.speakerImage}
          />
        </div>
      </div>
    </section>
  );
}
