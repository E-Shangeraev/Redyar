import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import PropTypes from 'prop-types'
import Preview from '@generic/Preview/Preview'

const url = 'https://redyar-images.s3.eu-west-1.amazonaws.com/'

const PreviewList = ({ items }) => (
  <div className="previews">
    {items.map(item => (
      <Preview
        key={uuidv4()}
        img={`${url}${item.uploadedFile.path}`}
        title={item.title}
        category={item.categoryName}
        date={item.publishedAt}
        // eslint-disable-next-line no-underscore-dangle
        id={item._id}
      />
    ))}
  </div>
)

PreviewList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
}

PreviewList.defaultProps = {
  items: [],
}

export default PreviewList
