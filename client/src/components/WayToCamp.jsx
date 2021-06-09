import React, { useState } from 'react'
import RecordButton from '@generic/RecordButton/RecordButton'
import Modal from '@components/Modal/Modal'
import mapJpg from '@assets/img/Camp/8.jpg'

const WayToCamp = () => {
  const [modalIsOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <section className="way-to-camp">
      <div className="wrapper-w100-pl">
        <div className="flex align-center gap2">
          <div>
            <h2 className="title mb1">как добраться</h2>
            <p className="mb2">
              Вы можете добраться самостоятельно либо поехать с другими
              участниками клуба!
            </p>
            <RecordButton onClickHandle={openModal}>Записаться</RecordButton>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              title={['забронируйте', 'место в лагере', 'redyar']}
              text="Чтобы продолжить, заполните форму и мы ответим
              Вам в ближайшее время"
              isCamp
            />
          </div>
          <img src={mapJpg} alt="Карта" />
        </div>
      </div>
    </section>
  )
}

export default WayToCamp
