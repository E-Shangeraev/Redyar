import React, { useState } from 'react'
import Modal from 'react-modal'
import Form from '@generic/Form/Form'
import Input from '@generic/Input/Input'
import Textarea from '@generic/Textarea/Textarea'
import Button from '@generic/Button/Button'

const modalStyles = {
  content: {
    position: 'absolute',
    padding: '80px 100px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '30px',
    border: 'none',
    backgroundColor: '#000',
    zIndex: '999999',
  },
}

const ModalFeedback = () => {
  const [modalIsOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <div>
      <button className="promo__button-modal" type="button" onClick={openModal}>
        Написать нам
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyles}>
        <div className="flex space-between align-center mb2">
          <h3 className="title">напишите нам</h3>
          <p className="modal__text">
            Вы можете задать нам интересующие Вас вопросы. Заполните форму ниже
            и мы ответим Вам в ближайшее время
          </p>
        </div>
        <Form>
          <div className="flex">
            <div className="flex column gap2">
              <Input
                type="name"
                id="name"
                placeholder="Иван"
                label="Ваше имя"
              />
              <Input
                type="tel"
                id="tel"
                placeholder="+7 (___)-___-__-__"
                label="Номер телефона"
              />
              <Input
                type="email"
                id="email"
                placeholder="iivan@mail.com"
                label="Email"
              />
              <Button type="submit">Записаться</Button>
            </div>
            <Textarea name="text" id="text" placeholder="Введите ваш вопрос" />
          </div>
        </Form>
      </Modal>
    </div>
  )
}

export default ModalFeedback
