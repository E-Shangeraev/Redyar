import React, { useState } from 'react'
import Modal from 'react-modal'
import RecordButton from '@generic/RecordButton/RecordButton'
import RecordBlock from '@components/Record/RecordBlock'

const ModalRecord = () => {
  const [modalIsOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <div>
      <RecordButton onClickHandle={openModal}>Записаться</RecordButton>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="modal">
        <button
          type="button"
          onClick={closeModal}
          className="promo__button-close">
          закрыть
        </button>
        <RecordBlock title={['запись', 'на первое', 'занятие']} />
      </Modal>
    </div>
  )
}

export default ModalRecord
