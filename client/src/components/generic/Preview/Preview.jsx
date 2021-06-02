import React from 'react'
import PropTypes from 'prop-types'

const Preview = ({ img, category, title, date, id }) => (
  <figure className="preview">
    <img src={img} alt={title} />
    <figcaption>
      <b className="preview__category">{category}</b>
      <span className="preview__title">{title}</span>
      <div className="flex space-between">
        <a className="preview__link" href={`/api/articles/${id}`}>
          Читать дальше
        </a>
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
