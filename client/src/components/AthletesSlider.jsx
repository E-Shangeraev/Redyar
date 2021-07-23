import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'
import useHttp from '@hooks/http.hook'
import CustomSlider from '@generic/CustomSlider/CustomSlider'
import Athlete from '@components/Athlete/Athlete'

const AthletesSlider = ({ title, settings, outerRight }) => {
  const [athletes, setAthletes] = useState(null)
  const { request } = useHttp()

  useEffect(async () => {
    const items = await request('/api/athletes')
    setAthletes(items)
  }, [])

  const athletesArray =
    Array.isArray(athletes) &&
    athletes.map(item => (
      <Athlete
        key={uuidv4()}
        // eslint-disable-next-line max-len
        photo={`https://redyar-images.s3.eu-west-1.amazonaws.com/${item.uploadedFile.path}`}
        name={item.name}
        rank={item.rank}
        outerRight
      />
    ))

  if (athletesArray.length) {
    return (
      <CustomSlider title={title} settings={settings} outerRight={outerRight}>
        {athletesArray}
      </CustomSlider>
    )
  }
  return null
}

AthletesSlider.propTypes = {
  title: PropTypes.arrayOf(PropTypes.string).isRequired,
  settings: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.bool,
      PropTypes.string,
      PropTypes.array,
    ])
  ).isRequired,
  outerRight: PropTypes.bool.isRequired,
}

export default AthletesSlider
