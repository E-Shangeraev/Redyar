import React from 'react'

const RedyarHome = () => (
  <section className="redyar-home">
    <div className="wrapper">
      <div className="redyar-home__content">
        <h2 className="title">redyar home</h2>
        <p>
          Нет возможности заниматься в зале? Тогда подписывайся на наш инстаграм
          и тренируйся с нами по нашей домашней программе!
        </p>
        <ul>
          <li>
            <a href="/">Тренировки в любое время</a>
          </li>
          <li>
            <a href="/">Не выходя из дома</a>
          </li>
          <li>
            <a href="/">Бесплатно</a>
          </li>
        </ul>
        <a href="/" className="button">
          Подписаться
        </a>
      </div>
    </div>
  </section>
)

export default RedyarHome
