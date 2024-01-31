
import "./MyBookings.css";
import { useState } from "react";
function MyBookings() {
  // Sample data for events
  const eventsData = [
    {
      id: 1,
      title: "GMAIL :",
      description: "Mobtopup@gmail.com",
    },
    {
      id: 2,
      title: "FACEBOOK :",
      description: "www.fbmobtopup.com",
    },
    {
      id: 3,
      title: "INSTAGRAM :",
      description: "www.igmobtopup.com",
    },
    {
      id: 4,
      title:"YOU TUBE :",
      description: "www.ytmobtopup.com",
    },
    {
      id: 5,
      title: "TWITTER :",
      description: "www.twmobtopup.com",
    },
    {
      id: 6,
      title: "LINKED IN :",
      description: "www.lnmobtopup.com",
    },
  
    // Add more events as needed
  ];

  // State to manage booked events
  const [bookedEvents, setBookedEvents] = useState([]);

  // Function to book an event
  const bookEvent = (event) => {
    setBookedEvents([...bookedEvents, event]);
    alert(`Event "${event.title}" booked successfully!`);
  };

  return (
    <div className="event-booking-container">
    <br></br>
      <h1>CONTACT US</h1><br></br>

      {/* View All Events */}
      <div className="event-section">
        <h2>OUR CONTACT LINKS ARE GIVEN BELOW :</h2>
        <br></br>
        <div className="event-list">
          {eventsData.map((event) => (
            <div className="event-item" key={event.id}>
              <h3>{event.title}</h3>
              <p>{event.description}</p><br></br>
              <button >
                LET'S CONNECT
               </button>
               <br></br>
            </div>
          ))}
        </div>
      </div>

      {/* My Bookings */}
      <div className="event-section">
        <h2>© 2003 MobileTopUp. All rights reserved.





        </h2>
        <div className="event-list">
          {bookedEvents.map((bookedEvent) => (
            <div className="event-item" key={bookedEvent.id}>
              <h3>{bookedEvent.title}</h3>
              <p>{bookedEvent.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyBookings;
