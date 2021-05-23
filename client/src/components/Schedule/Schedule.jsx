import React from 'react'

const Schedule = () => (
  <section className="schedule">
    <div className="wrapper">
      <div className="flex space-between align-center mb5">
        <h2 className="title">Расписание</h2>
        <p className="schedule__today">
          <span>Сегодня:</span>
          <button className="schedule__button" type="button">
            <span>15 ноября, пн</span>
            <svg
              width="15"
              height="9"
              viewBox="0 0 15 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 9L0 0H15L7.5 9Z" fill="#F15C22" />
            </svg>
          </button>
        </p>
      </div>
      <ul className="schedule__container">
        <li>
          <span className="schedule__time">8:00–9:00</span>
          <div>
            <span className="schedule__name">Crossfit</span>
            <p className="schedule__descrition">
              Загнятия кроссифтом в группе с тренером
            </p>
          </div>
        </li>
        <li>
          <span className="schedule__time">8:00–9:00</span>
          <div>
            <span className="schedule__name">Crossfit</span>
            <p className="schedule__descrition">
              Загнятия кроссифтом в группе с тренером
            </p>
          </div>
        </li>
        <li>
          <span className="schedule__time">8:00–9:00</span>
          <div>
            <span className="schedule__name">Crossfit</span>
            <p className="schedule__descrition">
              Загнятия кроссифтом в группе с тренером
            </p>
          </div>
        </li>
        <li>
          <span className="schedule__time">8:00–9:00</span>
          <div>
            <span className="schedule__name">Crossfit</span>
            <p className="schedule__descrition">
              Загнятия кроссифтом в группе с тренером
            </p>
          </div>
        </li>
        <li>
          <span className="schedule__time">8:00–9:00</span>
          <div>
            <span className="schedule__name">Crossfit</span>
            <p className="schedule__descrition">
              Загнятия кроссифтом в группе с тренером
            </p>
          </div>
        </li>
        <li>
          <span className="schedule__time">8:00–9:00</span>
          <div>
            <span className="schedule__name">Crossfit</span>
            <p className="schedule__descrition">
              Загнятия кроссифтом в группе с тренером
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
)

export default Schedule
