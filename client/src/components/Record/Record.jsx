import React from 'react'
import PropTypes from 'prop-types'
import FeaturesBlocks from '@generic/FeaturesBlocks/FeaturesBlocks'
import RecordForm from './RecordForm/RecordForm'

const Record = ({ title, isCamp }) => (
  <section className="record">
    <div className="wrapper">
      <div className="flex space-between">
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
      <FeaturesBlocks
        items={[
          'Первый аффилированный CrossFit-зал в Красноярске',
          'Сертифицированные L-2 и L-1 тренеры',
          'Самый титулованный кроссфит-зал в городе',
        ]}
      />
    </div>
  </section>
)

Record.propTypes = {
  title: PropTypes.arrayOf(PropTypes.string).isRequired,
  isCamp: PropTypes.bool,
}

Record.defaultProps = {
  isCamp: false,
}

export default Record
