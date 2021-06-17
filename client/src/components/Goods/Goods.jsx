import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { getMerch } from '@redux/actions/merch'
import useHttp from '@hooks/http.hook'
import Merch from '@components/Merch/Merch'

const Goods = () => {
  const dispatch = useDispatch()
  const { request } = useHttp()
  const items = useSelector(({ merch }) => merch.items)
  const isLoaded = useSelector(({ merch }) => merch.isLoaded)

  useEffect(() => {
    dispatch(getMerch(request))
  }, [])

  return (
    <div className="goods">
      {isLoaded &&
        items.map(item => (
          <Merch
            key={uuidv4()}
            // eslint-disable-next-line max-len
            img={`https://redyar-images.s3.eu-west-1.amazonaws.com/${item.uploadedFile.path}`}
            name={item.name}
            price={item.price}
            sizes={item.sizes}
          />
        ))}
    </div>
  )
}

Goods.propTypes = {}

export default Goods
