import React, { useCallback, useState } from 'react'
import Modal from 'react-modal'
import Form from '@generic/Form/Form'
import Input from '@generic/Input/Input'
import Textarea from '@generic/Textarea/Textarea'
import Select from '@generic/Select/Select'
import Button from '@generic/Button/Button'

const messangers = ['Telegram', 'Viber', 'WhatsUp']

const ModalFeedback = () => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [selectedMessanger, setSelectedMessanger] = useState(null)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const selectMessanger = useCallback(
    selectedItem => setSelectedMessanger(selectedItem),
    []
  )

  return (
    <div>
      <button className="promo__button-modal" type="button" onClick={openModal}>
        Написать нам
      </button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="modal">
        <div className="flex align-center mb2 gap2">
          <h3 className="title">напишите нам</h3>
          <p className="modal__text">
            Вы можете задать нам интересующие Вас вопросы. Заполните форму ниже
            и мы ответим Вам в ближайшее время
          </p>
        </div>
        <button
          type="button"
          onClick={closeModal}
          className="promo__button-close">
          закрыть
        </button>
        <Form>
          <div className="flex gap2">
            <div className="flex column gap2">
              <Input
                type="name"
                id="name-modal-feedback"
                placeholder="Иван"
                label="Ваше имя"
              />
              <Input
                type="tel"
                id="tel-modal-feedback"
                placeholder="+7 (___)-___-__-__"
                label="Номер телефона"
                mask="+7\ (999)-999-99-99"
              />
              <Select
                activeItem={selectedMessanger}
                onClickItem={selectMessanger}
                items={messangers}
                label="Выберите мессенджер для связи"
                id="select-messanger"
                outline
              />
              <Button type="submit">Записаться</Button>
            </div>
            <Textarea
              name="text"
              id="text-modal-feedback"
              placeholder="Введите ваш вопрос"
            />
          </div>
        </Form>
      </Modal>
    </div>
  )
}

export default ModalFeedback
