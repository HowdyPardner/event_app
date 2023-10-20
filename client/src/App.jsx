import { useState } from 'react'

import './App.css'
import EventForm from './components/EventForm'
import EventList from './components/EventList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>My Events</h1>
    <EventForm/>
    <EventList/>
      
    </>
  )
}

export default App
