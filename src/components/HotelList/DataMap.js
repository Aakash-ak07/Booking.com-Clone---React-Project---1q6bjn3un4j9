import React from 'react'
import SearchItem from '../searchItem/SearchItem'
import Data from './Hotel'

export default function DataMap(props) {
  return (
    <div>
      { Data.map((user) => {
        if (props.ID === user.id && props.location === user.Location) {
          return (
            <SearchItem Location={user.Location} imgsrc={user.imgsrc} availableFrom={user.availableFrom} Price={user.price} />
          )
        }
      })
      }
    </div>
  )
}
