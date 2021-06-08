import React, { useState } from 'react'
import Modal from 'react-modal'
import RecordBlock from '@components/Record/RecordBlock'
import RecordButton from '@generic/RecordButton/RecordButton'

const ModalCompetition = () => {
  const [modalIsOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <div>
      <RecordButton onClickHandle={openModal}>забронировать место</RecordButton>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="modal">
        <button
          type="button"
          onClick={closeModal}
          className="promo__button-close">
          закрыть
        </button>
        <RecordBlock
          title={['забронируйте', 'место в лагере', 'redyar']}
          text="Чтобы продолжить, заполните форму и мы ответим
          Вам в ближайшее время"
          isCamp
        />
      </Modal>
    </div>
  )
}

export default ModalCompetition
