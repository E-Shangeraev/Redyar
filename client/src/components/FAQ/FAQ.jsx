import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'
import useHttp from '@hooks/http.hook'
import FAQItem from './FAQItem'

const FAQ = ({ title, fetchUrl }) => {
  const { request } = useHttp()
  const [faqItems, setFaqItems] = useState([])

  useEffect(async () => {
    const items = await request(fetchUrl)
    setFaqItems(items)
  }, [])

  return (
    <section className="faq">
      <div className="wrapper">
        <h2 className="title">{title}</h2>
        <ul className="faq__list">
          {faqItems &&
            faqItems.map(item => (
              <FAQItem
                key={uuidv4()}
                question={item.question}
                answer={item.answer}
              />
            ))}
        </ul>
      </div>
    </section>
  )
}

FAQ.propTypes = {
  title: PropTypes.string.isRequired,
  fetchUrl: PropTypes.string.isRequired,
}

export default FAQ
