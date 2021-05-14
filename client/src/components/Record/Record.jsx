import React from 'react'
import RecordForm from './RecordForm/RecordForm'

const Record = () => (
  <section className="record">
    <div className="wrapper">
      <div>
        <div>
          <h2 className="title">
            <span>Запись</span>
            <br />
            <span>на первое</span>
            <br />
            <span>занятие</span>
            <br />
          </h2>
          <p>
            Запишитесь на первое бесплатное занятие, заполнив форму и получите
            приветственный бонус от нас
          </p>
        </div>
        <RecordForm />
      </div>
      <ul className="record__features">
        <li>
          <span>01</span>
          <span>Первый аффилированный CrossFit-зал в Красноярске</span>
        </li>
        <li>
          <span>02</span>
          <span>Сертифицированные L-2 и L-1 тренеры</span>
        </li>
        <li>
          <span>03</span>
          <span>Самый титулованный кроссфит-зал в городе</span>
        </li>
      </ul>
    </div>
  </section>
)

export default Record
