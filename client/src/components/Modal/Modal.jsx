import React from 'react'
import ReactModal from 'react-modal'
import RecordBlock from '@components/Record/RecordBlock'
import PropTypes from 'prop-types'

const Modal = ({
  isOpen,
  onRequestClose,
  isCamp,
  hasTextarea,
  title,
  text,
}) => (
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
      <RecordBlock
        title={title}
        text={text}
        isCamp={isCamp}
        hasTextarea={hasTextarea}
      />
    </ReactModal>
  </div>
)

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  title: PropTypes.arrayOf(PropTypes.string).isRequired,
  text: PropTypes.string.isRequired,
  isCamp: PropTypes.bool,
  hasTextarea: PropTypes.bool,
}

Modal.defaultProps = {
  isCamp: false,
  hasTextarea: false,
}

export default Modal
