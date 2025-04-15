import React from 'react'

const Button = ({text,className}) => {
  return (
    <button className={`bg-secondary py-2 px-4 md:py-[14px] md:px-7 rounded-[100px] text-base md:text-lg text-white font-semibold font-open border border-transparent hover:bg-transparent hover:border-secondary duration-300 ${className}`}>{text}</button>
  )
}

export default Button