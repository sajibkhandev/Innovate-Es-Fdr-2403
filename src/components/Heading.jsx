import React from 'react'

const Heading = ({text,className}) => {
  return (
    <h2 className={`text-5xl text-thrid font-bold font-open ${className}`}>{text}</h2>
  )
}

export default Heading