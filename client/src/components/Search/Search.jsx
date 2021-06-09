import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useHttp from '@hooks/http.hook'
import { findArticles, getArticles } from '@redux/actions/blog'

const Search = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const { request } = useHttp()
  const { category } = useSelector(({ filter }) => filter)

  const submitHanlder = e => {
    e.preventDefault()

    if (value.length) {
      dispatch(findArticles({ request: value }, category, request))
    } else {
      dispatch(getArticles(category, request))
    }
  }

  return (
    <form className="search" onSubmit={submitHanlder}>
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
        type="search"
        placeholder="Искать в блоге"
      />
    </form>
  )
}

export default Search
