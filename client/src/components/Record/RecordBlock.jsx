import React from 'react'
import PropTypes from 'prop-types'
import RecordForm from './RecordForm/RecordForm'

const RecordBlock = ({ title, isCamp }) => (
  <div className="record__block">
    <div className="flex column space-around">
      <h2 className="title">
        {title && title.map(item => <span key={item}>{item}</span>)}
      </h2>
      <p>
        Запишитесь на первое бесплатное занятие, заполнив форму и получите
        приветственный бонус от нас
      </p>
    </div>
    <RecordForm {...{ isCamp }} />
  </div>
)

RecordBlock.propTypes = {
  title: PropTypes.arrayOf(PropTypes.string).isRequired,
  isCamp: PropTypes.bool,
}

RecordBlock.defaultProps = {
  isCamp: false,
}

export default RecordBlock
