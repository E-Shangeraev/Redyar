/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react'
import Video from '../generic/Video/Video'

import preview from '../../assets/img/Main/2.jpg'

const Founder = () => (
  <section className="founder">
    <div className="wrapper founder__wrapper">
      <h2 className="title">Основатель</h2>
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit
          auctor auctor dui nunc varius id enim magnis arcu. Amet aenean donec
          venenatis et gravida maecenas ornare tincidunt. Sed sit massa donec
          nam. Luctus purus placerat hendrerit cras tellus vel suspendisse
          auctor. In justo, in vitae lacinia elit, elit tincidunt eget. Tellus a
          semper orci vitae mi amet. In luctus sit rhoncus cras sed arcu ornare
          lobortis.
        </p>
      </div>
    </div>
  </section>
)

export default Founder
