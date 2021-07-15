import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { getMerch } from '@redux/actions/merch'
import useHttp from '@hooks/http.hook'
import CustomSlider from '@generic/CustomSlider/CustomSlider'
import Merch from '@components/Merch/Merch'

const MerchSlider = () => {
  const dispatch = useDispatch()
  const { request } = useHttp()
  const items = useSelector(({ merch }) => merch.items)
  const isLoaded = useSelector(({ merch }) => merch.isLoaded)

  useEffect(() => {
    dispatch(getMerch(request))
  }, [])

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1601,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <CustomSlider title="Мерч" settings={settings} outerRight>
      {isLoaded && [
        ...items.map(item => (
          <Merch
            key={uuidv4()}
            // eslint-disable-next-line max-len
            img={`https://redyar-images.s3.eu-west-1.amazonaws.com/${item.uploadedFile.path}`}
            name={item.name}
            price={item.price}
            sizes={item.sizes}
          />
        )),
        ...items.map(item => (
          <Merch
            key={uuidv4()}
            // eslint-disable-next-line max-len
            img={`https://redyar-images.s3.eu-west-1.amazonaws.com/${item.uploadedFile.path}`}
            name={item.name}
            price={item.price}
            sizes={item.sizes}
          />
        )),
      ]}
    </CustomSlider>
  )
}

export default MerchSlider
