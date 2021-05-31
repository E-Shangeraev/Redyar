import React, { useEffect, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import PropTypes from 'prop-types'

const Select = ({ activeDayIndex, onClickDay, items }) => {
  const selectRef = useRef()
  const [visiblePopup, setVisiblePopup] = useState(false)

  const toggleVisiblePopup = () => setVisiblePopup(!visiblePopup)

  const onSelectItem = day => {
    onClickDay(day)
    setVisiblePopup(false)
  }

  const handleOutsideClick = e => {
    const path = e.path || (e.composedPath && e.composedPath())
    if (!path.includes(selectRef.current)) {
      setVisiblePopup(false)
    }
  }

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick)
  }, [])

  return (
    <div ref={selectRef} className="select">
      <div className="select__label">
        <b>День недели:</b>
        <button type="button" onClick={toggleVisiblePopup}>
          {items[activeDayIndex]}
        </button>
        <svg
          className={visiblePopup ? 'rotated' : ''}
          width="15"
          height="9"
          viewBox="0 0 15 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M7.5 9L0 0H15L7.5 9Z" fill="#F15C22" />
        </svg>
      </div>
      {visiblePopup && (
        <div className="select__popup">
          <ul>
            {items.map((day, index) => (
              <li key={uuidv4()}>
                <button
                  type="button"
                  className={activeDayIndex === index ? 'active' : ''}
                  onClick={() => onSelectItem(index)}>
                  {day}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

Select.propTypes = {
  activeDayIndex: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickDay: PropTypes.func.isRequired,
}

export default Select
