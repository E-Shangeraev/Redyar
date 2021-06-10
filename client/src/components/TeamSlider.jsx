import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import useHttp from '@hooks/http.hook'
import CustomSlider from '@generic/CustomSlider/CustomSlider'
import Worker from '@components/Worker/Worker'

const MerchSlider = () => {
  const [workers, setWorkers] = useState([])
  const { request } = useHttp()

  useEffect(async () => {
    const items = await request('/api/workers')
    setWorkers(items)
  }, [])

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1601,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const teammates = workers.length
    ? workers.map(item => (
        <Worker
          key={uuidv4()}
          // eslint-disable-next-line max-len
          photo={`https://redyar-images.s3.eu-west-1.amazonaws.com/${item.uploadedFile.path}`}
          name={item.name}
          post={item.post}
          achievements={item.achievements}
          addition={item.addition}
          socials={item.socials}
        />
      ))
    : []

  return (
    <CustomSlider
      title="Наша команда"
      settings={settings}
      items={[...teammates, ...teammates]}
      outerRight
    />
  )
}

export default MerchSlider
