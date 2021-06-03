import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Preview = ({ img, category, title, date, id }) => (
  <figure className="preview">
    <img src={img} alt={title} />
    <figcaption>
      <b className="category">{category}</b>
      <span className="preview__title">{title}</span>
      <div className="flex space-between">
        <Link className="preview__link" to={`/blog/${id}`}>
          Читать дальше
        </Link>
        <time className="preview__date" pubdate={date}>
          {new Intl.DateTimeFormat().format(new Date(date))}
        </time>
      </div>
    </figcaption>
  </figure>
)

Preview.propTypes = {
  img: PropTypes.string,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  // eslint-disable-next-line react/no-typos
  date: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}

Preview.defaultProps = {
  img: '',
}

export default Preview
