import React, { useState, useEffect } from 'react'
import './Reservations.css'

import { db } from '../../../firebase'
import { it } from 'date-fns/locale/it'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import type { View, NavigateAction, Event, SlotInfo } from 'react-big-calendar'
import { collection, addDoc, getDocs, Timestamp } from 'firebase/firestore'
import { format, parse, startOfWeek, getDay } from 'date-fns'

import 'react-big-calendar/lib/css/react-big-calendar.css'

// --- EVENT TYPE ---
interface CalendarEvent extends Event {
  title: string
  start: Date
  end: Date
}

// --- LOCALIZER ---
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { locale: it }),
  getDay,
  locales: { it },
})

// --- COMPONENT ---
const Reservations: React.FC = () => {
  // ✅ state dentro il componente
  const [events, setEvents] = useState<CalendarEvent[]>([])
  const [view, setView] = useState<View>('month')
  const [date, setDate] = useState<Date>(new Date())

  // --- LOAD EVENTS FROM FIRESTORE ---
  useEffect(() => {
    const loadEvents = async () => {
      const snapshot = await getDocs(collection(db, 'events'))

      const loadedEvents: CalendarEvent[] = snapshot.docs.map(doc => {
        const data = doc.data()
        return {
          title: data.title,
          start: data.start.toDate(),
          end: data.end.toDate(),
        }
      })

      setEvents(loadedEvents)
    }

    loadEvents()
  }, [])

  // click su evento
  const handleSelectEvent = (event: CalendarEvent) => {
    alert(`Evento: ${event.title}`)
  }

  // selezione slot vuoto
  const handleSelectSlot = async ({ start, end }: SlotInfo) => {
    const title = window.prompt('Titolo evento')
    if (!title) return

    await addDoc(collection(db, 'events'), {
      title,
      start: Timestamp.fromDate(start),
      end: Timestamp.fromDate(end),
      createdAt: Timestamp.now(),
    })

    // aggiorna UI
    setEvents(prev => [...prev, { title, start, end }])
  }

  return (
    <div className="calendar-box" style={{ width: '90%', margin: '1rem auto' }}>
      <Calendar<CalendarEvent>
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        view={view}
        date={date}
        onView={setView}
        onNavigate={(
          newDate: Date,
          _view: View,
          _action: NavigateAction
        ) => setDate(newDate)}
        views={['month', 'week', 'day']}
        style={{ height: '60vh' }}
        culture="it"
        selectable="ignoreEvents"
        onSelectEvent={handleSelectEvent}
        onSelectSlot={handleSelectSlot}
        longPressThreshold={300}
        messages={{
          next: '>>',
          previous: '<<',
          today: 'Today',
          month: 'Month',
          week: 'Week',
          day: 'Day',
          agenda: 'Agenda',
        }}
      />
    </div>
  )
}

export default Reservations
