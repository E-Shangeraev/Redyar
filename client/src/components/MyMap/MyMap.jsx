import React from 'react'
import { YMaps, Map, Placemark } from 'react-yandex-maps'
import marker from '@assets/icons/map-marker-2.svg'

const MyMap = () => (
  <div className="location__map">
    <YMaps
      query={{
        apikey: '8596f46f-4416-4fbb-87ee-ef65ee25576e',
      }}>
      <Map
        defaultState={{ center: [56.020315, 92.902046], zoom: 15.16 }}
        style={{ width: '100%', height: '500px' }}>
        <Placemark
          geometry={[56.020315, 92.902046]}
          properties={{}}
          options={{
            iconLayout: 'default#image',
            iconImageHref: marker,
            iconImageSize: [78, 77],
            iconImageOffset: [-50, -60],
          }}
        />
      </Map>
    </YMaps>
  </div>
)

export default MyMap
