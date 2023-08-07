import React, { useState } from 'react';
import Events from './pages/Events';
import Reserve from './pages/Reserve';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleBackClick = () => {
    setSelectedEvent(null);
  };

  React.useEffect(() => {
    const storedEvent = localStorage.getItem('selectedEvent');
    if (storedEvent) {
      setSelectedEvent(JSON.parse(storedEvent));
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <h1>TicketNinja</h1>
        <main>
          <Routes>
            <Route path="/" element={<Events onEventClick={handleEventClick} />} />
            <Route path="/Ticket" element={<Reserve selectedEvent={selectedEvent} onBackClick={handleBackClick} />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
