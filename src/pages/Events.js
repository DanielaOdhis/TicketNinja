import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Events({ onEventClick }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    handleEvent();
  }, []);

  const handleEvent = () => {
    axios
      .get('http://localhost:3004/api/events')
      .then((res) => {
        setEvents(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEventClick = (event) => {
    onEventClick(event);
  };

  const formatDateTime = (dateTimeString) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZoneName: 'short',
    };

    return new Date(dateTimeString).toLocaleString(undefined, options);
  };

  return (
    <div className="container">
      {events.map((event, index) => (
        <Link key={index} to="/Ticket" className='even'>
          <div className="event" onClick={() => handleEventClick(event)}>
            <p>
              <b>Event Name</b>: {event.eventName}
            </p>
            <p>
              <b>Ticket Price</b>: Ksh.{event.ticketPrice}
            </p>
            <p>
              <b>Seats Available</b>: {event.seatsAvailable}
            </p>
            <p>
              <b>Event Date</b>: {formatDateTime(event.eventDate)}
            </p>
            <hr />
          </div>
        </Link>
      ))}
    </div>
  );
}
