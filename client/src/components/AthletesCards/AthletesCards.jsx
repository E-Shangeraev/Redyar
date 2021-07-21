import React, { useEffect, useState } from 'react'
import useHttp from '@hooks/http.hook'
import Title from '@generic/Title/Title'
import AthleteCard from '@components/AthleteCard/AthleteCard'
import photo1 from './1.png'
import photo2 from './2.png'
import photo3 from './3.png'
import photo4 from './4.png'

const AthletesCards = () => {
  const [athletes, setAthletes] = useState()
  const { request } = useHttp()

  // useEffect(async () => {
  //   const items = await request('/api/competing-athletes')
  //   setAthletes(items)
  // }, [])

  return (
    <section className="athletes-cards">
      <div className="wrapper">
        <Title>Соревнующиеся атлеты</Title>
        <div className="athletes-cards__list">
          <AthleteCard
            photo={photo1}
            name="Имя атлета"
            achievements="Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Iure quas eum alias excepturi sunt ad!"
          />
          <AthleteCard
            photo={photo2}
            name="Имя атлета"
            achievements="Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Iure quas eum alias excepturi sunt ad!"
          />
          <AthleteCard
            photo={photo3}
            name="Имя атлета"
            achievements="Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Iure quas eum alias excepturi sunt ad!"
          />
          <AthleteCard
            photo={photo4}
            name="Имя атлета"
            achievements="Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Iure quas eum alias excepturi sunt ad!"
          />
        </div>
      </div>
    </section>
  )
}

export default AthletesCards
