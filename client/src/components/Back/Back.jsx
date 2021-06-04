import React, { memo } from 'react'
import { useHistory } from 'react-router-dom'
import icon from './back.svg'

const Back = memo(() => {
  const history = useHistory()

  return (
    <button type="button" className="back" onClick={history.goBack}>
      <object data={icon} type="image/svg+xml">
        Your browser does not support SVG
      </object>
      Назад
    </button>
  )
})

export default Back
