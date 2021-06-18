import React from 'react'
import ReactModal from 'react-modal'
import PropTypes from 'prop-types'
import Success from '@components/Success/Success'

const ModalSuccess = ({ isOpen, onRequestClose, isFirst }) => (
  <div>
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal">
      <button
        type="button"
        onClick={onRequestClose}
        className="promo__button-close">
        закрыть
      </button>
      <Success isFirst={isFirst} />
    </ReactModal>
  </div>
)

ModalSuccess.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  isFirst: PropTypes.bool,
}

ModalSuccess.defaultProps = {
  isFirst: false,
}

export default ModalSuccess
