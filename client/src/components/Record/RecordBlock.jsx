import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Title from '@generic/Title/Title'
import RecordForm from './RecordForm/RecordForm'

const RecordBlock = ({ title, text, isCamp, hasTextarea, onSubmit }) => (
  <div className={classNames('record__block', { flex: !hasTextarea })}>
    <div
      className={classNames('flex', {
        'column space-around': !hasTextarea,
        'align-center mb2': hasTextarea,
      })}>
      <Title className="record__title">
        {title && title.map(item => <span key={item}>{item}</span>)}
      </Title>
      <p className={classNames({ modal__text: hasTextarea })}>{text}</p>
    </div>
    <RecordForm isCamp={isCamp} hasTextarea={hasTextarea} onSubmit={onSubmit} />
  </div>
)

RecordBlock.propTypes = {
  title: PropTypes.arrayOf(PropTypes.string).isRequired,
  text: PropTypes.string.isRequired,
  isCamp: PropTypes.bool,
  hasTextarea: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
}

RecordBlock.defaultProps = {
  isCamp: false,
  hasTextarea: false,
}

export default RecordBlock
