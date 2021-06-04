import React from 'react'
import Video from '@generic/Video/Video'
import PropTypes from 'prop-types'

import preview from '@assets/img/Main/2.jpg'

const Founder = ({ title }) => (
  <section className="founder">
    <div className="wrapper founder__wrapper">
      <h2 className="title">{title}</h2>
      <Video
        preview={preview}
        videoId="xgE37Jwo8OI"
        alt="Видео с основателем Crossfit Redyar"
      />
      <div className="founder__description pr">
        <span className="founder__name">Мосолов Андрей</span>
        <span className="founder__post">
          Основатель и главный тренер CrossFit RedYar
        </span>
        <p>
          Главное преимущество кроссфита заключается в разнообразии. В отличие
          от других круговых тренировок, кроссфит куда более интересен. Помимо
          всего прочего, в нем есть элемент соревнования, который мотивирует и
          придает вдохновения для новых свершений. Кроссфит подойдет тем, кто
          любит спорт всей душой и телом и готов выкладываться на тренировках по
          полной хоть каждый день. Помимо любителей, кроссфит подойдет и
          профессионалам, которые хотят поддерживать свою форму в надлежащем
          состоянии.
        </p>
      </div>
    </div>
  </section>
)

Founder.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Founder
