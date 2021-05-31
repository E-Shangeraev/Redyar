import React from 'react'
import FeaturesBlocks from '@generic/FeaturesBlocks/FeaturesBlocks'
import RecordForm from './RecordForm/RecordForm'

const Record = () => (
  <section className="record">
    <div className="wrapper">
      <div>
        <div>
          <h2 className="title">
            <span>Запись</span>
            <span>на первое</span>
            <span>занятие</span>
          </h2>
          <p>
            Запишитесь на первое бесплатное занятие, заполнив форму и получите
            приветственный бонус от нас
          </p>
        </div>
        <RecordForm />
      </div>
      <FeaturesBlocks
        items={[
          'Первый аффилированный CrossFit-зал в Красноярске',
          'Сертифицированные L-2 и L-1 тренеры',
          'Самый титулованный кроссфит-зал в городе',
        ]}
      />
    </div>
  </section>
)

export default Record
