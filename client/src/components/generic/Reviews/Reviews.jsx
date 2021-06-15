/* eslint-disable max-len */
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import useHttp from '@hooks/http.hook'
import Button from '@generic/Button/Button'
import Stars from './Stars'

const Reviews = () => {
  const reviewsRef = useRef()
  const { request } = useHttp()
  const [reviews, setReviews] = useState([])
  const [count, setCount] = useState(2)
  const [visibleButton, setVisibleButton] = useState(true)
  const [reviewsCount, setReviewsCount] = useState(null)

  useEffect(async () => {
    const itemsCount = await request('/api/reviews/count')
    const items = await request('/api/reviews?_to=2')
    setReviews(items)
    setReviewsCount(itemsCount)
  }, [])

  const showMoreHandler = useCallback(async () => {
    const items = await request(`/api/reviews?_from=${count}&_to=${count + 2}`)
    setReviews(prev => [...prev, ...items])
    setCount(prev => prev + 2)
    reviewsRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [count])

  useEffect(() => {
    if (count === reviewsCount) {
      setVisibleButton(false)
    }
  }, [count])

  if (reviews) {
    return (
      <div className="reviews" ref={reviewsRef}>
        <ul className="reviews__list">
          {reviews.map(item => (
            <li className="review" key={uuidv4()}>
              <img
                className="review__photo"
                src={`https://redyar-images.s3.eu-west-1.amazonaws.com/${item.uploadedFile.path}`}
                alt="{item.name}"
                loading="lazy"
              />
              <div className="flex column space-between">
                <div className="review__grade">
                  <Stars rating={+item.rating} />
                </div>
                <b className="review__author">{item.name}</b>
                <p>{item.review}</p>
              </div>
            </li>
          ))}
        </ul>
        {visibleButton && (
          <Button onClickHandler={showMoreHandler} gray>
            Больше отзывов
          </Button>
        )}
      </div>
    )
  }

  return null
}

export default Reviews

// const items1 = await request('/api/reviews?_from=0')
// console.log('from 0', items1)
// const items2 = await request('/api/reviews?_from=2&_to=4')
// console.log('from 2 to 4', items2)
// const items3 = await request('/api/reviews?_to=2')
// console.log('to 2', items3)
