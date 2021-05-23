import React from 'react'
import Button from '../../generic/Button/Button'

const RecordForm = () => (
  <form className="record__form">
    <label htmlFor="name">
      <span>Ваше имя</span>
      <input type="name" placeholder="Иван" />
    </label>
    <label htmlFor="tel">
      <span>Номер телефона</span>
      <input type="tel" id="tel" placeholder="+7 (___)-___-__-__" />
    </label>
    <label htmlFor="email">
      <span>Email</span>
      <input type="email" id="email" placeholder="iivan@mail.com" />
    </label>
    <Button>Записаться</Button>
  </form>
)

export default RecordForm
