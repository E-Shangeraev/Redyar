import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
// import Select from 'react-select'
import Form from '@generic/Form/Form'
import Input from '@generic/Input/Input'
import Select from '@generic/Select/Select'
import Button from '@generic/Button/Button'

const options = ['1-й поток с 01.06 по 07.06', '2-й поток с 08.06 по 15.06']

const messangers = ['Telegram', 'Viber', 'WhatsUp']

const RecordForm = ({ isCamp }) => {
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

  return (
    <Form className="record__form">
      <Input type="name" id="name" placeholder="Иван" label="Ваше имя" />
      <Input
        type="tel"
        id="tel"
        placeholder="+7 (___)-___-__-__"
        label="Номер телефона"
        mask="+7\ (999)-999-99-99"
      />
      {isCamp ? (
        <>
          <Select
            activeItem={selectedMessanger}
            onClickItem={selectMessanger}
            items={messangers}
            label="Выберите мессенджер для связи"
            id="select-messanger"
            outline
          />
          <Select
            activeItem={selectedOption}
            onClickItem={selectItem}
            items={options}
            label="Выберите поток"
            id="select-stream"
            outline
          />
        </>
      ) : null}
      <Button type="submit">Записаться</Button>
    </Form>
  )
}

RecordForm.propTypes = {
  isCamp: PropTypes.bool,
}

RecordForm.defaultProps = {
  isCamp: false,
}

export default RecordForm
