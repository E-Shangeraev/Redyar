import React from 'react'

const Flamp = () => {
  function createFlampWidget(d, s) {
    let js = d.getElementsByTagName(s)[0]
    const fjs = d.getElementsByTagName(s)[0]
    js = d.createElement(s)
    js.async = 1
    js.src = '//widget.flamp.ru/loader.js'
    fjs.parentNode.insertBefore(js, fjs)
  }

  return (
    <div className="wrapper">
      <a
        className="flamp-widget"
        // eslint-disable-next-line max-len
        href="//krasnoyarsk.flamp.ru/firm/crossfit_redyar_krossfit_klub-70000001017212847"
        data-flamp-widget-type="responsive-new"
        data-flamp-widget-id="70000001017212847"
        data-flamp-widget-width="100%"
        data-flamp-widget-count="3">
        Отзывы о нас на Флампе
      </a>
      {createFlampWidget(document, 'script')}
    </div>
  )
}

export default Flamp
