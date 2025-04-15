import React from 'react'

const SubHeading = ({text,className}) => {
  return (
    <p className={`text-base md:text-lg text-four font-normal font-paprika leading-[30px] ${className}`}>{text}</p>
  )
}

export default SubHeading