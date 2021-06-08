import React from 'react'
import PropTypes from 'prop-types'

const RecordButton = ({ onClickHandle, children }) => (
  <button type="button" className="record-button" onClick={onClickHandle}>
    <span>{children}</span>
    <svg
      width="19"
      height="16"
      viewBox="0 0 19 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        // eslint-disable-next-line max-len
        d="M6.35288e-05 9L14.5861 9L9.29306 14.293L10.7071 15.707L18.4141 8L10.7071 0.293L9.29306 1.707L14.5861 7L6.37037e-05 7L6.35288e-05 9Z"
        fill="#f15c22"
      />
    </svg>
  </button>
)

RecordButton.propTypes = {
  onClickHandle: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
}

export default RecordButton
