import React from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'
import FAQItem from './FAQItem'

const FAQ = ({ title }) => (
  <section className="faq">
    <div className="wrapper">
      <h2 className="title">{title}</h2>
      <ul className="faq__list">
        <FAQItem
          key={uuidv4()}
          question="Сколько стоит абонемент?"
          answer="Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nesciunt maxime provident recusandae maiores quos placeat suscipit
            mollitia similique voluptatem delectus."
        />
        <FAQItem
          key={uuidv4()}
          question="Как долго проходит «Лагерь»?"
          answer="Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nesciunt maxime provident recusandae maiores quos placeat suscipit
            mollitia similique voluptatem delectus."
        />
        <FAQItem
          key={uuidv4()}
          question="Сколько участников  «Лагеря»?"
          answer="Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nesciunt maxime provident recusandae maiores quos placeat suscipit
            mollitia similique voluptatem delectus."
        />
        <FAQItem
          key={uuidv4()}
          question="Для кого подоходит «Лагерь»?"
          answer="Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nesciunt maxime provident recusandae maiores quos placeat suscipit
            mollitia similique voluptatem delectus."
        />
      </ul>
    </div>
  </section>
)

FAQ.propTypes = {
  title: PropTypes.string.isRequired,
}

export default FAQ
