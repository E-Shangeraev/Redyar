import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import useHttp from '@hooks/http.hook'
import DoubleSlider from '@generic/DoubleSlider/DoubleSlider'

const TeamPhotoSlider = () => {
  const [photos, setPhotos] = useState([])
  const { request } = useHttp()

  useEffect(async () => {
    const items = await request('/api/team-photo')
    setPhotos(items)
  }, [])

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
  }

  const teamPhotos = photos.length
    ? photos.map(item => (
        <img
          // eslint-disable-next-line max-len
          src={`https://redyar-images.s3.eu-west-1.amazonaws.com/${item.uploadedFile.path}`}
          alt="Фото команды"
          key={uuidv4()}
          loading="lazy"
        />
      ))
    : []

  return (
    <DoubleSlider title="Фото команды" settings={settings} items={teamPhotos} />
  )
}

export default TeamPhotoSlider
