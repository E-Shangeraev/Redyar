import React from 'react'

const Filters = () => {
  const onChangeValue = event => {
    console.log(event.target.value)
  }

  return (
    <aside className="filters">
      <span className="filters__title">Фильтры</span>
      <form>
        <fieldset className="filters__type" onChange={onChangeValue}>
          <label className="filters__label" htmlFor="1">
            <input type="radio" value="Футболка" name="type" id="1" />
            <span className="custom-radio" />
            Футболка
          </label>
          <label className="filters__label" htmlFor="2">
            <input type="radio" value="Свитшот" name="type" id="2" />
            <span className="custom-radio" />
            Свитшот
          </label>
          <label className="filters__label" htmlFor="3">
            <input type="radio" value="Скакалки" name="type" id="3" />
            <span className="custom-radio" />
            Скакалки
          </label>
          <label className="filters__label" htmlFor="4">
            <input type="radio" value="Кистевые бинты" name="type" id="4" />
            <span className="custom-radio" />
            Кистевые бинты
          </label>
          <label className="filters__label" htmlFor="5">
            <input type="radio" value="Наколенники" name="type" id="5" />
            <span className="custom-radio" />
            Наколенники
          </label>
        </fieldset>
      </form>
      <div className="filters__size" onChange={onChangeValue}>
        <label className="filters__label" htmlFor="S">
          <input type="radio" value="S" name="type" id="S" />
          <span className="custom-radio" />S
        </label>
        <label className="filters__label" htmlFor="M">
          <input type="radio" value="M" name="type" id="M" />
          <span className="custom-radio" />M
        </label>
        <label className="filters__label" htmlFor="L">
          <input type="radio" value="L" name="type" id="L" />
          <span className="custom-radio" />L
        </label>
        <label className="filters__label" htmlFor="XL">
          <input type="radio" value="XL" name="type" id="XL" />
          <span className="custom-radio" />
          XL
        </label>
        <label className="filters__label" htmlFor="XXL">
          <input type="radio" value="XXL" name="type" id="XXL" />
          <span className="custom-radio" />
          XXL
        </label>
      </div>
    </aside>
  )
}

export default Filters
