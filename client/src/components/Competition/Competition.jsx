import React from 'react'
import PropTypes from 'prop-types'
import Button from '@generic/Button/Button'

const Competition = ({ img, name, text, complexity, openModalHandler }) => (
  <div>
    <div className="competition">
      <img src={img} alt={name} className="competition__photo" loading="lazy" />
      <div className="flex column">
        <span className="competition__name">{name}</span>
        <p className="competition__text">{text}</p>
        <span className="competition__complexity">
          Сложность: <b>{complexity}</b>
        </span>
        <Button onClickHandler={openModalHandler}>Участвовать</Button>
      </div>
    </div>
  </div>
)

Competition.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  complexity: PropTypes.string.isRequired,
  openModalHandler: PropTypes.func.isRequired,
}

export default Competition
