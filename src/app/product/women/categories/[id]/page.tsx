import React from 'react'

const page = ({params}) => {
  return (
    <div>
    Product details : {decodeURIComponent(params.id)}
  </div>
  )
}

export default page
