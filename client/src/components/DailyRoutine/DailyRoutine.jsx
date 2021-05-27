import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import useHttp from '@hooks/http.hook'

const date = new Date()
const dayIndex = date.getDay() - 1

const DailyRoutine = () => {
  const { request } = useHttp()
  const [scheduleItems, setScheduleItems] = useState([])

  useEffect(async () => {
    const item = await request(`/api/schedule/${dayIndex}`)
    if (item) {
      setScheduleItems(item.schedule)
    }
  }, [])

  return (
    <section className="routine">
      <div className="wrapper">
        <h2 className="title">распорядок дня</h2>
      </div>
    </section>
  )
}

export default DailyRoutine
