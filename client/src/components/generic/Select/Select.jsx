import React, { useEffect, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const Select = ({ label, id, activeItem, onClickItem, items }) => {
  const selectRef = useRef()
  const [visiblePopup, setVisiblePopup] = useState(false)
  const [focus, setFocus] = useState(false)

  const onFocusHandle = () => setFocus(true)

  const onBlurHandle = e => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setFocus(false)
    }
  }

  const toggleVisiblePopup = () => setVisiblePopup(!visiblePopup)

  const onSelectItem = item => {
    setFocus(false)
    onClickItem(item)
    setVisiblePopup(false)
  }

  const handleOutsideClick = e => {
    const path = e.path || (e.composedPath && e.composedPath())
    if (!path.includes(selectRef.current)) {
      setVisiblePopup(false)
      setFocus(false)
    }
  }

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick)
  }, [])

  return (
    <div
      ref={selectRef}
      className="select select-input"
      onFocus={onFocusHandle}
      onBlur={e => onBlurHandle(e)}>
      <label
        className={classNames('input', { 'input--focused': focus })}
        htmlFor={id}>
        <span>{label}</span>
        <input
          id={id}
          className="select__label"
          type="button"
          onClick={toggleVisiblePopup}
          value={activeItem || ''}
        />
        <svg
          className={visiblePopup ? 'rotated' : ''}
          width="15"
          height="9"
          viewBox="0 0 15 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M7.5 9L0 0H15L7.5 9Z" fill="#F15C22" />
        </svg>
      </label>
      {visiblePopup && (
        <div className="select__popup">
          <ul>
            {items.map(item => (
              <li key={uuidv4()}>
                <button
                  type="button"
                  className={activeItem === item ? 'active' : ''}
                  onClick={() => onSelectItem(item)}>
                  {item}
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
  activeItem: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickItem: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

Select.defaultProps = {
  activeItem: null,
}

export default Select
