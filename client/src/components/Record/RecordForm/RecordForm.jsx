import React from 'react'
import Form from '@generic/Form/Form'
import Input from '@generic/Input/Input'
import Button from '@generic/Button/Button'

const RecordForm = () => (
  <Form>
    <Input type="name" id="name" placeholder="Иван" label="Ваше имя" />
    <Input
      type="tel"
      id="tel"
      placeholder="+7 (___)-___-__-__"
      label="Номер телефона"
    />
    <Input type="email" id="email" placeholder="iivan@mail.com" label="Email" />
    <Button type="submit">Записаться</Button>
  </Form>
)

export default RecordForm
