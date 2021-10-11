import React from 'react'
import {useSelector} from "react-redux"

function Storage() {
  let storeValue = useSelector(state => state)
  return (
    <div>
         i am redux {storeValue}
    </div>
  )
}

export default Storage
