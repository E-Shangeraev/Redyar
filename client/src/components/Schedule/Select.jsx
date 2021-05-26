/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import PropTypes from 'prop-types'

const weekDays = [
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
  'Воскресенье',
]

const Select = ({ onClickSortType, today }) => {
  const selectRef = useRef()
  const [visiblePopup, setVisiblePopup] = useState(false)

  const toggleVisiblePopup = () => setVisiblePopup(!visiblePopup)

  const onSelectItem = index => {
    onClickSortType(index)
    setVisiblePopup(false)
  }

  return (
    <div ref={selectRef} className="select">
      <div className="select__label">
        <b>Сегодня:</b>
        <button type="button" onClick={toggleVisiblePopup}>
          понедельник
        </button>
        <svg
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
            {weekDays.map((day, index) => (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events
              <li key={uuidv4()}>
                <button
                  type="button"
                  className={today === day ? 'active' : ''}
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
  today: PropTypes.string.isRequired,
  onClickSortType: PropTypes.func.isRequired,
}

export default Select
