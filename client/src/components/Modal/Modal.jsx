import React, { useState } from 'react'
import ReactModal from 'react-modal'
import PropTypes from 'prop-types'
import RecordBlock from '@components/Record/RecordBlock'
import Success from '@components/Success/Success'

const Modal = ({
  isOpen,
  onRequestClose,
  isCamp,
  isFirst,
  hasTextarea,
  title,
  text,
}) => {
  const [submited, setSubmited] = useState(false)

  const onClickClose = () => {
    onRequestClose()
    setSubmited(false)
  }
  const onClickSubmit = () => setSubmited(true)

  return (
    <div>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={onClickClose}
        className="modal">
        <button
          type="button"
          onClick={onClickClose}
          className="promo__button-close">
          закрыть
        </button>
        {!submited ? (
          <RecordBlock
            title={title}
            text={text}
            onSubmit={onClickSubmit}
            isCamp={isCamp}
            hasTextarea={hasTextarea}
          />
        ) : (
          <Success isFirst={isFirst} />
        )}
      </ReactModal>
    </div>
  )
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  title: PropTypes.arrayOf(PropTypes.string).isRequired,
  text: PropTypes.string.isRequired,
  isCamp: PropTypes.bool,
  isFirst: PropTypes.bool,
  hasTextarea: PropTypes.bool,
}

Modal.defaultProps = {
  isCamp: false,
  isFirst: false,
  hasTextarea: false,
}

export default Modal
