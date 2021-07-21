import React from 'react'
import Video from '@generic/Video/Video'
import Reviews from '@generic/Reviews/Reviews'
import preview from '@assets/img/Camp/7.jpg'
import PropTypes from 'prop-types'

const VideoReport = ({ twoColumns }) => (
  <section className="video-report">
    <div className="wrapper-w100-pl">
      <h2 className="title">Видеоотчет</h2>
      <Video
        preview={preview}
        channel="youtube"
        videoId="qhxIl6NtlSQ"
        alt="Видео с лагеря CrossFit Redyar"
      />
      <div className="pr">
        <Reviews reviewsFrom="camp" twoColumns={twoColumns} />
      </div>
    </div>
  </section>
)

VideoReport.propTypes = {
  twoColumns: PropTypes.bool,
}

VideoReport.defaultProps = {
  twoColumns: false,
}

export default VideoReport
