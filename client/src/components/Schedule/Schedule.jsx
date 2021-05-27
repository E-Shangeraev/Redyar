/* eslint-disable no-fallthrough */
import React, { useCallback, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import useHttp from '@hooks/http.hook'
import Select from './Select'

const weekDays = [
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
  'Воскресенье',
]
const date = new Date()
const dayIndex = date.getDay() - 1

const Schedule = () => {
  const { request } = useHttp()
  const [scheduleItems, setScheduleItems] = useState([])
  const [day, setDay] = useState(dayIndex)

  const selectDay = useCallback(selectedDay => setDay(selectedDay), [])

  const getColoredName = name =>
    name
      .split('/')
      .map(n => n.trim())
      .map(n => {
        switch (n) {
          case 'Open Gym':
            return (
              <span key={uuidv4()} className="schedule__name--blue">
                {n}
              </span>
            )
          case 'CFRY Junior':
            return (
              <span key={uuidv4()} className="schedule__name--purple">
                {n}
              </span>
            )
          default:
            return (
              <span key={uuidv4()} className="schedule__name--orange">
                {n}
              </span>
            )
        }
      })
      .reduce((prev, cur) => [prev, ' / ', cur])

  useEffect(async () => {
    const item = await request(`/api/schedule/${day}`)
    if (item) {
      setScheduleItems(item.schedule)
    }
  }, [day])

  return (
    <section className="schedule" id="schedule">
      <div className="wrapper">
        <div className="flex space-between align-center mb5">
          <h2 className="title">Расписание</h2>
          <Select
            activeDayIndex={day}
            onClickDay={selectDay}
            items={weekDays}
          />
        </div>
        <ul className="schedule__container">
          {scheduleItems &&
            scheduleItems.map(item => (
              <li key={uuidv4()}>
                <span className="schedule__time">{item.time}</span>
                <div>
                  <span className="schedule__name">
                    {getColoredName(item.name)}
                  </span>
                  <p className="schedule__descrition">{item.description}</p>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </section>
  )
}

export default Schedule
