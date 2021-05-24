/* eslint-disable max-len */
import React from 'react'
import Button from '@generic/Button/Button'

import reviewer1 from '@assets/img/reviewer-1.png'
import reviewer2 from '@assets/img/reviewer-2.png'

const Reviews = () => (
  <div className="reviews">
    <ul className="reviews__list">
      <li className="review">
        <img className="review__photo" src={reviewer1} alt="Иван Иванов" />
        <div className="flex column space-between">
          <div className="review__grade">
            <svg
              width="120"
              height="20"
              viewBox="0 0 120 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.99935 14.392L15.1494 17.5003L13.7827 11.642L18.3327 7.70033L12.341 7.19199L9.99935 1.66699L7.65768 7.19199L1.66602 7.70033L6.21602 11.642L4.84935 17.5003L9.99935 14.392Z"
                fill="#FF6B00"
              />
              <path
                d="M34.9993 14.392L40.1494 17.5003L38.7827 11.642L43.3327 7.70033L37.341 7.19199L34.9993 1.66699L32.6577 7.19199L26.666 7.70033L31.216 11.642L29.8493 17.5003L34.9993 14.392Z"
                fill="#FF6B00"
              />
              <path
                d="M59.9993 14.392L65.1494 17.5003L63.7827 11.642L68.3327 7.70033L62.341 7.19199L59.9993 1.66699L57.6577 7.19199L51.666 7.70033L56.216 11.642L54.8493 17.5003L59.9993 14.392Z"
                fill="#FF6B00"
              />
              <path
                d="M84.9993 14.392L90.1494 17.5003L88.7827 11.642L93.3327 7.70033L87.341 7.19199L84.9993 1.66699L82.6577 7.19199L76.666 7.70033L81.216 11.642L79.8493 17.5003L84.9993 14.392Z"
                fill="#FF6B00"
              />
              <path
                d="M109.999 14.392L115.149 17.5003L113.783 11.642L118.333 7.70033L112.341 7.19199L109.999 1.66699L107.658 7.19199L101.666 7.70033L106.216 11.642L104.849 17.5003L109.999 14.392Z"
                fill="#323232"
              />
            </svg>
          </div>
          <b className="review__author">Иван Иванов</b>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
            gravida id pellentesque orci, morbi interdum.
          </p>
        </div>
      </li>
      <li className="review">
        <img
          className="review__photo"
          src={reviewer2}
          alt="Александра Петрова"
        />
        <div className="flex column space-between">
          <div className="review__grade">
            <svg
              width="120"
              height="20"
              viewBox="0 0 120 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.99935 14.392L15.1494 17.5003L13.7827 11.642L18.3327 7.70033L12.341 7.19199L9.99935 1.66699L7.65768 7.19199L1.66602 7.70033L6.21602 11.642L4.84935 17.5003L9.99935 14.392Z"
                fill="#FF6B00"
              />
              <path
                d="M34.9993 14.392L40.1494 17.5003L38.7827 11.642L43.3327 7.70033L37.341 7.19199L34.9993 1.66699L32.6577 7.19199L26.666 7.70033L31.216 11.642L29.8493 17.5003L34.9993 14.392Z"
                fill="#FF6B00"
              />
              <path
                d="M59.9993 14.392L65.1494 17.5003L63.7827 11.642L68.3327 7.70033L62.341 7.19199L59.9993 1.66699L57.6577 7.19199L51.666 7.70033L56.216 11.642L54.8493 17.5003L59.9993 14.392Z"
                fill="#FF6B00"
              />
              <path
                d="M84.9993 14.392L90.1494 17.5003L88.7827 11.642L93.3327 7.70033L87.341 7.19199L84.9993 1.66699L82.6577 7.19199L76.666 7.70033L81.216 11.642L79.8493 17.5003L84.9993 14.392Z"
                fill="#FF6B00"
              />
              <path
                d="M109.999 14.392L115.149 17.5003L113.783 11.642L118.333 7.70033L112.341 7.19199L109.999 1.66699L107.658 7.19199L101.666 7.70033L106.216 11.642L104.849 17.5003L109.999 14.392Z"
                fill="#323232"
              />
            </svg>
          </div>
          <b className="review__author">Александра Петрова</b>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
            gravida id pellentesque orci, morbi interdum.
          </p>
        </div>
      </li>
    </ul>
    <Button gray>Больше отзывов</Button>
  </div>
)

export default Reviews
