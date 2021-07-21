import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import useHttp from '@hooks/http.hook'
import CustomSlider from '@generic/CustomSlider/CustomSlider'
import Worker from '@components/Worker/Worker'

const MerchSlider = () => {
  const [workers, setWorkers] = useState(null)
  const { request } = useHttp()

  useEffect(async () => {
    const items = await request('/api/workers')
    setWorkers(items)
  }, [])

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1601,
        settings: {
          initialSlide: 0,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          initialSlide: 0,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const slides =
    Array.isArray(workers) &&
    workers.map(item => (
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

  if (slides.length) {
    return (
      <CustomSlider
        title={['Наша команда']}
        settings={settings}
        id="team"
        outerRight>
        {slides}
      </CustomSlider>
    )
  }
  return null
}

export default MerchSlider
