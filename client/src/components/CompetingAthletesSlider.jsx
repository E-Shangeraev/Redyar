import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import useHttp from '@hooks/http.hook'
import DoubleSlider from '@generic/DoubleSlider/DoubleSlider'

const CompetingAthletesSlider = () => {
  const [photos, setPhotos] = useState([])
  const { request } = useHttp()

  useEffect(async () => {
    const items = await request('/api/competing-athletes')
    setPhotos(items)
  }, [])

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
  }

  const competitionsPhotos = photos.length
    ? photos.map(item => (
        <img
          // eslint-disable-next-line max-len
          src={`https://redyar-images.s3.eu-west-1.amazonaws.com/${item.uploadedFile.path}`}
          alt="фото с “лагеря”"
          key={uuidv4()}
        />
      ))
    : []

  return (
    <DoubleSlider
      title={['фотографии с соревнований']}
      settings={settings}
      items={competitionsPhotos}
    />
  )
}

export default CompetingAthletesSlider
