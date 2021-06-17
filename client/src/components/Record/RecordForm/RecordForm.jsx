import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Form from '@generic/Form/Form'
import Input from '@generic/Input/Input'
import Select from '@generic/Select/Select'
import Textarea from '@generic/Textarea/Textarea'
import Button from '@generic/Button/Button'
import useHttp from '@hooks/http.hook'

const options = ['1-й поток с 05.08 по 15.08']
const messangers = ['Telegram', 'Viber', 'WhatsUp']

const RecordForm = ({ isCamp, hasTextarea }) => {
  const { request } = useHttp()
  const [isDisabled, setIsDisabled] = useState(true)
  const [error, setError] = useState(null)
  const [formValue, setFormValue] = useState({
    name: null,
    tel: null,
    text: null,
    messanger: null,
    option: null,
  })

  const onSelect = useCallback((key, selectedItem) => {
    setFormValue(prev => ({
      ...prev,
      [key]: selectedItem,
    }))
  })

  const onChangeForm = useCallback(e => {
    setFormValue(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  })

  const validateForm = inputs => {
    inputs.forEach(inputValue => {
      if (!inputValue) {
        setError('Необходимо заполнить все поля')
        return setIsDisabled(true)
      }
      setError(null)
      return setIsDisabled(false)
    })
  }

  const onSubmitForm = async e => {
    e.preventDefault()

    console.log(formValue)

    // const { message } = await request('/api/mail', 'POST', formValue)

    // if (message === 'ok') {
    //   console.log('Успешно!')
    // }
  }

  const handleError = () => {
    if (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const { name, tel, text, messanger, option } = formValue

    if (hasTextarea && text) {
      validateForm([name, tel, messanger, text])
    }
    if (isCamp && option) {
      validateForm([name, tel, messanger, option])
    }
    if (!hasTextarea && !isCamp) {
      validateForm([name, tel, messanger])
    }
  }, [formValue])

  if (hasTextarea) {
    return (
      <Form onSubmit={onSubmitForm}>
        <div className="form__container">
          <Input
            type="name"
            placeholder="Иван"
            label="Ваше имя"
            changeHandler={onChangeForm}
          />
          <Input
            type="tel"
            placeholder="+7 (___)-___-__-__"
            label="Номер телефона"
            mask="+7\ (999)-999-99-99"
            changeHandler={onChangeForm}
          />
          <Select
            activeItem={formValue.messanger}
            onClickItem={onSelect}
            items={messangers}
            name="messanger"
            label="Выберите мессенджер для связи"
            outline
          />
          <Button
            type="submit"
            disabled={isDisabled}
            onClickHandler={handleError}>
            Записаться
          </Button>
          <Textarea
            name="text"
            placeholder="Введите ваш вопрос"
            changeHandler={onChangeForm}
          />
        </div>
      </Form>
    )
  }
  return (
    <Form className="record__form" onSubmit={onSubmitForm}>
      <Input
        type="name"
        placeholder="Иван"
        label="Ваше имя"
        changeHandler={onChangeForm}
      />
      <Input
        type="tel"
        placeholder="+7 (___)-___-__-__"
        label="Номер телефона"
        mask="+7\ (999)-999-99-99"
        changeHandler={onChangeForm}
      />
      <Select
        activeItem={formValue.messanger}
        onClickItem={onSelect}
        items={messangers}
        name="messanger"
        label="Выберите мессенджер для связи"
        outline
      />
      {isCamp ? (
        <Select
          activeItem={formValue.option}
          onClickItem={onSelect}
          items={options}
          name="option"
          label="Выберите поток"
          outline
        />
      ) : null}
      <Button type="submit" disabled={isDisabled} onClickHandler={handleError}>
        Записаться
      </Button>
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
