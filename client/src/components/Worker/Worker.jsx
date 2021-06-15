import React from 'react'
import PropTypes from 'prop-types'
import vkIcon from '@assets/icons/vk.png'
import instIcon from '@assets/icons/instagram.png'

const Worker = ({ photo, name, post, achievements, addition, socials }) => {
  const workerAddition = addition.length ? (
    <ul className="worker__addition">
      {addition.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  ) : null

  return (
    <div className="worker">
      <img className="worker__photo" src={photo} alt={name} loading="lazy" />
      <div className="flex column space-between">
        <p>
          <span className="worker__name">{name}</span>
          <span className="worker__post">{post}</span>
        </p>
        <p className="worker__achievements">{achievements}</p>
        {workerAddition}
        {socials && (
          <ul className="worker__socials">
            {socials.vk ? (
              <li>
                <a href={socials.vk} target="_blank" rel="noreferrer">
                  <img src={vkIcon} alt="vk" loading="lazy" />
                </a>
              </li>
            ) : null}
            {socials.instagram ? (
              <li>
                <a href={socials.instagram} target="_blank" rel="noreferrer">
                  <img src={instIcon} alt="instagram" loading="lazy" />
                </a>
              </li>
            ) : null}
          </ul>
        )}
      </div>
    </div>
  )
}

Worker.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  post: PropTypes.string.isRequired,
  achievements: PropTypes.string,
  addition: PropTypes.arrayOf(PropTypes.string),
  // eslint-disable-next-line react/forbid-prop-types
  socials: PropTypes.object,
}

Worker.defaultProps = {
  achievements: '',
  addition: [],
  socials: {},
}

export default Worker
