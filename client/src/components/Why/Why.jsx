import React, { useState } from 'react'
import Title from '@generic/Title/Title'
import RecordButton from '@generic/RecordButton/RecordButton'
import Modal from '@components/Modal/Modal'

const Why = () => {
  const [modalIsOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <section className="why">
      <div className="wrapper">
        <div className="why__flex">
          <Title className="why__title">
            <span>Зачем</span>
            <span>приходить</span>
            <span>к нам</span>
          </Title>
          <div>
            <p className="mb1">
              CrossFit — не просто тренировки и фитнес. Для нас — это образ
              жизни. Мы любим менять людей и помогаем им становится лучше.
            </p>
            <RecordButton onClickHandle={openModal}>Записаться</RecordButton>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              title={['запись', 'на первое', 'занятие']}
              text="Запишитесь на первое бесплатное занятие.
              Заполните форму и мы ответим Вам в ближайшее время"
            />
          </div>
        </div>
        <ul className="why__features">
          <li>
            <span>8 лет</span>
            <p>преподаём кроссфит</p>
          </li>
          <li>
            <span>54</span>
            <p>
              обычных людей стали соревнующимися атлетами или кроссфит-тренерами
            </p>
          </li>
          <li>
            <span>7 кг</span>
            <p>
              жира теряют люди в среднем за 2 месяца, занимаясь в CrossFit
              Redyar
            </p>
          </li>
          <li>
            <span>40</span>
            <p>
              приседаний в минуту способен сделать каждый спустя 2 месяца
              тренировок
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Why
