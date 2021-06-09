import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Markup } from 'interweave'

const FAQItem = ({ question, answer }) => {
  const [toggleQuestion, setToggleQuestion] = useState(false)
  const faqAnswerRef = useRef()

  const onToggleQuestion = () => {
    setToggleQuestion(!toggleQuestion)
  }

  useEffect(() => {
    if (toggleQuestion) {
      faqAnswerRef.current.style.maxHeight = `
      ${faqAnswerRef.current.scrollHeight}px`
    } else {
      faqAnswerRef.current.style.maxHeight = ''
    }
  }, [toggleQuestion])

  return (
    <li>
      <button
        type="button"
        className="faq__question"
        onClick={onToggleQuestion}>
        <span className={classNames({ active: toggleQuestion })}>
          {question}
        </span>
        <div
          className={classNames('faq__arrow', {
            'faq__arrow--rotated': toggleQuestion,
          })}>
          <svg
            width="19"
            height="16"
            viewBox="0 0 19 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.35288e-05 9L14.5861 9L9.29306 14.293L10.7071
              15.707L18.4141 8L10.7071 0.293L9.29306 1.707L14.5861
              7L6.37037e-05 7L6.35288e-05 9Z"
              fill="white"
            />
          </svg>
        </div>
      </button>
      <div className="faq__answer" ref={faqAnswerRef}>
        <Markup content={answer} />
      </div>
    </li>
  )
}

FAQItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
}

export default FAQItem
