import React from 'react'
import Modal from 'react-modal'
import RecordBlock from '@components/Record/RecordBlock'
import PropTypes from 'prop-types'

const ModalCompetition = ({ isOpen, onRequestClose }) => (
  <div>
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="modal">
      <button
        type="button"
        onClick={onRequestClose}
        className="promo__button-close">
        закрыть
      </button>
      <RecordBlock
        title={['запись', 'на соревнование']}
        text="Чтобы продолжить, заполните форму и мы ответим
          Вам в ближайшее время"
        onSubmit={() => {}}
      />
    </Modal>
  </div>
)

ModalCompetition.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
}

export default ModalCompetition
