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
      <div className="why__features">
        <div>
          <span>8 лет</span>
          <p>преподаём кроссфит</p>
        </div>
        <div>
          <span>54</span>
          <p>
            обычных людей стали соревнующимися атлетами или кроссфит-тренерами
          </p>
        </div>
        <div>
          <span>7 кг</span>
          <p>
            жира теряют люди в среднем за 2 месяца, занимаясь в CrossFit Redyar
          </p>
        </div>
        <div>
          <span>40</span>
          <p>
            приседаний в минуту способен сделать каждый спустя 2 месяца
            тренировок
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default Why
