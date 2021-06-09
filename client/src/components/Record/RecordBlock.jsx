import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import RecordForm from './RecordForm/RecordForm'

const RecordBlock = ({ title, text, isCamp, hasTextarea }) => (
  <div className={classNames('record__block', { 'flex gap2': !hasTextarea })}>
    <div
      className={classNames('flex', {
        'column space-around': !hasTextarea,
        'align-center mb2 gap2': hasTextarea,
      })}>
      <h3 className="title">
        {title && title.map(item => <span key={item}>{item}</span>)}
      </h3>
      <p className={classNames({ modal__text: hasTextarea })}>{text}</p>
    </div>
    <RecordForm isCamp={isCamp} hasTextarea={hasTextarea} />
  </div>
)

RecordBlock.propTypes = {
  title: PropTypes.arrayOf(PropTypes.string).isRequired,
  text: PropTypes.string.isRequired,
  isCamp: PropTypes.bool,
  hasTextarea: PropTypes.bool,
}

RecordBlock.defaultProps = {
  isCamp: false,
  hasTextarea: false,
}

export default RecordBlock
