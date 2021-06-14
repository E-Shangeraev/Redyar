import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import classNames from 'classnames'
import useHttp from '@hooks/http.hook'

const AwardsTabs = () => {
  const [clubAwards, setClubAwards] = useState([])
  const [athleteAwards, setAthleteAwards] = useState([])
  const [activeTab, setActiveTab] = useState(1)
  const { request } = useHttp()
  const url = 'https://redyar-images.s3.eu-west-1.amazonaws.com/'

  useEffect(async () => {
    const clubItems = await request('/api/awards/club')
    const athleteItems = await request('/api/awards/athlete')

    setClubAwards(clubItems)
    setAthleteAwards(athleteItems)
  }, [])

  return (
    <section className="awards">
      <div className="wrapper">
        <div className="flex mb3">
          <button
            type="button"
            className={classNames({ active: activeTab === 1 })}
            onClick={() => setActiveTab(1)}>
            <b className="title">награды клуба</b>
          </button>
          <button
            type="button"
            className={classNames({ active: activeTab === 2 })}
            onClick={() => setActiveTab(2)}>
            <b className="title">награды атлетов</b>
          </button>
        </div>
        {activeTab === 1 ? (
          <div className="awards__tab">
            <ul className="awards__list">
              {clubAwards &&
                clubAwards.map(item => (
                  <li key={uuidv4()}>
                    <img
                      className="awards__img"
                      src={`${url}${item.uploadedFile.path}`}
                      alt={item.title}
                    />
                    <b className="awards__title">{item.title}</b>
                    <p className="awards__text">{item.text}</p>
                  </li>
                ))}
            </ul>
          </div>
        ) : null}
        {activeTab === 2 ? (
          <div className="awards__tab">
            <ul className="awards__list">
              {athleteAwards &&
                athleteAwards.map(item => (
                  <li key={uuidv4()}>
                    <img
                      className="awards__img"
                      src={`${url}${item.uploadedFile.path}`}
                      alt={item.title}
                    />
                    <b className="awards__title">{item.title}</b>
                    <p className="awards__text">{item.text}</p>
                  </li>
                ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default AwardsTabs
