import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import useHttp from '@hooks/http.hook'
import Select from './Select'

const Schedule = () => {
  const { request } = useHttp()
  const [scheduleItems, setScheduleItems] = useState([])

  useEffect(async () => {
    const items = await request('/api/schedule')
    setScheduleItems(items)
    console.log(items)
  }, [])

  return (
    <section className="schedule" id="schedule">
      <div className="wrapper">
        <div className="flex space-between align-center mb5">
          <h2 className="title">Расписание</h2>
          <Select />
        </div>
        <ul className="schedule__container">
          {/* {scheduleItems &&
          scheduleItems.map(*)
        } */}
          <li>
            <span className="schedule__time">8:00–9:00</span>
            <div>
              <span className="schedule__name">Crossfit</span>
              <p className="schedule__descrition">
                Загнятия кроссифтом в группе с тренером
              </p>
            </div>
          </li>
          <li>
            <span className="schedule__time">8:00–9:00</span>
            <div>
              <span className="schedule__name">Crossfit</span>
              <p className="schedule__descrition">
                Загнятия кроссифтом в группе с тренером
              </p>
            </div>
          </li>
          <li>
            <span className="schedule__time">8:00–9:00</span>
            <div>
              <span className="schedule__name">Crossfit</span>
              <p className="schedule__descrition">
                Загнятия кроссифтом в группе с тренером
              </p>
            </div>
          </li>
          <li>
            <span className="schedule__time">8:00–9:00</span>
            <div>
              <span className="schedule__name">Crossfit</span>
              <p className="schedule__descrition">
                Загнятия кроссифтом в группе с тренером
              </p>
            </div>
          </li>
          <li>
            <span className="schedule__time">8:00–9:00</span>
            <div>
              <span className="schedule__name">Crossfit</span>
              <p className="schedule__descrition">
                Загнятия кроссифтом в группе с тренером
              </p>
            </div>
          </li>
          <li>
            <span className="schedule__time">8:00–9:00</span>
            <div>
              <span className="schedule__name">Crossfit</span>
              <p className="schedule__descrition">
                Загнятия кроссифтом в группе с тренером
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Schedule
