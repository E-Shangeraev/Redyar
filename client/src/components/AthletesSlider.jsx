import React, { useEffect, useState } from 'react'
import useHttp from '@hooks/http.hook'
import CustomSlider from '@generic/CustomSlider/CustomSlider'
import PropTypes from 'prop-types'

const AthletesSlider = ({ title, settings, render, outerRight }) => {
  const [athletes, setAthletes] = useState([])
  const { request } = useHttp()

  useEffect(async () => {
    const items = await request('/api/athletes')
    setAthletes(items)
  }, [])

  const athletesArray = render(athletes)

  return (
    <CustomSlider
      title={title}
      settings={settings}
      items={athletesArray}
      outerRight={outerRight}
    />
  )
}

AthletesSlider.propTypes = {
  render: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
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
