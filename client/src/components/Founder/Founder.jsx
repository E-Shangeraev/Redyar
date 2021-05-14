/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react'
import preview from '../../assets/img/Main/2.jpg'

const Founder = () => (
  <section className="founder">
    <div className="wrapper founder__wrapper">
      <h2 className="title">Основатель</h2>
      <video poster={preview}>
        <source
          type="video/youtube"
          src="https://www.youtube.com/watch?v=xgE37Jwo8OI"
        />
      </video>
    </div>
  </section>
)

export default Founder
