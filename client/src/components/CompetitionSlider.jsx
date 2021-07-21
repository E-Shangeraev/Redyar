import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { getCompetitions } from '@redux/actions/competitions'
import useHttp from '@hooks/http.hook'
import CustomSlider from '@generic/CustomSlider/CustomSlider'
import Competition from '@components/Competition/Competition'
import ModalCompetition from '@components/Modal/ModalCompetition'

const CompetitionSlider = () => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()
  const { request } = useHttp()
  const items = useSelector(({ competitions }) => competitions.items)
  const isLoaded = useSelector(({ competitions }) => competitions.isLoaded)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    dispatch(getCompetitions(request))
  }, [])

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <>
      <CustomSlider
        title={['Наши турниры']}
        settings={settings}
        id="competitions">
        {isLoaded && [
          ...items.map(item => (
            <Competition
              key={uuidv4()}
              // eslint-disable-next-line max-len
              img={`https://redyar-images.s3.eu-west-1.amazonaws.com/${item.uploadedFile.path}`}
              name={item.name}
              text={item.text}
              complexity={item.complexity}
              openModalHandler={openModal}
            />
          )),
          ...items.map(item => (
            <Competition
              key={uuidv4()}
              // eslint-disable-next-line max-len
              img={`https://redyar-images.s3.eu-west-1.amazonaws.com/${item.uploadedFile.path}`}
              name={item.name}
              text={item.text}
              complexity={item.complexity}
              openModalHandler={openModal}
            />
          )),
        ]}
      </CustomSlider>
      <ModalCompetition isOpen={modalIsOpen} onRequestClose={closeModal} />
    </>
  )
}

export default CompetitionSlider
