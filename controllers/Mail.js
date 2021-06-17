const nodemailer = require('nodemailer')
const config = require('config')

class Mail {
  send = async (req, res) => {
    try {
      this.html = this.createMailBody(req.body)
      await this.createMailOptions(this.html)
      res.status(200).json({ message: 'ok' })
    } catch (err) {
      res.status(400)
      throw err
    }
  }
  createMailOptions = async data => {
    let transporter = nodemailer.createTransport({
      host: 'smtp.yandex.ru',
      port: 587,
      secure: false,
      auth: {
        user: 'eldar@mygang.ru',
        pass: '1234509876',
      },
    })

    let mailOption = {
      from: `<eldar@mygang.ru>`,
      to: 'eldar@mygang.ru',
      subject: 'Crossfit Redyar',
      html: data,
    }

    let info = await transporter.sendMail(mailOption)
    console.log('Message sent: %s', info.messageId)
    return true
  }
  createMailBody = ({ name, tel, messanger, text, option }) => {
    return `
    <!DOCTYPE html>
    <html lang="ru">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </head>
      <body
        style="
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
          margin: 0;
          padding: 0;
          line-height: 100%;
          color: #ffffff;
          width: 100% !important;
          font-family: 'Noto Sans', arial, sans-serif !important;
        "
      >
        <div
          class="mail"
          style="
            width: 100%;
            margin: 0 auto;
            background-color: #131719;
            background-image: url(http://cfry.ru/bg-1.png);
            background-position: top;
            background-size: cover;
            background-repeat: no-repeat;
          "
        >
          <div class="wrapper" style="margin: 0 auto; max-width: 850px">
            <div
              class="header"
              style="
                position: relative;
                width: 100%;
                background-color: rgba(100, 100, 100, 0.2);
                border-bottom: 1px solid #888;
                box-sizing: border-box;
                padding: 20px;
              "
            >
              <div
                class="header__left"
                style="width: 100%; text-align: center; margin-bottom: 30px"
              >
                <a
                  href="http://cfry.ru"
                  target="_blank"
                  class="logo"
                  style="display: inline-block; width: fit-content; height: 100%"
                >
                  <img
                    src="http://cfry.ru/logo192.png"
                    alt="Логотип Crossfit Redyar"
                    style="
                      outline: none;
                      text-decoration: none;
                      border: none;
                      -ms-interpolation-mode: bicubic;
                      margin: 0;
                      padding: 0;
                      display: block;
                      width: 70px;
                      height: auto;
                      max-width: 100% !important;
                    "
                  />
                </a>
              </div>
              <div class="header__right" style="width: 100%; text-align: center">
                <h2
                  class="title"
                  style="
                    margin: 0;
                    font-size: 26px;
                    line-height: 100%;
                    color: #dbdbdb;
                  "
                >
                  Crossfit Redyar
                </h2>
                <p style="margin: 15px 0; color: #dbdbdb">
                  Новая заявка с сайта
                  <a href="http://cfry.ru" target="_blank" style="color: #f15c22"
                    >cfry.ru</a
                  >
                </p>
              </div>
            </div>
            <div
              class="body"
              style="padding: 20px; color: #000; background-color: #f1f1f1"
            >
              <ul
                class="body__list"
                style="padding: 0; margin: 0; list-style: none"
              >
                <li style="padding: 25px 0; font-size: 14px">
                      <b
                        style="
                        display: inline-block;
                        width: 100px;
                        border-right: 1px solid #adadad;
                        "
                        >Имя:</b
                      >
                      <span style="padding-left: 15px">${name}</span>
                    </li>
                    <li style="padding: 25px 0; font-size: 14px">
                      <b
                        style="
                          display: inline-block;
                          width: 100px;
                          border-right: 1px solid #adadad;
                        "
                        >Телефон:</b
                      >
                      <a href="tel:${tel}" style="padding-left: 15px"
                        >${tel}</a
                      >
                    </li>
                    ${
                      text
                        ? `<li style="padding: 25px 0; font-size: 14px">
                    <b
                      style="
                        display: inline-block;
                        width: 100px;
                        border-right: 1px solid #adadad;
                      "
                      >Текст сообщения:</b
                    >
                    <span style="padding-left: 15px">${text}</span>
                  </li>`
                        : ''
                    }
                    <li style="padding: 25px 0; font-size: 14px">
                      <b
                        style="
                          display: inline-block;
                          width: 100px;
                          border-right: 1px solid #adadad;
                        "
                        >Мессенджер:</b
                      >
                      <span style="padding-left: 15px">${messanger}</span>
                    </li>
                    ${
                      option
                        ? `
                      <li style="padding: 25px 0; font-size: 14px">
                      <b
                        style="
                          display: inline-block;
                          width: 100px;
                          border-right: 1px solid #adadad;
                        "
                        >Поток:</b
                      >
                      <span style="padding-left: 15px">${option}</span>
                    </li>
                      `
                        : ''
                    }
              </ul>
            </div>
            <div
              class="footer"
              style="
                padding: 20px;
                font-size: 12px;
                background-color: rgba(100, 100, 100, 0.2);
              "
            >
              <span style="color: #ffffff">Разработано компанией </span>
              <a
                href="http://mygang.ru"
                target="_blank"
                style="text-decoration: none; color: #f15c22"
                >Gang</a
              >
            </div>
          </div>
        </div>
      </body>
    </html>
    `
  }
}

module.exports = new Mail()
