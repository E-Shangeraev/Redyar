import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import PropTypes from 'prop-types'

const About = ({ image, alt, text, items }) => (
  <section className="about">
    <div className="wrapper flex align-center">
      <picture className="about__image">
        <source
          srcSet={image.webpSmall}
          media="(max-width: 560px)"
          type="image/webp"
        />
        <source srcSet={image.jpgSmall} media="(max-width: 560px)" />
        <source srcSet={image.webp} type="image/webp" />
        <img src={image.jpg} alt={alt} />
      </picture>
      <div>
        <p className="about__text mb5">{text}</p>
        <ul className="about__list">
          {items.map(item => (
            <li key={uuidv4()}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  </section>
)

About.propTypes = {
  image: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  alt: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
}

export default About
