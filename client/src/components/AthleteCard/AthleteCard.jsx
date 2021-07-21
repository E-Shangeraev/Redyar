import React from 'react'
import PropTypes from 'prop-types'
import vkIcon from '@assets/icons/vk.png'
import instIcon from '@assets/icons/instagram.png'

const AthleteCard = ({
  photo,
  name,
  // post,
  achievements,
  // addition,
  socials,
}) => (
  // const athlete-cardAddition = addition.length ? (
  //   <ul className="athlete-card__addition">
  //     {addition.map(item => (
  //       <li key={item}>{item}</li>
  //     ))}
  //   </ul>
  // ) : null

  <div className="athlete-card">
    <div className="athlete-card__photo">
      <img src={photo} alt={name} loading="lazy" />
    </div>
    <div className="flex column">
      <p>
        <span className="athlete-card__name">{name}</span>
        {/* <span className="athlete-card__post">{post}</span> */}
      </p>
      <p className="athlete-card__achievements">{achievements}</p>
      {/* {athlete-cardAddition} */}
      {socials && (
        <ul className="athlete-card__socials">
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

AthleteCard.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  // post: PropTypes.string.isRequired,
  achievements: PropTypes.string,
  // addition: PropTypes.arrayOf(PropTypes.string),
  // eslint-disable-next-line react/forbid-prop-types
  socials: PropTypes.objectOf(PropTypes.string),
}

AthleteCard.defaultProps = {
  achievements: '',
  // addition: [],
  socials: {},
}

export default AthleteCard
