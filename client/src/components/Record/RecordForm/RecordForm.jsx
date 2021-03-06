import React, { useCallback, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import Form from '@generic/Form/Form'
import Input from '@generic/Input/Input'
import Select from '@generic/Select/Select'
import Textarea from '@generic/Textarea/Textarea'
import Button from '@generic/Button/Button'
import useHttp from '@hooks/http.hook'

const options = ['1-й поток с 05.08 по 15.08']
const messangers = ['Telegram', 'Viber', 'WhatsUp']

const RecordForm = ({ isCamp, hasTextarea, onSubmit }) => {
  const { request } = useHttp()
  const formRef = useRef()
  const [isValid, setIsValid] = useState(false)
  const [error, setError] = useState('')
  const [formValue, setFormValue] = useState({
    name: '',
    tel: '',
    text: '',
    messanger: '',
    option: '',
  })

  const onSelect = useCallback((key, selectedItem) => {
    setError('')
    setFormValue(prev => ({
      ...prev,
      [key]: selectedItem,
    }))
  })

  const onChangeForm = useCallback(e => {
    setError('')
    setFormValue(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  })

  const checkEmptyInputs = inputs =>
    inputs.find(input => input.length === 0) === undefined

  const checkName = name => {
    const has = name.match(/[a-яА-ЯЁё]/g)
    return has ? has.length >= 2 && has.length <= 20 : false
  }

  const checkTel = tel => {
    const has = tel.match(/\d/g)
    return has ? has.length === 11 : false
  }

  const validateForm = obj => {
    const inputs = Object.values(obj)

    if (checkEmptyInputs(inputs) && checkName(obj.name) && checkTel(obj.tel)) {
      setIsValid(true)
    } else {
      setIsValid(false)
    }
  }

  const onSubmitForm = async e => {
    e.preventDefault()

    if (isValid) {
      console.log(formValue)

      // const { message } = await request('/api/mail', 'POST', formValue)

      // if (message === 'ok') {
      //   console.log('Успешно!')
      formRef.current.reset()
      setFormValue(prev => ({
        ...prev,
        tel: '',
        messanger: '',
        option: '',
      }))
      onSubmit()
      setIsValid(false)
      setError('')
      // }
    } else {
      setError('*Необходимо заполнить все поля')
    }
  }

  useEffect(() => {
    const { name, tel, text, messanger, option } = formValue

    if (hasTextarea && text) {
      validateForm({ name, tel, messanger, text })
    }
    if (isCamp && option) {
      validateForm({ name, tel, messanger, option })
    }
    if (!hasTextarea && !isCamp) {
      validateForm({ name, tel, messanger })
    }
  }, [formValue])

  if (hasTextarea) {
    return (
      <Form onSubmit={onSubmitForm} ref={formRef}>
        {error && <p className="error">{error}</p>}
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
            value={formValue.tel}
            changeHandler={onChangeForm}
          />
          <Select
            activeItem={formValue.messanger}
            onClickItem={onSelect}
            items={messangers}
            name="messanger"
            label="Мессенджер для связи"
            outline
          />

          <Button type="submit">Записаться</Button>
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
    <Form className="record__form" onSubmit={onSubmitForm} ref={formRef}>
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
        value={formValue.tel}
        changeHandler={onChangeForm}
      />
      <Select
        activeItem={formValue.messanger}
        onClickItem={onSelect}
        items={messangers}
        name="messanger"
        label="Мессенджер для связи"
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
      {error && <p className="error">{error}</p>}
      <Button type="submit">Записаться</Button>
    </Form>
  )
}

RecordForm.propTypes = {
  isCamp: PropTypes.bool,
  hasTextarea: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
}

RecordForm.defaultProps = {
  isCamp: false,
  hasTextarea: false,
}

export default RecordForm
