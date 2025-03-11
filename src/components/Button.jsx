import React from 'react'

const Button = ({text,className}) => {
  return (
    <button className={`bg-secondary py-[14px] px-7 rounded-[100px] text-lg text-white font-semibold font-open border border-transparent hover:bg-transparent hover:border-secondary duration-300 ${className}`}>{text}</button>
  )
}

export default Button