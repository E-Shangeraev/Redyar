import React from 'react'

const Why = () => (
  <section className="why">
    <div className="wrapper">
      <div className="why__flex">
        <h2 className="title">
          <span>Зачем</span>
          <span>приходить</span>
          <span>к нам</span>
        </h2>
        <div>
          <p>
            CrossFit - не просто тренировки и фитнес. Для нас - это образ жизни.
            Мы любим менять людей и помогаем им становится лучше.
          </p>
          <a href="/">
            <span>Записаться</span>
            <svg
              width="19"
              height="16"
              viewBox="0 0 19 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                // eslint-disable-next-line max-len
                d="M6.35288e-05 9L14.5861 9L9.29306 14.293L10.7071 15.707L18.4141 8L10.7071 0.293L9.29306 1.707L14.5861 7L6.37037e-05 7L6.35288e-05 9Z"
                fill="#f15c22"
              />
            </svg>
          </a>
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
