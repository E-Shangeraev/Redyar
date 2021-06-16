import React, { useEffect, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const Select = ({ label, activeItem, onClickItem, items, outline }) => {
  const selectRef = useRef()
  const [visiblePopup, setVisiblePopup] = useState(false)
  const [focus, setFocus] = useState(false)

  const id = uuidv4()

  const onFocusHandle = () => setFocus(true)

  const onBlurHandle = e => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setFocus(false)
    }
  }

  const toggleVisiblePopup = () => setVisiblePopup(!visiblePopup)

  const onSelectItem = item => {
    onClickItem(item)
    setFocus(false)
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
      className={classNames('select', {
        'select--outline': outline,
        'select--focused': focus,
      })}
      onFocus={onFocusHandle}
      onBlur={e => onBlurHandle(e)}>
      <label className="select__label" htmlFor={id} aria-haspopup="true">
        <span>{label}</span>
        <input
          id={id}
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
          <ul role="menu">
            {items.map(item => (
              <li key={uuidv4()} role="none">
                <button
                  type="button"
                  role="menuitem"
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
  label: PropTypes.string.isRequired,
  outline: PropTypes.bool,
}

Select.defaultProps = {
  activeItem: null,
  outline: false,
}

export default Select
