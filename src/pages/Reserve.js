import React from 'react';
import { Link } from 'react-router-dom';

const Reserve = ({ selectedEvent, onBackClick }) => {
  if (!selectedEvent) {
    return <div>Event not found!</div>;
  }

  localStorage.setItem('selectedEvent', JSON.stringify(selectedEvent));

  const handleBack = () => {
    if (onBackClick) {
      onBackClick();
    }
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
    <div>
    {selectedEvent?(
    <div>
      <h2>{selectedEvent.eventName}</h2>
      <p>Ticket Price: Ksh.{selectedEvent.ticketPrice}</p>
      <p>Seats Available: {selectedEvent.seatsAvailable}</p>
      <p>Event Date: {formatDateTime(selectedEvent.eventDate)}</p> <br />
      <Link to="/" onClick={handleBack} className="link">
        Back to Events
      </Link>
    </div>
    ):(
    <div>Event not found!</div>)}
    </div>
  );
};

export default Reserve;
