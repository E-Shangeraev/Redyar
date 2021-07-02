/* eslint-disable no-fallthrough */
import React, { useCallback, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import useHttp from '@hooks/http.hook'
import Select from '@generic/Select/Select'

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
  const [day, setDay] = useState(weekDays[dayIndex])

  const selectDay = useCallback((_, selectedDay) => setDay(selectedDay), [])

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
          case 'CFRY Team':
            return (
              <span key={uuidv4()} className="schedule__name--purple">
                {n}
              </span>
            )
          case 'Gymnastics':
            return (
              <span key={uuidv4()} className="schedule__name--green">
                {n}
              </span>
            )
          case 'Heavy Day':
            return (
              <span key={uuidv4()} className="schedule__name--red">
                {n}
              </span>
            )
          case 'Stretching':
            return (
              <span key={uuidv4()} className="schedule__name--lime">
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
    const index = weekDays.indexOf(day)
    const item = await request(`/api/schedule/${index}`)
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
            activeItem={day}
            onClickItem={selectDay}
            items={weekDays}
            label="День недели:"
            name={day}
            id="select-stream"
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
