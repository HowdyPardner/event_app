import './App.css'
import { useState } from 'react'
import EventForm from './components/EventForm'
import EventList from './components/EventList'

function App() {

  const [events, setEvents] = useState([]);

  return (
    <>
      <h1>My Events</h1>
      <EventForm setEvents={setEvents} />
      <EventList events={events} setEvents={setEvents} />
      {/* employee form */}
      {/* employee list */}
    </>
  )
}

export default App