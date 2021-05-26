import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import useHttp from '@hooks/http.hook'
import CustomSlider from '@generic/CustomSlider/CustomSlider'
import Athlete from '@components/Athlete/Athlete'

const AthletesSlider = () => {
  const [athletes, setAthletes] = useState([])
  const { request } = useHttp()

  useEffect(async () => {
    const items = await request('/api/athletes')
    setAthletes(items)
  }, [])

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  const athletesArray = athletes.length
    ? athletes.map(item => (
        <Athlete
          key={uuidv4()}
          // eslint-disable-next-line max-len
          photo={`https://redyar-images.s3.eu-west-1.amazonaws.com/${item.uploadedFile.path}`}
          name={item.name}
          achievements={item.achievements}
        />
      ))
    : []

  return (
    <CustomSlider
      title="Известные атлеты"
      settings={settings}
      items={athletesArray}
      outerRight
    />
  )
}

export default AthletesSlider
