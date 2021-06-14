import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'
import classNames from 'classnames'
import Card from '@generic/Card/Card'
import Button from '@generic/Button/Button'
import Modal from '@components/Modal/Modal'

const Cards = ({
  title,
  footnote,
  items,
  withBackground,
  description,
  modalTitle,
  modalText,
}) => {
  const [modalIsOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <section className={classNames('cards', { 'cards--bg': withBackground })}>
      <div className="wrapper">
        <div className="cards__top mb3">
          <h2 className="title">{title}</h2>
          <p className="cards__footnote">{footnote}</p>
        </div>
        <ul className="cards__list">
          {items &&
            items.map(item => (
              <Card
                key={uuidv4()}
                period={item.period}
                cost={item.cost}
                info={item.info}
                hit={item.isHit}
              />
            ))}
        </ul>
        <div className="cards__description">
          <p>{description}</p>
          <Button onClickHandler={openModal}>Оставить заявку</Button>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        title={modalTitle}
        text={modalText}
      />
    </section>
  )
}

Cards.propTypes = {
  title: PropTypes.string.isRequired,
  footnote: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
      PropTypes.number,
      PropTypes.any,
    ])
  ),
  withBackground: PropTypes.bool,
  description: PropTypes.string.isRequired,
  modalTitle: PropTypes.arrayOf(PropTypes.string).isRequired,
  modalText: PropTypes.string.isRequired,
}

Cards.defaultProps = {
  items: [],
  withBackground: false,
}

export default Cards
