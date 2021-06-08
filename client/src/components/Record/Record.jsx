import React from 'react'
import PropTypes from 'prop-types'
import FeaturesBlocks from '@generic/FeaturesBlocks/FeaturesBlocks'
import RecordBlock from './RecordBlock'

const Record = ({ title, isCamp }) => (
  <section className="record">
    <div className="wrapper">
      <RecordBlock title={title} isCamp={isCamp} />
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
