import React from 'react'
import PropTypes from 'prop-types'

const SliderArrow = ({ onClickHandle, type }) => {
  if (type === 'prev') {
    return (
      <button type="button" onClick={onClickHandle} className="slider-arrow">
        <svg
          width="19"
          height="16"
          viewBox="0 0 19 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            // eslint-disable-next-line max-len
            d="M18.9999 7H4.41394L9.70694 1.707L8.29294 0.292999L0.585938 8L8.29294 15.707L9.70694 14.293L4.41394 9H18.9999V7Z"
            fill="white"
          />
        </svg>
      </button>
    )
  }
  return (
    <button
      type="button"
      onClick={onClickHandle}
      className="slider-arrow slider-arrow--orange">
      <svg
        width="19"
        height="16"
        viewBox="0 0 19 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          // eslint-disable-next-line max-len
          d="M6.35288e-05 9L14.5861 9L9.29306 14.293L10.7071 15.707L18.4141 8L10.7071 0.293L9.29306 1.707L14.5861 7L6.37037e-05 7L6.35288e-05 9Z"
          fill="white"
        />
      </svg>
    </button>
  )
}

SliderArrow.propTypes = {
  onClickHandle: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
}

export default SliderArrow
