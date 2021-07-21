import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import useHttp from '@hooks/http.hook'
import Title from '@generic/Title/Title'

const AwardsTabs = () => {
  const [clubAwards, setClubAwards] = useState([])
  const { request } = useHttp()
  const url = 'https://redyar-images.s3.eu-west-1.amazonaws.com/'

  useEffect(async () => {
    const clubItems = await request('/api/awards/club')
    setClubAwards(clubItems)
  }, [])

  return (
    <section className="awards" id="awards">
      <div className="wrapper">
        <Title>награды клуба</Title>
        <div className="awards__tab">
          <ul className="awards__list">
            {clubAwards &&
              clubAwards.map(item => (
                <li key={uuidv4()}>
                  <img
                    className="awards__img"
                    src={`${url}${item.uploadedFile.path}`}
                    alt={item.title}
                  />
                  <b className="awards__title">{item.title}</b>
                  <p className="awards__text">{item.text}</p>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default AwardsTabs
