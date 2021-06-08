import React from 'react'
import Video from '@generic/Video/Video'
import PropTypes from 'prop-types'

import preview from '@assets/img/Main/2.jpg'

const Founder = ({ title, channel, url, videoId }) => (
  <section className="founder">
    <div className="wrapper founder__wrapper">
      <h2 className="title">{title}</h2>
      <Video
        preview={preview}
        channel={channel}
        videoId={videoId || null}
        url={url || null}
        alt="Видео с основателем Crossfit Redyar"
      />
      <div className="founder__description pr">
        <span className="founder__name">Мосолов Андрей</span>
        <span className="founder__post">
          Основатель и главный тренер CrossFit RedYar
        </span>
        <p>
          Почему именно CrossFit? Это самая эффективная из всех существующих
          фитнес-систем. Вы добъётесь результата максимально быстро. Он
          абсолютно безопасен и подходит для людей любого уровня подготовкии и
          возраста. Его можно использовать даже для людей с ограниченными
          возможностями. CrossFit очень вариантивен: он использует много
          функциональных движений. Вы никогда не устанете от рутины. И, наконец,
          CrossFit - это комьюнити. Хотите много новых друзей и знакомств - вам
          в CrossFit Redyar!
        </p>
      </div>
    </div>
  </section>
)

Founder.propTypes = {
  title: PropTypes.string.isRequired,
  channel: PropTypes.string.isRequired,
  videoId: PropTypes.string,
  url: PropTypes.string,
}

Founder.defaultProps = {
  videoId: '',
  url: '',
}

export default Founder
