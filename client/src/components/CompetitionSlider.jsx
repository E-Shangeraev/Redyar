import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { getCompetitions } from '@redux/actions/competitions'
import useHttp from '@hooks/http.hook'
import CustomSlider from '@generic/CustomSlider/CustomSlider'
import Competition from '@components/Competition/Competition'

const CompetitionSlider = () => {
  const dispatch = useDispatch()
  const { request } = useHttp()
  const items = useSelector(({ competitions }) => competitions.items)
  const isLoaded = useSelector(({ competitions }) => competitions.isLoaded)

  useEffect(() => {
    dispatch(getCompetitions(request))
  }, [])

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  }

  const competitions = isLoaded
    ? items.map(item => (
        <Competition
          key={uuidv4()}
          // eslint-disable-next-line max-len
          img={`https://redyar-images.s3.eu-west-1.amazonaws.com/${item.uploadedFile.path}`}
          name={item.name}
          text={item.text}
          complexity={item.complexity}
        />
      ))
    : []

  return (
    <CustomSlider
      title="Виды соревнований"
      settings={settings}
      items={[...competitions, ...competitions]}
    />
  )
}

export default CompetitionSlider
