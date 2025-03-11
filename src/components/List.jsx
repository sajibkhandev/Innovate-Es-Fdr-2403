import React from 'react'

const List = ({text,className}) => {
  return (
    <li className={`text-primary text-lg font-semibold font-open list-none hover:text-secondary duration-300 ${className}`}>{text}</li>
  )
}

export default List