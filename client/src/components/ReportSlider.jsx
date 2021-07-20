import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import useHttp from '@hooks/http.hook'
import DoubleSlider from '@generic/DoubleSlider/DoubleSlider'

const ReportSlider = () => {
  const [photos, setPhotos] = useState(null)
  const { request } = useHttp()

  useEffect(async () => {
    const fetchedPhotos = await request('/api/report')
    const items = fetchedPhotos.map(item => (
      <img
        // eslint-disable-next-line max-len
        src={`https://redyar-images.s3.eu-west-1.amazonaws.com/${item.uploadedFile.path}`}
        alt="Фотографии тренировок"
        key={uuidv4()}
      />
    ))
    setPhotos(items)
  }, [])

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
  }

  if (photos) {
    return (
      <DoubleSlider title={['Галерея']} settings={settings} items={photos} />
    )
  }
  return null
}

export default ReportSlider
