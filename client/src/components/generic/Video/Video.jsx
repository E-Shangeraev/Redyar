import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ModalVideo from 'react-modal-video'

const Video = ({ preview, alt, channel, url, videoId }) => {
  const [isOpen, setOpen] = useState(false)
  return (
    <div className="video">
      <img src={preview} alt={alt} />
      <ModalVideo
        channel={channel}
        autoplay
        isOpen={isOpen}
        videoId={videoId || null}
        url={url || null}
        onClose={() => setOpen(false)}
      />
      <div className="video__play-button">
        <button type="button" onClick={() => setOpen(true)}>
          <svg
            viewBox="0 0 152 152"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="76" cy="76" r="75.5" stroke="#F15C22" />
            <circle cx="75.9992" cy="75.5" r="44.6242" fill="#F15C22" />
            <path
              // eslint-disable-next-line max-len
              d="M86.8813 77.9951L71.2514 86.8751C69.9249 87.6279 68.2227 86.7163 68.2227 85.1986V67.4386C68.2227 65.9233 69.9225 65.0094 71.2514 65.7646L86.8813 74.6446C87.183 74.8133 87.4338 75.0571 87.6083 75.3513C87.7827 75.6455 87.8746 75.9796 87.8746 76.3198C87.8746 76.66 87.7827 76.9942 87.6083 77.2884C87.4338 77.5826 87.183 77.8264 86.8813 77.9951Z"
              fill="white"
            />
          </svg>
        </button>
        <span>Смотри видео</span>
      </div>
    </div>
  )
}

Video.propTypes = {
  preview: PropTypes.string.isRequired,
  channel: PropTypes.string.isRequired,
  url: PropTypes.string,
  videoId: PropTypes.string,
  alt: PropTypes.string.isRequired,
}

Video.defaultProps = {
  url: '',
  videoId: '',
}

export default Video
