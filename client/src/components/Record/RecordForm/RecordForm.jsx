import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import Form from '@generic/Form/Form'
import Input from '@generic/Input/Input'
import Select from '@generic/Select/Select'
import Textarea from '@generic/Textarea/Textarea'
import Button from '@generic/Button/Button'

const options = ['1-й поток с 05.08 по 15.08']
const messangers = ['Telegram', 'Viber', 'WhatsUp']

const RecordForm = ({ isCamp, hasTextarea }) => {
  const [selectedOption, setSelectedOption] = useState(null)
  const [selectedMessanger, setSelectedMessanger] = useState(null)

  const selectItem = useCallback(
    selectedItem => setSelectedOption(selectedItem),
    []
  )
  const selectMessanger = useCallback(
    selectedItem => setSelectedMessanger(selectedItem),
    []
  )

  if (hasTextarea) {
    return (
      <Form>
        <div className="form__container">
          <Input type="name" placeholder="Иван" label="Ваше имя" />
          <Input
            type="tel"
            placeholder="+7 (___)-___-__-__"
            label="Номер телефона"
            mask="+7\ (999)-999-99-99"
          />
          <Select
            activeItem={selectedMessanger}
            onClickItem={selectMessanger}
            items={messangers}
            label="Выберите мессенджер для связи"
            outline
          />
          <Button type="submit">Записаться</Button>
          {/* </div> */}
          <Textarea name="text" placeholder="Введите ваш вопрос" />
        </div>
      </Form>
    )
  }
  return (
    <Form className="record__form">
      <Input type="name" placeholder="Иван" label="Ваше имя" />
      <Input
        type="tel"
        placeholder="+7 (___)-___-__-__"
        label="Номер телефона"
        mask="+7\ (999)-999-99-99"
      />
      <Select
        activeItem={selectedMessanger}
        onClickItem={selectMessanger}
        items={messangers}
        label="Выберите мессенджер для связи"
        outline
      />
      {isCamp ? (
        <Select
          activeItem={selectedOption}
          onClickItem={selectItem}
          items={options}
          label="Выберите поток"
          outline
        />
      ) : null}
      <Button type="submit">Записаться</Button>
    </Form>
  )
}

RecordForm.propTypes = {
  isCamp: PropTypes.bool,
  hasTextarea: PropTypes.bool,
}

RecordForm.defaultProps = {
  isCamp: false,
  hasTextarea: false,
}

export default RecordForm
