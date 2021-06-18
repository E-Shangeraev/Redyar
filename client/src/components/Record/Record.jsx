import React, { useState } from 'react'
import PropTypes from 'prop-types'
import FeaturesBlocks from '@generic/FeaturesBlocks/FeaturesBlocks'
import ModalSuccess from '@components/Modal/ModalSuccess'
import RecordBlock from './RecordBlock'

const Record = ({ title, text, isCamp, isFirst }) => {
  const [modalIsOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <section className="record">
      <div className="wrapper">
        <RecordBlock
          title={title}
          text={text}
          isCamp={isCamp}
          onSubmit={openModal}
        />
        <FeaturesBlocks
          items={[
            'Первый аффилированный CrossFit-зал в Красноярске',
            'Сертифицированные L-2 и L-1 тренеры',
            'Самый титулованный кроссфит-зал в городе',
          ]}
        />
      </div>
      <ModalSuccess
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        isFirst={isFirst}
      />
    </section>
  )
}

Record.propTypes = {
  title: PropTypes.arrayOf(PropTypes.string).isRequired,
  text: PropTypes.string.isRequired,
  isCamp: PropTypes.bool,
  isFirst: PropTypes.bool,
}

Record.defaultProps = {
  isCamp: false,
  isFirst: false,
}

export default Record
