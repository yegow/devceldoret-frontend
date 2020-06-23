import React from "react";
import { Link } from "react-router-dom";

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
            <i class="fas fa-map-pin"></i>
          </div>
          <div className="col">
            {venueName},{address}
          </div>
        </div>
      </h6>
      <h6 className="card-subtitle mb-2 text-muted text-left">
        <div className="row">
          <div className="col-1">
            <i class="far fa-calendar-minus"></i>
          </div>
          <div className="col">
            {eventStart} - {eventEnd}
          </div>
        </div>
      </h6>
      {/* <p className="card-text">{description}</p> */}
      <Speakers />
      <button className="btn btn-outline-info">
        <Link to={url} className="card-link">
          RSVP
        </Link>
      </button>
    </div>
  </div>
);

function Speakers() {
  return (
    <section>
      <p>SPEAKERS</p>
      <div className="thumbnail">
        <img src="../../../assets/img/speaker_avatar.png" alt="event speaker" />
      </div>
      <div className="thumbnail">
        <img src="../../../assets/img/speaker_avatar.png" alt="event speaker" />
      </div>
      <div className="thumbnail">
        <img src="../../../assets/img/speaker_avatar.png" alt="event speaker" />
      </div>
    </section>
  );
}
