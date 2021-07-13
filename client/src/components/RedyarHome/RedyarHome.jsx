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
          <li>Тренировки в любое время</li>
          <li>Не выходя из дома</li>
          <li>Бесплатно</li>
        </ul>
        <a
          href="https://www.instagram.com/CrossFitredyar/"
          className="button"
          target="_blank"
          rel="noreferrer">
          Подписаться
        </a>
      </div>
    </div>
  </section>
)

export default RedyarHome
