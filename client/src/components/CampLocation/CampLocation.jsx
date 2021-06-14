import React, { useState } from 'react'
import RecordButton from '@generic/RecordButton/RecordButton'
import Modal from '@components/Modal/Modal'
import MyMap from '@components/MyMap/MyMap'

const CampLocation = () => {
  const [modalIsOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <section className="camp-location">
      <div className="wrapper-w100-pl">
        <div className="flex align-center">
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
          <div className="camp-location__map">
            <MyMap latitude={54.69995} longitude={90.189227} zoom={12} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CampLocation
