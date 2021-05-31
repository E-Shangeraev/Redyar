import React from 'react'

import imageJpg from '@assets/img/Camp/2.jpg'
import imageJpgSmall from '@assets/img/Camp/2_small.jpg'
import imageWebp from '@assets/img/Camp/2.webp'
import imageWebpSmall from '@assets/img/Camp/2_small.webp'

const DailyRoutine = () => (
  <section className="routine">
    <div className="wrapper-w100">
      <h2 className="title pl">распорядок дня</h2>

      <div className="flex">
        <picture className="routine__image">
          <source
            srcSet={imageWebpSmall}
            media="(max-width: 560px)"
            type="image/webp"
          />
          <source srcSet={imageJpgSmall} media="(max-width: 560px)" />
          <source srcSet={imageWebp} type="image/webp" />
          <img src={imageJpg} alt="Фото с тренировки" />
        </picture>
        <ul className="routine__schedule">
          <li>
            <b className="schedule__time">8:00–9:00</b>
            <div>
              <span className="schedule__name schedule__name--blue">
                Зарядка
              </span>
              <p className="schedule__descrition">Первая тренировка</p>
            </div>
          </li>
          <li>
            <b className="schedule__time">11:00—12:30</b>
            <div>
              <span className="schedule__name">
                <span className="schedule__name--orange">
                  Тяжёлая атлетика{' '}
                </span>
                /<span className="schedule__name--purple"> Гимнастика </span>/
                <span className="schedule__name--blue"> WOD</span>
              </span>
              <p className="schedule__descrition">Вторая тренировка</p>
            </div>
          </li>
          <li>
            <b className="schedule__time">16:30–18:00</b>
            <div>
              <span className="schedule__name schedule__name--orange">
                Crossfit
              </span>
              <p className="schedule__descrition">Третья тренировка</p>
            </div>
          </li>
          <li>
            <b className="schedule__time">20:00–21:00</b>
            <div>
              <span className="schedule__name schedule__name--purple">ТА</span>
              <p className="schedule__descrition">Четвёртая тренировка</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default DailyRoutine
