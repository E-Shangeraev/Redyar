import React from 'react'
import RecordButton from '@generic/RecordButton/RecordButton'

const Why = () => (
  <section className="why mb5">
    <div className="wrapper">
      <div className="why__flex">
        <h2 className="title">
          <span>Зачем</span>
          <span>приходить</span>
          <span>к нам</span>
        </h2>
        <div>
          <p className="mb2">
            CrossFit - не просто тренировки и фитнес. Для нас - это образ жизни.
            Мы любим менять людей и помогаем им становится лучше.
          </p>
          <RecordButton>Записаться</RecordButton>
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
            жира теряют люди в среднем за 2 месяца, занимаясь в CrossFit Redyar
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

export default Why
