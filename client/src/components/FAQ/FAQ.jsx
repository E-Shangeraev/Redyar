import React from 'react'
import PropTypes from 'prop-types'

const FAQ = ({ title }) => (
  <section className="faq">
    <div className="wrapper">
      <h2 className="title">{title}</h2>
    </div>
  </section>
)

FAQ.propTypes = {
  title: PropTypes.string.isRequired,
}

export default FAQ
