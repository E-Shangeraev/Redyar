import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
// import Select from 'react-select'
import Form from '@generic/Form/Form'
import Input from '@generic/Input/Input'
import Select from '@generic/Select/Select'
import Button from '@generic/Button/Button'

const options = [
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
  'Воскресенье',
]

const RecordForm = ({ isCamp }) => {
  const [selectedOption, setSelectedOption] = useState(null)

  const selectItem = useCallback(
    selectedItem => setSelectedOption(selectedItem),
    []
  )

  return (
    <Form>
      <Input type="name" id="name" placeholder="Иван" label="Ваше имя" />
      <Input
        type="tel"
        id="tel"
        placeholder="+7 (___)-___-__-__"
        label="Номер телефона"
        mask="+7\ (999)-999-99-99"
      />
      <Input
        type="email"
        id="email"
        placeholder="iivan@mail.com"
        label="Email"
      />
      {isCamp ? (
        <Select
          activeItem={selectedOption}
          onClickItem={selectItem}
          items={options}
          label="Выберите поток"
          id="select"
        />
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
