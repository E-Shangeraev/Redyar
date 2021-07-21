import React from 'react'
import Video from '@generic/Video/Video'
import PropTypes from 'prop-types'

import preview from '@assets/img/Main/2.jpg'
import photo from './1.png'

const Founder = ({ title, channel, url, videoId }) => (
  <section className="founder">
    <div className="wrapper founder__wrapper">
      <h2 className="title">{title}</h2>
      <Video
        preview={preview}
        channel={channel}
        videoId={videoId || null}
        url={url || null}
        alt="Видео с основателем CrossFit Redyar"
      />
      <div className="founder__container pr">
        <div className="founder__photo">
          <img
            src={photo}
            alt="Мосолов Андрей — основатель и главный тренер CrossFit Redyar"
          />
        </div>
        <div>
          <span className="founder__name">Мосолов Андрей</span>
          <span className="founder__post">
            Основатель и главный тренер CrossFit Redyar
          </span>
          <p className="founder__cite">
            «Почему именно CrossFit? Это самая эффективная из всех существующих
            фитнес-систем. Вы добьётесь результата максимально быстро. Он
            абсолютно безопасен и подходит для людей любого уровня подготовки и
            возраста. Его можно использовать даже для людей с ограниченными
            возможностями. CrossFit очень вариативен: он использует много
            функциональных движений. Вы никогда не устанете от рутины. И,
            наконец, CrossFit — это комьюнити. Хотите много новых друзей и
            знакомств — вам в CrossFit Redyar!»
          </p>
        </div>
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
